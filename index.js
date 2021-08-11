let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_back = document.getElementById('mountains_back');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let header = document.getElementById('header');
let progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    //console.log(value)
    value > 600 ? header.classList.add('header__active') : header.classList.remove('header__active')
    let offset = window.pageYOffset || document.documentElement.scrollTop,
        windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        progress = Math.floor(offset / windowHeight * 100);

    progressBar.style.width = (progress) + '%'


    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_back.style.top = value * 0.5 + 'px';

    text.style.marginRight = value * 3.5 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';

    //header.style.top = value * 0.5 + 'px'
    //mountains_front.style.top = value*0 + 'px';
})
