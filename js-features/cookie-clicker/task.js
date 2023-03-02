const image = document.getElementById('cookie');
let click = document.getElementById('clicker__counter');


let clickerSpeed = document.getElementById('clicker__speed')
let timeStart= new Date();

const changeSizes = function () {

    click.textContent++;

   if (image.width == '300') {
    image.width = '200';
   } else if (image.width == '200') {
    image.width = '300';
   };

   let timeNow = new Date()
    clickerSpeed.textContent = (1 / ((timeNow.getTime() - timeStart.getTime()) / 1000)).toFixed(2);
    timeStart = new Date();

}
image.onclick = changeSizes;