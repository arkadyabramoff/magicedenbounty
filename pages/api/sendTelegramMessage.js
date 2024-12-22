// pages/api/sendTelegramMessage.js

export default async function handler(req, res) {
  console.log("API route hit"); // Check if the route is being hit
  
  if (req.method === 'POST') {
      const { message } = req.body;
      
      if (!message) {
          return res.status(400).json({ success: false, error: 'Message is required.' });
      }

      const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      const CHAT_ID = process.env.CHAT_ID;
      
      if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
          return res.status(500).json({ success: false, error: 'Bot token or chat ID not found.' });
      }

      try {
          // Log the values of your environment variables for debugging
          console.log("Telegram Bot Token:", TELEGRAM_BOT_TOKEN);
          console.log("Telegram Chat ID:", CHAT_ID);
          
          const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
          
          const telegramResponse = await fetch(telegramUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  chat_id: CHAT_ID,
                  text: message
              })
          });

          const telegramData = await telegramResponse.json();
          console.log("Telegram Response:", telegramData); // Log the response from Telegram

          if (telegramData.ok) {
              return res.status(200).json({ success: true });
          } else {
              return res.status(500).json({ success: false, error: 'Telegram API failed.' });
          }
      } catch (error) {
          console.error("Error while sending message:", error);
          return res.status(500).json({ success: false, error: 'Failed to send the message.' });
      }
  } else {
      return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
