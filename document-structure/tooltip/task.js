const hasTtip = document.querySelectorAll('.has-tooltip');

hasTtip.forEach(el => {
    const hint = document.createElement('div');
    hint.textContent = el.title;
    el.addEventListener('click', (event) => {
        event.preventDefault();
        hint.classList.add('tooltip');
        el.insertAdjacentElement('beforebegin', hint);
        hint.style.left = `${el.getBoundingClientRect().left}px`;
        hint.style.top = `${el.getBoundingClientRect().bottom}px`;
        hint.classList.toggle('tooltip_active');
    })
})