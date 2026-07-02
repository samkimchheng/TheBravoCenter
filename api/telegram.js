const https = require('https');

export default async function handler(req, res) {
  // 1. អនុញ្ញាតតែ Method POST ប៉ុណ្ណោះ
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 2. យកទិន្នន័យពីទម្រង់ (Form Data)
    const { khmerName, latinName, gender, phone, course, shift } = req.body;

    // 3. ពិនិត្យមើលថាតើទិន្នន័យសំខាន់ៗបានបញ្ជូនមកដែរឬទេ
    if (!khmerName || !phone || !course || !shift) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 4. យក Token និង Chat ID ពី Environment Variables (Vercel)
    const botToken = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
    const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

    if (!botToken || !chatId) {
      return res.status(500).json({ error: 'Telegram Token or Chat ID is missing in Vercel Environment Variables.' });
    }

    // 5. រៀបចំសារ (Message) សម្រាប់ផ្ញើទៅ Telegram
    const message = `
🎉 <b>មានសិស្សថ្មីចុះឈ្មោះ (អនឡាញ)</b> 🎉

👤 <b>ឈ្មោះខ្មែរ៖</b> ${khmerName}
📝 <b>ឈ្មោះឡាតាំង៖</b> ${latinName || 'មិនមាន'}
🚻 <b>ភេទ៖</b> ${gender || 'មិនបញ្ជាក់'}
📞 <b>Telegram / ទូរស័ព្ទ៖</b> ${phone}

📚 <b>វគ្គសិក្សា៖</b> ${course}
⏰ <b>ម៉ោងសិក្សា៖</b> ${shift}
    `;

    // 6. បញ្ជូនទិន្នន័យទៅកាន់ Telegram API ដោយប្រើប្រាស់ Module 'https'
    const payload = JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${botToken}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const data = await new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => {
          try {
            resolve({ status: response.statusCode, data: JSON.parse(body) });
          } catch (e) {
            reject(new Error('Failed to parse response from Telegram'));
          }
        });
      });

      request.on('error', (e) => reject(e));
      request.write(payload);
      request.end();
    });

    if (data.status !== 200) {
      throw new Error(`Telegram API Error: ${data.data.description || 'Unknown error'}`);
    }

    // 7. ឆ្លើយតបទៅកាន់ Frontend វិញថាជោគជ័យ
    return res.status(200).json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    // ត្រលប់ Error ពិតប្រាកដទៅកាន់ Frontend វិញ ដើម្បីស្រួលដោះស្រាយ
    return res.status(500).json({ error: error.message || String(error) });
  }
}
