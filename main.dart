import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screens/attendance_screen.dart';
import 'firebase_options.dart';

void main() async {
  // តម្រូវឲ្យមានដើម្បីអាចដំណើរការ Firebase មុនពេល runApp
  WidgetsFlutterBinding.ensureInitialized();
  // ចាប់ផ្តើម Firebase
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const AttendanceApp());
}

class AttendanceApp extends StatelessWidget {
  const AttendanceApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Attendance App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AttendanceScreen(),
    );
  }
}