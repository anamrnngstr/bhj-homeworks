const dead = document.getElementById('dead'); //click
const lost = document.getElementById('lost'); //click
// если онклик на крота дед +1 hole.classList.contains( 'hole_has-mole' );
// дед = 10 - вы победили
//
// если онклик на !крота лост +1
// лост = 5 - вы проиграли
const newGame = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}

const getHole = (index) => {
  return index = document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', func = () => {getHole(i).className.includes( 'hole_has-mole' ) ? dead.textContent++ : lost.textContent++
    if (dead.textContent == 10) {
        alert('Вы победили!');
        newGame();
       }
       if (lost.textContent == 5) {
        alert('Вы проиграли!')
        newGame();
       }
});
}