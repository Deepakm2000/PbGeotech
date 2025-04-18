// JavaScript to toggle the navbar
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.closeIcon');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('show'); // Add or remove the 'show' class
        closeIcon.style.display = "block";
        hamburger.style.display = "none";
        if(navbar.classList.contains('show')){
            logo.style.display = 'none';
        }
        else{
            logo.style.display = '';
        }
    });
    closeIcon.addEventListener('click', function (){
        hamburger.style.display = 'block';
        closeIcon.style.display = "none";
        logo.style.display = "block";
        navbar.classList.toggle('show');
    })
});