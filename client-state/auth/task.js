//1. Реализуйте механизм авторизации. 
//Для этого передайте данные формы с помощью POST-запроса по адресу
//*https://students.netoservices.ru/nestjs-backend/auth*


const xhr = new XMLHttpRequest();
const form = document.getElementById("signin__form");
const btn = document.getElementById('signin__btn');
const welcome = document.querySelector(".welcome");
const userId = document.getElementById("user_id");
const signin = document.querySelector(".signin")

btn.addEventListener('click', (e) => {
const data = new FormData(form);
e.preventDefault();
xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');
xhr.send(data);

const login = form.querySelector(`[name='login']`);
const psswrd = form.querySelector(`[name='password']`)

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        localStorage.setItem("id", login.value)
        localStorage.setItem("password", psswrd.value)
        localStorage.getItem("id")
        let response = JSON.parse(xhr.responseText)

      
        signin.classList.remove("signin_active")
        welcome.classList.add("welcome_active")
        userId.textContent = localStorage.getItem("id")
    
}
})
})
if(localStorage.getItem("id")) {
    signin.classList.remove("signin_active")
                welcome.classList.add("welcome_active")
                userId.textContent = localStorage.getItem("id")

}
   // 1. После успешного входа, сохраните полученный id-пользователя в локальное хранилище
    //2. При успешной авторизации, задайте id пользователя в блок *#welcome* и отобразите его
    //3. Если авторизация не удалась, выведите сообщение «Неверный логин/пароль»
//2. При загрузке страницы, в случае, если в локальном хранилище имеется 
//id пользователя, выведите блок *#welcome* с заданным id пользователя