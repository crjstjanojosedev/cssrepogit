const menuIcon = document.getElementById('menu-icon')
const lines = document.querySelectorAll('.no-animation')


menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('active')


   lines.forEach((line) => {
      line.classList.remove('no-animation')
   })
})