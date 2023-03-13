const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tab.forEach((el, index) => {

    el.onclick = () => {
        tab.forEach((deleted) => {
            deleted.classList.remove('tab_active')
        }) 
        tabContent.forEach(content => {
            content.classList.remove('tab__content_active')
        })
        el.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active')

    }
  
})
