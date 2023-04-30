const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');

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
    'Обратитесь в службу поддержки'
];
let rand = Math.floor(Math.random() * messageText.length)
let messageRandom = messageText[rand];

document.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        messages.innerHTML += `<div class="message message_client"><div class="message__time">22:10</div><div class="message__text">${input.value}</div></div>`
        messages.innerHTML += `<div class="message">
        <div class="message__time">22:10</div>
        <div class="message__text">
            ${messageRandom}
        </div>
    </div>`

    }
})