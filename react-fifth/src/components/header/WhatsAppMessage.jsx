import React, { useState } from "react";
import { Client } from "whatsapp-web.js";

function WhatsAppMessage(props) {
  const { cartItems } = props;

  const [sendingMessage, setSendingMessage] = useState(false);

  function handleFinalizarPedido() {
    setSendingMessage(true);
    const total = cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    const message = `Olá, gostaria de fazer um pedido com os seguintes itens: ${JSON.stringify(cartItems, null, 2)}. O total do pedido é R$${total.toFixed(2)}.`;
    const client = new Client({
        puppeteer: {
          executablePath: '/path/to/chromium',
        },
      });
      
    client.on("qr", (qr) => {
      // Aqui você pode exibir o código QR para o usuário escanear e autenticar a sessão
      console.log("QR Code gerado!");
    });
    client.on("ready", async () => {
      // Envia a mensagem para um número de WhatsApp
      await client.sendMessage("+558398289043", message);
      await client.destroy();
      setSendingMessage(false);
    });
    client.initialize();
  }

  return (
    <div>
      <button onClick={handleFinalizarPedido} disabled={sendingMessage}>
        {sendingMessage ? "Enviando..." : "Finalizar Pedido via WhatsApp"}
      </button>
    </div>
  );
}

export default WhatsAppMessage;
