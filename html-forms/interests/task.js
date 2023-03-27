const blocks = document.querySelectorAll('.interests')
const checkbox = Array.from(document.querySelectorAll('.interest__check'))


checkbox.forEach(el => {
    el.addEventListener('change', () => {
       

        if (el.closest('label').innerText === 'Еда') {
            el.closest('label').nextElementSibling.firstElementChild.firstElementChild.firstElementChild.checked = true;
            el.closest('label').nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.checked = true;
            if (el.checked === false) {
                el.closest('label').nextElementSibling.firstElementChild.firstElementChild.firstElementChild.checked = false;
                el.closest('label').nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.checked = false;
                    }
        }

        if (el.closest('label').innerText === 'Домашние животные') {
            el.closest('label').nextElementSibling.firstElementChild.firstElementChild.firstElementChild.checked = true;
            el.closest('label').nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.checked = true;

           if (el.checked === false) {
            el.closest('label').nextElementSibling.firstElementChild.firstElementChild.firstElementChild.checked = false;
            el.closest('label').nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.checked = false;
                }
          
        } 


    })

})