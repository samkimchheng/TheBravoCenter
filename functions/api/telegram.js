export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const khmerName = formData.get('khmerName');
    const latinName = formData.get('latinName');
    const gender = formData.get('gender');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const shift = formData.get('shift');
    const paymentScreenshot = formData.get('paymentScreenshot');

    if (!khmerName || !phone || !course || !shift || !paymentScreenshot) {
      return new Response(JSON.stringify({ error: 'Missing required fields or payment screenshot' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const botToken = '8516708366:AAEA1b9lWQC2fMpzeZU5ePnm2Y6t5RV4LS8';
    const chatId = '-1005436333674';

    if (!botToken || !chatId) {
      return new Response(JSON.stringify({ error: 'Telegram Token or Chat ID is missing.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const message = `
🎉 <b>មានសិស្សថ្មីចុះឈ្មោះ និងបង់ប្រាក់</b> 🎉

👤 <b>ឈ្មោះខ្មែរ៖</b> ${khmerName}
📝 <b>ឈ្មោះឡាតាំង៖</b> ${latinName || 'មិនមាន'}
🚻 <b>ភេទ៖</b> ${gender || 'មិនបញ្ជាក់'}
📞 <b>Telegram / ទូរស័ព្ទ៖</b> ${phone}

📚 <b>វគ្គសិក្សា៖</b> ${course}
⏰ <b>ម៉ោងសិក្សា៖</b> ${shift}
    `;

    const telegramFormData = new FormData();
    telegramFormData.append('chat_id', chatId);
    telegramFormData.append('caption', message);
    telegramFormData.append('parse_mode', 'HTML');
    telegramFormData.append('photo', paymentScreenshot);

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: telegramFormData,
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      throw new Error(`Telegram API Error: ${telegramData.description || 'Unknown error'}`);
    }

    return new Response(JSON.stringify({ success: true, message: 'Message and photo sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return new Response(JSON.stringify({ error: error.message || String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
