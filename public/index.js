const sideBar = document.querySelector('.sidebar')
const openBtn = document.querySelector('.openbtn')
const closeBtn = document.querySelector('.closebtn')
const okay = document.querySelector('.okay')
const btn = document.querySelector('.clickme')

openBtn.addEventListener('click', function() {
    sideBar.classList.toggle('active')
});

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('active')
});
btn.addEventListener('click', function() {
    okay.classList.toggle('show')
});