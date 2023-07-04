const togglemenu = document.getElementById('toggle-menu');
const mainmenu = document.getElementById('main-menu');

const iconfiltro = document.getElementById('icon-filtro');
const buscarmenu = document.getElementById('buscar-menu');

togglemenu.addEventListener('click',()=>{
    mainmenu.classList.toggle('main-menu--show');
})

iconfiltro.addEventListener('click',()=>{
    buscarmenu.classList.toggle('buscar-menu--show');
})
