const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
    slide.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});