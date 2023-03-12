const menuLink = document.getElementsByClassName('menu__link');

for (let el = 0; el < menuLink.length; el++) {

const menu = menuLink[el];
const sub = menu.closest('.menu__item').querySelector('.menu_sub');

menu.onclick = () => {

    if (sub) {

        sub.classList.toggle('menu_active');
        return false;
        }
    }

}



