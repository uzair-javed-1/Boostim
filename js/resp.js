burger =document.querySelector('.burger');
navbar =document.querySelector('.navbar');
navlist =document.querySelector('.nav-List');
rightNav =document.querySelector('.rightNav');


burger.addEventListener('Click',()=>{

rightNav.classList.toggle('v-class-resp');
navlist.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');

})
