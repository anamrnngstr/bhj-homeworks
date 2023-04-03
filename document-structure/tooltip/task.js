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
        const tooltipActive = Array.from(document.querySelectorAll('.tooltip_active'));
        const activeFind = tooltipActive.find(elem => elem.classList.contains('tooltip_active'));
        if (activeFind === undefined) {
            hint.classList.add('tooltip_active');
        } else if (activeFind !== hint) {
                hint.classList.add("tooltip_active");
            } else {
            activeFind.classList.toggle('tooltip_active');
        }
    })
})