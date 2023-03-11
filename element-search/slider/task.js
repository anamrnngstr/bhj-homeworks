let sliderItem = Array.from(document.querySelectorAll(".slider__item"));
let rightClick = document.querySelector('.slider__arrow_next');
let leftClick = document.querySelector('.slider__arrow_prev');
let currentPage = 0;

const remove = () => {
    sliderItem.forEach(el => el.classList.remove('slider__item_active'));
}

const add = (index) => {
    sliderItem[index].classList.add('slider__item_active');
}

rightClick.onclick = () => {
    let active = sliderItem.findIndex(el => el.classList.contains('slider__item_active'))
    if (active > sliderItem.length - 1) {
        active = -1;
    }
    remove();
    add(active + 1);
}

leftClick.onclick = () => {
    let active = sliderItem.findIndex(el => el.classList.contains('slider__item_active'))
    if (active <= 0) {
        active = sliderItem.length;
    }
    remove();
    add(active - 1);
}