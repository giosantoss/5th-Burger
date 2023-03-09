const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const fs = require('fs');

const SESSION_FILE_PATH = process.env.SESSION_FILE_PATH;
const PHONE_NUMBER = process.env.PHONE_NUMBER;

let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
  session: sessionData,
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  const chats = await client.getChats();
  console.log('WhatsApp ready!');
  const chatId = 'seu_id_de_chat';
  const message = 'Sua sacola de pedidos é: ' + JSON.stringify(cartItems);
  await client.sendMessage(chatId, message);
});

client.initialize();

process.on('SIGINT', () => {
  client.destroy();
});

client.on('disconnected', () => {
  console.log('Client was logged out');
  fs.unlinkSync(SESSION_FILE_PATH);
  process.exit(0);
});
