let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_back = document.getElementById('mountains_back');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_back.style.top = value * 0.5 + 'px';

    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';

    header.style.top = value * 0.5 + 'px'
    //mountains_front.style.top = value*0 + 'px';
})
