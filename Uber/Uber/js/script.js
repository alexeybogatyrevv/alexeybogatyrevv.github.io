//Функция благодоря которой будут работать webp 
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//функция благодоря которой будет работать menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__content'),
        menuItem = document.querySelectorAll('.menu__item'),
        burger = document.querySelector('.menu__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('menu__burger_active');
        menu.classList.toggle('menu__content_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('menu__burger_active');
            menu.classList.toggle('menu__content_active');
        })
    })
})

// Это универсальный плавный скролл наверх, так же подойдет для меню.
$("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    return false;
});

$('input[name=user_phone]').mask("+7 (999) 999-99-99");
