const progress = document.getElementById( 'progress' );
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();