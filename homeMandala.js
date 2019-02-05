$('.hamburgerMenu').click(function () {
    $('nav').toggleClass('open');
    $('.hamburgerMenu span').toggleClass('openHamburger');
    $('.hamburgerWrapper').toggleClass('hamburgerWrapperOpen');
})

class MandalaHome {
  constructor() {
    window.addEventListener("load", this.loadElement);
  }
  loadElement() {
    this.load = new OnLoad();
    this.load.showFirstImageSection();
  }
}

const mandalaHome = new MandalaHome();

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

// class ScrollDivInImage {
//   constructor() {
//     this.windowScroll = 0
//     this.nextSection = ""
//     this.divContainer = ""
//     this.innerHeight = 0
//     this.innerWidth = 0
//   }

//   scroll() {
//     this.innerHeight = window.innerHeight;
//     this.innerWidth = window.innerWidth;
//     this.windowScroll = window.scrollY;
//     this.nextSection = document.querySelector(".top-section").offsetTop;
//     this.divContainer = document.querySelector(".first-image div section");

//     if (this.windowScroll < this.nextSection / 2.15 && this.innerWidth > 1100) {
//       this.divContainer.style.transform = `translate(0%, ${this.windowScroll / 3}%)`;
//     }
//     else if (this.windowScroll < this.nextSection / 3.5 + 25 && this.innerWidth <= 1100) {
//       this.divContainer.style.transform = `translate(0%, ${this.windowScroll / 3}%)`;
//     }
//   }
// }

// const scrollDivInImage = new ScrollDivInImage();

class ScrollTopSection {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0
    this.allImages = ""
    this.allP1 = ""
    this.allH1 = ""
    this.allP2 = ""
    this.allA = ""
    this.wholeContent = []
  }

  scrollTopSection() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    this.allImages = [...document.querySelectorAll(".top-section-image")];
    this.allP1 = [...document.querySelectorAll(".top-section-content p:nth-of-type(1)")];
    this.allH1 = [...document.querySelectorAll(".top-section-content h1")];
    this.allP2 = [...document.querySelectorAll(".top-section-content p:nth-of-type(2)")];
    this.allA = [...document.querySelectorAll(".top-section a")];

    this.wholeContent = [this.allImages, this.allP1, this.allH1, this.allP2, this.allA];

    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      console.log(wholeContent);
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        console.log(wholeContentDeeper);
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }
  }
}

const scrollTopSection = new ScrollTopSection();