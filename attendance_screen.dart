import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/student.dart';

class AttendanceScreen extends StatefulWidget {
  @override
  _AttendanceScreenState createState() => _AttendanceScreenState();
}

class _AttendanceScreenState extends State<AttendanceScreen> {
  // បង្កើតទិន្នន័យសិស្សសាកល្បង (Mock Data) ជាបណ្តោះអាសន្ន
  List<Student> students = [
    Student(id: '001', name: 'សុខ សាន្ត'),
    Student(id: '002', name: 'ចាន់ ធីតា'),
    Student(id: '003', name: 'មករា ពេជ្រ'),
    Student(id: '004', name: 'សួស វីរៈ'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('កត់ត្រាវត្តមានសិស្ស'),
        backgroundColor: Colors.blueAccent,
      ),
      body: ListView.builder(
        itemCount: students.length,
        itemBuilder: (context, index) {
          final student = students[index];
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            elevation: 2,
            child: ListTile(
              leading: CircleAvatar(
                backgroundColor: student.isPresent ? Colors.green : Colors.grey,
                child: Text(student.name[0], style: const TextStyle(color: Colors.white)),
              ),
              title: Text(student.name, style: const TextStyle(fontWeight: FontWeight.bold)),
              subtitle: Text('អត្តលេខ៖ ${student.id}'),
              trailing: Switch(
                value: student.isPresent,
                activeColor: Colors.green,
                onChanged: (bool value) {
                  setState(() {
                    // ផ្លាស់ប្តូរស្ថានភាពវត្តមានរបស់សិស្សនៅពេលចុច Switch
                    student.isPresent = value;
                  });
                },
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          try {
            // បង្កើតកាលបរិច្ឆេទថ្ងៃនេះ (ឧទាហរណ៍៖ 2023-10-25)
            final String todayDate = DateTime.now().toIso8601String().split('T')[0];
            final collection = FirebaseFirestore.instance.collection('attendance');

            // វិលជុំរក្សាទុកទិន្នន័យសិស្សម្នាក់ៗ
            for (var student in students) {
              // ប្រើ id របស់សិស្សរួមជាមួយកាលបរិច្ឆេទ ជា Document ID ដើម្បីកុំឱ្យជាន់គ្នា
              await collection.doc('${student.id}-$todayDate').set({
                'studentId': student.id,
                'studentName': student.name,
                'isPresent': student.isPresent,
                'date': todayDate,
                'timestamp': FieldValue.serverTimestamp(), // ម៉ោងម៉ាស៊ីនមេ
              });
            }

            int presentCount = students.where((s) => s.isPresent).length;
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('បានរក្សាទុកទៅកាន់ Firebase! សិស្សវត្តមាន: $presentCount/${students.length} នាក់'),
                backgroundColor: Colors.green,
              ),
            );
          } catch (e) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('មានបញ្ហាក្នុងការរក្សាទុក៖ $e'),
                backgroundColor: Colors.red,
              ),
            );
          }
        },
        label: const Text('រក្សាទុក'),
        icon: const Icon(Icons.save),
        backgroundColor: Colors.blueAccent,
      ),
    );
  }
}