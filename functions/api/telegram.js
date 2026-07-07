export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const { khmerName, latinName, gender, phone, course, shift } = body;

    if (!khmerName || !phone || !course || !shift) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const botToken = (env.TELEGRAM_BOT_TOKEN || '').trim();
    const chatId = (env.TELEGRAM_CHAT_ID || '').trim();

    if (!botToken || !chatId) {
      return new Response(JSON.stringify({ error: 'Telegram Token or Chat ID is missing in Cloudflare Environment Variables.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const message = `
🎉 <b>មានសិស្សថ្មីចុះឈ្មោះ (អនឡាញ)</b> 🎉

👤 <b>ឈ្មោះខ្មែរ៖</b> ${khmerName}
📝 <b>ឈ្មោះឡាតាំង៖</b> ${latinName || 'មិនមាន'}
🚻 <b>ភេទ៖</b> ${gender || 'មិនបញ្ជាក់'}
📞 <b>Telegram / ទូរស័ព្ទ៖</b> ${phone}

📚 <b>វគ្គសិក្សា៖</b> ${course}
⏰ <b>ម៉ោងសិក្សា៖</b> ${shift}
    `;

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      throw new Error(`Telegram API Error: ${telegramData.description || 'Unknown error'}`);
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
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
