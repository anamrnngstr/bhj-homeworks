const image = document.getElementById('cookie');
const click = document.getElementById('clicker__counter');


const clickerSpeed = document.getElementById('clicker__speed')
let timeStart= new Date();

const changeSizes = function () {

//     click.textContent++;

//    if (image.width == '300') {
//     image.width = '200';
//    } else if (image.width == '200') {
//     image.width = '300';
//    };
   image.width = ++click.textContent % 2 ? 250 : 200;
   let timeNow = new Date()
    clickerSpeed.textContent = (1 / ((timeNow.getTime() - timeStart.getTime()) / 1000)).toFixed(2);
    timeStart = new Date();

}
image.onclick = changeSizes;