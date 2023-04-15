//1. Загрузите случайный опрос, отправив GET-запрос по адресу: 
//*https://students.netoservices.ru/nestjs-backend/poll*
//2. Отобразите вопрос и список ответов в виде кнопок
//3. При нажатии на какую-либо кнопку, выведите диалоговое окно с надписью «Спасибо, ваш голос засчитан!»
const pollTitle = document.getElementById('poll__title');
const pollAnswrs = document.getElementById('poll__answers');
const loader = document.getElementById('loader')
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.onload = () => {
    let title = xhr.response.data.title;
    let answers = xhr.response.data.answers;

    pollTitle.textContent = title;
    for (let i = 0; i< answers.length;i++){
        pollAnswrs.insertAdjacentHTML(
            "afterBegin",
            `<button class="poll__answer">
            ${answers[i]}
          </button>`
          )
    }
    const btn = document.querySelectorAll('.poll__answer')
    btn.forEach(el => {
        el.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })

    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active')
    }
 
}
xhr.send();