 const taskInput = document.getElementById('task__input');
 const btn = document.getElementById('tasks__add');
 const taskList = document.getElementById('tasks__list');
btn.addEventListener('click', (event) => {

    event.preventDefault();
    if (taskInput.value.trim(length > 0)){
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `<div class="task__title"> ${taskInput.value} </div> <a href="#" class="task__remove">&times;</a>`;
        taskList.appendChild(task);
        const removeLink = document.querySelectorAll('.task__remove');
        removeLink.forEach(el => {
            el.addEventListener('click', (elem) => {
                elem.target.closest('.task').remove()
            })
        })
        taskInput.value = '';
    } else {
        return false
    }

})


