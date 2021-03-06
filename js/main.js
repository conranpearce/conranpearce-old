const body = document.getElementsByTagName('body')[0];
var placeholder = document.querySelector('.placeholder');
var small = placeholder.querySelector('.img-small');
var conranpearce = document.getElementById('landing-page');
var nav = document.getElementsByTagName('header')[0];
var width = window.innerWidth;
var backgroundImage = document.getElementById('landing-image');

window.onload = function() {
    // Loading and displaying smaller image
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
        small.classList.add('loaded');
    };
    // Load in larger image
    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large; 
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
        // Fade in text from here
        conranpearce.style.opacity = 1;
        nav.style.opacity = 1;
        body.style['overflow-y']= 'scroll';
    };
    
    if (this.width > 768) {
        placeholder.appendChild(imgLarge);
    } else {
        this.backgroundImage.style.display = 'none';
        this.nav.classList.remove("header-nobg");
    }
}

window.addEventListener("resize", checkNavBar);

window.onscroll = function () { 
    this.checkNavBar();
};

function checkNavBar() {
    width = window.innerWidth;
    if (this.width > 768) {
        if (document.scrollingElement.scrollTop >= document.scrollingElement.clientHeight) {
            this.nav.classList.remove("header-nobg");
        } else {
        this.nav.classList.add("header-nobg");
        }
    } else {
        this.nav.classList.remove("header-nobg");
    }
}

var figure = $(".video-file");

[].forEach.call(figure, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e) {  
    if (e.target.parentNode.id == 'game-parent') {
        $('.video-file')[0].play();
    } else if (e.target.parentNode.id == 'karate-parent') {
        $('.video-file')[1].play();
    }
}

function hideVideo(e) {
    if (e.target.parentNode.id == 'game-parent') {
        $('.video-file')[0].pause();
    } else if (e.target.parentNode.id == 'karate-parent') {
        $('.video-file')[1].pause();
    }
}