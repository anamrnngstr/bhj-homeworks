let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let active = rotator.findIndex(ind => {
    ind.classList.contains('rotator__case_active')});
function remove() {
rotator.forEach(el => {
    el.classList.remove('rotator__case_active');
});

}

function add(index) {
    rotator[index].classList.add('rotator__case_active');
}



setInterval(() => {
            remove();
            if (active === rotator.length - 1) {
                active = 0;
            } else {
                active++;
            }
            add(active);
        }, 1000)
    

