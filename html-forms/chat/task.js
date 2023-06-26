const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');
let nowTime = new Date().toLocaleTimeString().slice(0, -3);

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})
let messageText = [
    'Чем могу помочь?',
    'Добрый день!',
    'Хорошего дня',
    'Спасибо',
    'До досвидания',
    'Отлично!',
    'К сожалению все операторы заняты',
];
let rand = Math.floor(Math.random() * messageText.length)
let messageRandom = messageText[rand];

document.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
      const trimmedInputValue = input.value.trim();
      if (trimmedInputValue) {
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${nowTime}</div>
            <div class="message__text">${trimmedInputValue}</div>
          </div>
        `;
        input.value = '';
        const messageRandom = messageText[rand];
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${nowTime}</div>
            <div class="message__text">
              ${messageRandom}
            </div>
          </div>
        `;
      }
    }
  });