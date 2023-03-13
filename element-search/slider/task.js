let sliderItem = Array.from(document.querySelectorAll(".slider__item"));
let rightClick = document.querySelector('.slider__arrow_next');
let leftClick = document.querySelector('.slider__arrow_prev');
let active = sliderItem.findIndex(el => {
        el.classList.contains('slider__item_active')});
const remove = () => {
    sliderItem.forEach(el => el.classList.remove('slider__item_active'));
}

const add = (index) => {
    sliderItem[index].classList.add('slider__item_active');
}

rightClick.onclick = () => {
    remove()
    if (active === sliderItem.length - 1) {
        active = 0;
    } else {
        active++
    }
    add(active);
}

leftClick.onclick = () => {
     remove();
    if (active === 0) {
        active = sliderItem.length - 1;
    } else {
        active--;
    }
      add(active);
}