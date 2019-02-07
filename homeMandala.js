$('.hamburgerMenu').click(function () {
    $('nav').toggleClass('open');
    $('.hamburgerMenu span').toggleClass('openHamburger');
    $('.hamburgerWrapper').toggleClass('hamburgerWrapperOpen');
})

class MandalaHome {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadHome();
    this.load.showFirstImageHome();

    //Responsywne wycentrowanie drugiego obrazka 
    this.homeSecondImageSize = new OnLoadHome();
    this.homeSecondImageSize.changeSecondImageSize();
  }

  scrollWeb() {
    //Scrollowanie diva w pierwszym obrazku
    this.scrollSecondImageHome = new ScrollSecondImageHome();
    this.scrollSecondImageHome.scrollSecondImageHome();
    
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionHome = new ScrollTopSectionHome();
    this.scrollTopSectionHome.scrollTopSection();
  }
}

const mandalaHome = new MandalaHome();

class OnLoadHome {
  constructor() {
    this.divHomeFirstImage = ""
    this.homeSecondImage = ""
    this.windowWidth = 0
  }

  showFirstImageHome() {
    this.divHomeFirstImage = document.querySelector(".first-image div section");
    this.divHomeFirstImage.classList.add("active");
  }

  changeSecondImageSize() {
    this.windowWidth = window.innerWidth;
    this.homeSecondImage = document.querySelector(".second-image");
    if ( this.windowWidth <= 1000){
      this.homeSecondImage.dataset.position = "left center";
    }
  }
}

class ScrollMandalaHome {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0
  }
}

class ScrollTopSectionHome {
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
      // console.log(wholeContent);
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        // console.log(wholeContentDeeper);
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }
  }
}

class ScrollSecondImageHome{
  constructor() {
    this.divHomeSecondImage = ""
    this.homeSecondImage = ""
    this.windowHeight = 0
    this.scrollValue = 0
    }

    scrollSecondImageHome() {
      this.windowHeight = window.innerHeight;
      this.scrollValue = window.scrollY;
      this.homeSecondImage = document.querySelector(".second-image");
      this.divHomeSecondImage = document.querySelector(".second-image div section");

      if ( this.scrollValue > (this.divHomeSecondImage.offsetTop + this.homeSecondImage.offsetTop)- this.windowHeight / 3) {
        this.divHomeSecondImage.classList.add('active');
      }
  }
}

class ScrollBottomSectionHome {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0

  }
}
// class ScrollFooter {
//   constructor() {
//     this.scrollValue = 0
//     this.windowHeight = 0
//     this.windowWidth = 0
//   }
// }

