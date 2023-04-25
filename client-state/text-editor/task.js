const editor = document.getElementById('editor');


//1. Сохраняйте значение текстового редактора в локальном хранилище.


//2. После перезагрузки, восстанавливайте текст из локального хранилица
editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})

editor.value = localStorage.getItem('text')