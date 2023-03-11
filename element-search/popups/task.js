const popupMain = document.getElementById('modal_main');
const popupSccs = document.getElementById('modal_success');
const popup = document.getElementsByClassName('modal')



popup.modal_main.classList.add('modal_active');


let close = popup.modal_main.querySelector('.modal__close');


    close.onclick = () => {
        if (close.classList.contains('modal__close')) {
            popup.modal_main.classList.remove('modal_active');

        } }

        let success = popup.modal_main.querySelector('.show-success');

        success.onclick = ()=> {
            if (success) {
                close = popup.modal_success.querySelector('.modal__close');
                popup.modal_main.classList.remove('modal_active');
                popup.modal_success.classList.add('modal_active');
                close.onclick = () => {
                    if (close.classList.contains('modal__close')) {
                        popup.modal_success.classList.remove('modal_active');
            
                    } }
            }
        }

