const navbar = document.querySelector(".navbar");
let form = document.getElementById('formSubmit')

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(255, 192, 203, 0.575)`);
  window.scrollY > 100 && (navbar.style.outline = `1px solid white`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
  window.scrollY < 100 && (navbar.style.outline = `none`);
});

form.addEventListener('submit', function(e){
  e.preventDefault()
})