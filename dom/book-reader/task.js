const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const color = document.querySelectorAll('.color');

fontSize.forEach(el => {
    el.onclick = () => {
        if(el.classList.contains('font-size_small')) {
            fontSize.forEach(remove => {
                remove.classList.remove('font-size_active')
            })
            el.classList.add('font-size_active');
            book.classList.add('book_fs-small');
            return false;
        }
        if(el.classList.contains('font-size_big')) {
            fontSize.forEach(remove => {
                remove.classList.remove('font-size_active')
            })
            el.classList.add('font-size_active');
            book.classList.add('book_fs-big');
            return false;
        }
    }
})

color.forEach(el => {
    el.onclick = () => {
        if(el.classList.contains('text_color_gray')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('text_color_gray');
            book.classList.add('book_color-gray');
            return false;
        }
        if(el.classList.contains('text_color_whitesmoke')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('text_color_whitesmoke');
            book.classList.add('book_color-whitesmoke');
            return false;
        }
        if(el.classList.contains('text_color_black')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('text_color_black');
            book.classList.add('book_color-black');
            return false;
        }
        if(el.classList.contains('bg_color_black')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('bg_color_black');
            book.classList.add('book_bg-black');
            return false;
        }
        if(el.classList.contains('book_color-gray')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('book_color-gray');
            book.classList.add('book_bg-gray');
            return false;
        }
        if(el.classList.contains('book_color-whitesmoke')) {
            color.forEach(remove => {
                remove.classList.remove('color_active')
            })
            el.classList.add('book_color-whitesmoke');
            book.classList.add('book_bg-white');
            return false;
        }
    }
})