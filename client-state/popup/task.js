const popup = document.getElementById("subscribe-modal");
const close = document.querySelector('.modal__close')


//1. После закрытия окна, установите в cookie-файле информацию о закрытии окна
close.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'shown=closed';
    console.log(document.cookie)
})

if (!document.cookie.includes('shown=closed')){
    popup.classList.add('modal_active')
}
if (document.cookie.includes('shown=closed')){
    popup.classList.remove('modal_active')
}
