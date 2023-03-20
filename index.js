const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});


// Hamburger Menu JS

/*let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx');
    navlist.classList.toggle('open');
}*/

let dropDown = document.getElementById('dropDown');
let navlist = document.getElementById('dropDown');

function dropDownToggle () {
    dropDown.classList.toggle("open-menu");
}


window.onscroll = () => {
    dropDown.classList.remove('box-menu');
    navlist.classList.remove('open-menu');
}

// Scroll Reveal 

const sr = ScrollReveal ({
    origin: 'top', 
    distance: '85px', 
    duration: '2500',
    reset: true
})

sr.reveal ('.hero-text',{delay:300});
sr.reveal ('.hero-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:400});

sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn, .shop-content',{delay:400});

sr.reveal ('.review-content, .contact',{delay:400});