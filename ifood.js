const promocoes = document.querySelector('.promocoes');
const promo = new Flickity( promocoes, {
  cellAlign: 'center',
  contain: true
});
const restaurantes = document.querySelector('.restaurantes');
const restaurante = new Flickity( restaurantes, {
  cellAlign: 'center',
  contain: true
  
});
let home = document.querySelector('.home')
home.addEventListener ("click" , () => {
  nav.style.display = "none"

})
let nav = document.querySelector('.atalho')

let menu = document.querySelector ('.btnmenu');

menu.addEventListener("click",() => {
nav.style.display = "flex" 
home.style.display = "flex"
})