let timer = document.getElementById('timer1');

//легкое задание


let interval = setInterval(() => {
   if (timer.textContent == 0) {
    alert('Вы победили в конкурсе!');
   }

   if (timer.textContent > 0) {
    timer.textContent--;
   }
}, 1000)

// задание повышенной сложности

// let timer2 = document.getElementById('timer2');

// let firstDate = new Date();
// let secondDate = new Date()
// secondDate.setHours(0,0,0);












