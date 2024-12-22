export default async function handler(req, res) {
  if (req.method === 'POST') {
      const { message } = req.body;

      // Log incoming request to see the message
      console.log("Received message:", message);

      if (!message) {
          return res.status(400).json({ success: false, error: 'Message is required.' });
      }

      const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Bot Token stored as an env variable
      const CHAT_ID = process.env.CHAT_ID; // Chat ID stored as an env variable

      // Log environment variable values (for debugging)
      console.log("TELEGRAM_BOT_TOKEN:", TELEGRAM_BOT_TOKEN ? 'Set' : 'Not Set');
      console.log("CHAT_ID:", CHAT_ID ? 'Set' : 'Not Set');

      if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
          return res.status(500).json({ success: false, error: 'Bot token or chat ID not found.' });
      }

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      try {
          // Log before sending the Telegram request
          console.log("Sending message to Telegram API...");

          const telegramRespo
