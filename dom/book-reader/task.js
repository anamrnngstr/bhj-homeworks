const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const color = document.querySelectorAll('.color');
// const bookCntrl = Array.from(document.querySelectorAll('.book__control_font-size'));

    const active = document.querySelector('.font-size_active');
    const smallActive = active.previousElementSibling;
    const bigActive = active.nextElementSibling;

    const activeColor = document.querySelector('.color_active');
    const activeGrey = activeColor.nextElementSibling;
    const activeWhite = activeGrey.nextElementSibling;

    const bgActive = document.querySelector('.book__control_background').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    const bgGrey = bgActive.previousElementSibling;
    const bgBlack = bgGrey.previousElementSibling;

    smallActive.onclick = () => {
        active.classList.remove('font-size_active');
        bigActive.classList.remove('font-size_active');
        smallActive.classList.add('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
        return false;
    }

    active.onclick = () => {
        bigActive.classList.remove('font-size_active');
        smallActive.classList.remove('font-size_active');
        active.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        return false;
    }

    bigActive.onclick = () => {
        active.classList.remove('font-size_active');
        smallActive.classList.remove('font-size_active');
        bigActive.classList.add('font-size_active');
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
        return false;
    }

    activeColor.onclick = () => {
        activeGrey.classList.remove('color_active');
        activeWhite.classList.remove('color_active');
        activeColor.classList.add('color_active');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke');
        book.classList.add('book_color-black');
        return false;
    }
    activeGrey.onclick = () => {
        activeColor.classList.remove('color_active');
        activeWhite.classList.remove('color_active');
        activeGrey.classList.add('color_active');
        book.classList.remove('text_color_black', 'book_color-whitesmoke');
        book.classList.add('book_color-gray');
        return false;
    }
    activeWhite.onclick = () => {
        activeColor.classList.remove('color_active');
        activeGrey.classList.remove('color_active');
        activeWhite.classList.add('color_active');
        book.classList.remove('text_color_black', 'book_color-gray');
        book.classList.add('book_color-whitesmoke');
        return false;
    }

    bgActive.onclick = () => {
        bgGrey.classList.remove('color_active');
        bgBlack.classList.remove('color_active');
        bgActive.classList.add('color_active');
        book.classList.remove('book_bg-black', 'book_bg-gray');
        book.classList.add('book_bg-white');
        return false;
    }
    bgGrey.onclick = () => {
        bgActive.classList.remove('color_active');
        bgBlack.classList.remove('color_active');
        bgGrey.classList.add('color_active');
        book.classList.remove('book_bg-black', 'book_bg-white');
        book.classList.add('book_bg-gray');
        return false;
    }
    bgBlack.onclick = () => {
        bgGrey.classList.remove('color_active');
        bgActive.classList.remove('color_active');
        bgBlack.classList.add('color_active');
        book.classList.remove('book_bg-white', 'book_bg-gray');
        book.classList.add('book_bg-black');
        return false;
    }