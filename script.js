

```javascript
// CURSOR GLOW EFFECT
const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e)=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// SCROLL REVEAL ANIMATION
function reveal(){
    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

// MOBILE MENU
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});

// CARD TILT EFFECT
const cards = document.querySelectorAll('.feature-card, .service-card, .price-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', ()=>{
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

});

// NAVBAR BACKGROUND ON SCROLL
window.addEventListener('scroll', ()=>{

    const header = document.querySelector('header');

    if(window.scrollY > 50){
        header.style.background = '#01040ce0';
        header.style.boxShadow = '0 0 20px #00bfff30';
    }
    else{
        header.style.background = '#020611bb';
        header.style.boxShadow = 'none';
    }

});

```
window.addEventListener('scroll', () => {

    let scroll = window.scrollY;

    document.querySelector('.hero-content').style.transform =
    `translateY(${scroll * 0.2}px)`;

    document.querySelector('.hero-image').style.transform =
    `translateY(${scroll * -0.15}px)`;

});

const cards = document.querySelectorAll(
'.feature-card,.service-card,.price-card,.testimonial-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
        `;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        scale(1)
        `;
    });

});


