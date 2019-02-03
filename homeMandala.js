$('.hamburgerMenu').click(function () {
    $('nav').toggleClass('open');
    $('.hamburgerMenu span').toggleClass('openHamburger');
    $('.hamburgerWrapper').toggleClass('hamburgerWrapperOpen');
})

class OnLoad {
  constructor() {
    this.divHomeFirstImage = ""
  }

  showFirstImageSection() {
    this.divHomeFirstImage = document.querySelector(".first-image div section");
    this.divHomeFirstImage.classList.add("active");
  }
}

const loadHome = new OnLoad();

class ScrollDivInImage {
  constructor() {
    this.windowScroll = 0
    this.nextSection = ""
    this.divContainer = ""
    this.innerHeight = 0
    this.innerWidth = 0
  }

  scroll() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    this.windowScroll = window.scrollY;
    this.nextSection = document.querySelector(".top-section").offsetTop;
    this.divContainer = document.querySelector(".first-image div section");

    if (this.windowScroll < this.nextSection / 2.15 && this.innerWidth > 1100) {
      this.divContainer.style.transform = `translate(0%, ${this.windowScroll / 3}%)`;
    }
    else if (this.windowScroll < this.nextSection / 3.5 + 25 && this.innerWidth <= 1100) {
      this.divContainer.style.transform = `translate(0%, ${this.windowScroll / 3}%)`;
    }
  }
}

const scrollDivInImage = new ScrollDivInImage();
