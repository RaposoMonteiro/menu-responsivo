function menuShow(){

    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){

        menuMobile.classList.remove('open');

        document.getElementById('icon').textContent = "menu";

    } else{

        menuMobile.classList.add('open')

        document.getElementById('icon').textContent = "close";


    }
}