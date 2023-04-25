const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = new FormData();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    }
    xhr.send(form);
})