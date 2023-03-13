let ddValue = document.querySelector('.dropdown__value');
let ddList = document.querySelector('.dropdown__list');
let ddItem = document.querySelectorAll('.dropdown__link');

ddValue.onclick = () => {
    ddList.classList.toggle('dropdown__list_active');
}

function closeMenu () {
    ddList.classList.remove('dropdown__list_active');
}

ddItem.forEach((ind) => {
    ind.onclick = () => {
    ddValue.textContent = ind.textContent;
    closeMenu();
    return false;
}
})

