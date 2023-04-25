const chat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

document.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        messages.innerHTML += '<div class="message"><div class="message__time">22:10</div><div class="message__text">Добрый день!</div></div>'
        let message = document.querySelector('.message__text');
        message.innerHTML = input.value;
    }
})