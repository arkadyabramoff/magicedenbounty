// pages/api/sendTelegramMessage.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
      const { message } = req.body;

      if (!message) {
          return res.status(400).json({ success: false, error: 'Message is required.' });
      }

      const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Bot Token stored as an env variable
      const CHAT_ID = process.env.CHAT_ID; // Chat ID stored as an env variable
      
      if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
          return res.status(500).json({ success: false, error: 'Bot token or chat ID not found.' });
      }

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      try {
          const telegramResponse = await fetch(telegramUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  chat_id: CHAT_ID,
                  text: message
              })
          });

          const telegramData = await telegramResponse.json();

          if (telegramData.ok) {
              return res.status(200).json({ success: true });
          } else {
              return res.status(500).json({ success: false, error: 'Telegram API failed.' });
          }
      } catch (error) {
          console.error("Telegram API error:", error);
          return res.status(500).json({ success: false, error: 'Failed to send the message.' });
      }
  } else {
      // Handle any non-POST request
      return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
