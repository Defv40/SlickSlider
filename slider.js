$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear', // тип анимации
        infinite: true,
        initialSlide: 1, // с какого слайда начинаем
        autoplay: true,
        autoPlaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false, //свайп
        //touchThreshold: 10, // сила свайпа
        waitForAnimate: true, // ждать ли конца анимации
        centerMode: false,
        rows: 1,
    });
})
