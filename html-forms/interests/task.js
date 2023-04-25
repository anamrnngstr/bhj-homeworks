const interests = document.querySelector('.interests');

function toggleChildrenCheckboxes(checkbox, checked) {
  const parent = checkbox.closest('.interest');
  const childrenCheckboxes = parent.querySelectorAll('.interest__check');

  childrenCheckboxes.forEach(childCheckbox => {
    childCheckbox.checked = checked;
  });
}

interests.addEventListener('change', event => {
  const checkbox = event.target;
  
  if (!checkbox.classList.contains('interest__check')) {
    return;
  }

  if (checkbox.closest('label').innerText === 'Еда' ||
      checkbox.closest('label').innerText === 'Домашние животные') {
    toggleChildrenCheckboxes(checkbox, checkbox.checked);
  }
});