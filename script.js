let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    imageBlock = document.querySelector(".slides"),
    dotsBlock = document.querySelector(".dots"),
    nav = document.getElementsByClassName('nav_blok_2_link'),
    navArea = document.getElementsByClassName('navigation')[0],
    arrow = document.getElementsByClassName('btn'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

let images = [{
    url: "img/font2.png",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "img/font2.2.png",
    title: "Sochi Thieves"
}, {
    url: "img/font2.3.png",
    title: "Rostov-on-Don Patriotic"
}];

init();

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
}

nextBtn.onclick = function () {
    plusSlides(1);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

navArea.onclick = function (e) {
    for (let i = 0; i < nav.length + 1; i++) {
        if (e.target.classList.contains('nav_blok_2_link') && e.target == nav[i - 1]) {
            currentSlide(i);
        }
    }
}

function init () {
    imageBlock.innerHTML = "";
    navArea.innerHTML = "";
    dotsBlock.innerHTML = "";
    images.forEach((image, index) => {

        let imageDiv = `<img class="slides-item" src="${images[index].url}">`;
        imageBlock.innerHTML += imageDiv;
        let navDiv = `<li><a class="nav_blok_2_link" href="#">${images[index].title}</a></li>`;
        navArea.innerHTML += navDiv;
        let dotDiv = `<div class="btn dots-item"></div>`;
        dotsBlock.innerHTML += dotDiv;
    });
}
