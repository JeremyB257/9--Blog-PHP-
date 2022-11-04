const modifyBtn = document.querySelectorAll('.modifyBtn');

for (i = 0; i < modifyBtn.length; i++) {
  modifyBtn[i].addEventListener('click', (e) => {
    e.target.parentNode.parentNode.childNodes[5].classList.toggle('hidden');
  });
}
