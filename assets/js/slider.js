const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    initialSlide: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1025: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    },
    on: {
        slideChange: function () {
            document.querySelector('.swiper-slide.active-slide')?.classList.remove('active-slide');
            document.querySelector('.swiper-slide.swiper-slide-active')?.classList.add('active-slide');
        }
    }
});