let searchForm = document.querySelector('.search-form');
document.querySelector('#btn-search').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#btn-shopping-cart').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-user').onclick = () =>{
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');
document.querySelector('#btn-menu').onclick = () =>{
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    menu.classList.remove('active');
}