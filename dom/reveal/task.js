let reveal = document.querySelectorAll('.reveal');

window.onscroll = () => {
    reveal.forEach((el) => {
    const{top, bottom} = el.getBoundingClientRect();

   return bottom < window.innerHeight && top > 0 ? el.classList.add('reveal_active') : el.classList.remove('reveal_active');
    })

}