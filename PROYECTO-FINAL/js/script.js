let isTransparent = true;
const nav = document.querySelector('nav');

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
        nav.classList.add('_fixed');
        isTransparent = false;
    }

    if (window.pageYOffset <= 70 && !isTransparent) {
        nav.classList.remove('_fixed');
        isTransparent = true;
        
    }
});

/* Boton para comprar */

document.querySelectorAll('.ig-follow').forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.classList.contains('follow')){
            event.target.innerText = 'Añadido';
            event.target.classList.remove('follow');
        } else {
            event.target.innerText = 'Añadir al carrito';
            event.target.classList.add('follow');
        }
    });
});


/* Scroll UP */


$.scrollUp({
    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})




