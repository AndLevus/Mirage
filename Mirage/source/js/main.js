document.querySelector('.pluses').addEventListener('click', function () {
    document.querySelector('.plus').classList.toggle('plus-active');
});



$(document).ready(function (){
    $('.block-slider').slick({
        prevArrow: "<img src='source/img/arrow-dot.svg' class='prev' alt='1'>",
        nextArrow: "<img src='source/img/arrow-dot2.svg' class='next' alt='2'>",
    })
});
function myFunction() {
    let x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

document.querySelector('.menu-toggle').addEventListener('click', function(){
    document.querySelector('.menu-inner').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.main-menu').classList.toggle('toggle')
});