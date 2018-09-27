let iconBtn = document.querySelector('.nav-toggle-label');
let icon = document.querySelector('.nav-icon');

iconBtn.addEventListener('click', ()=>{
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
})