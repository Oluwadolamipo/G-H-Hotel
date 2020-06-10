
const menuActivator = document.querySelector('.activator'); //Selects the class div with textcontent 'Menu'
const navigation = document.querySelector('.navigation'); //nav class 

// Menu for android 


const menuIcon = document.querySelector('.menu-icon')
menuActivator.addEventListener('click', ()=>{
    navigation.classList.toggle('active')
    menuIcon.textContent = menuIcon.textContent == 'keyboard_arrow_right' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'
})

// Active state code. DO NOT EDIT!

const navLinks = document.querySelectorAll('.navigation .links-list .links');
navLinks.forEach( navLink => {
    let currentWindowLocation = window.location.href.toString().toLowerCase();
    let navigationName = navLink.id
    if(currentWindowLocation.includes(navigationName)){
        navLink.classList.add('active')
    }
})


// Scrolling effect 
const header =  document.querySelector('#header')
window.addEventListener('scroll', ()=>{
    // Change color black to the one that works
    window.scrollY > 100 ? header.style.backgroundColor = "#0F5F5C;" : header.style.backgroundColor = "transparent"
})

//header.style.width = window.innerWidth+'px';
