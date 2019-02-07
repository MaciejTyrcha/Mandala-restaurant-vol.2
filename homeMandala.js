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

    //Scrollowanie elementów w 2-giej sekcji 
    this.scrollBottomSectionHome = new ScrollBottomSectionHome();
    this.scrollBottomSectionHome.scrollBottomSection();

    //Scrollowanie elementów z footera 
    this.scrollFooter = new ScrollFooter(); 
    this.scrollFooter.scrollFooter();
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
    if ( this.windowWidth <= 1000 && this.windowWidth > 600){
      this.homeSecondImage.dataset.position = "left center";
    }

    if ( this.windowWidth <= 600){
      this.homeSecondImage.dataset.position = "-200px center";
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
    this.allArticles = ""
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
    this.allArticles = [...document.querySelectorAll(".top-section article")]

    let articles = this.allArticles.map(articles => articles.offsetTop);

    this.wholeContent = [this.allImages, this.allP1, this.allH1, this.allP2, this.allA];
   
    if (this.windowWidth > 1170) {
      for ( let i = 0; i < this.wholeContent.length; i++) {
        let wholeContent = this.wholeContent[i];
        for ( let j = 0; j < wholeContent.length; j++) {
          let wholeContentDeeper = wholeContent[j];
          if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
            wholeContentDeeper.classList.add('active');
          }
        }
      }
    }

    if (this.windowWidth <= 1170) {
      for ( let i = 1; i < this.wholeContent.length; i++) {
        let wholeContent = this.wholeContent[i];
        
        let k = 0;
        for ( let j = 0; j < wholeContent.length; j++) {
          let wholeContentDeeper = wholeContent[j];
    
          if ( this.scrollValue > (wholeContentDeeper.offsetTop + articles[k]) + wholeContentDeeper.clientHeight - this.windowHeight) {
            wholeContentDeeper.classList.add('active');
          }
          k++;
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
    this.allH1 = ""
    this.allH2 = ""
    this.allP = ""
    this.a = ""
    this.wholeContent = []
  }

  scrollBottomSection () {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;

    this.allH1 = [...document.querySelectorAll(".bottom-section h1")];
    this.allH2 = [...document.querySelectorAll(".bottom-section h2")];
    this.allP = [...document.querySelectorAll(".bottom-section p")];
    this.a = document.querySelector(".bottom-section a");

    this.wholeContent = [this.allH1, this.allH2, this.allP];

    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }

    if ( this.scrollValue > this.a.offsetTop + this.a.clientHeight - this.windowHeight) {
      this.a.classList.add('active');
    }
  }
}

class ScrollFooter {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.allH1 = ""
    this.allP = ""
    this.allLi = ""
    this.wholeContent = []
  }

  scrollFooter() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;

    this.allH1 = [...document.querySelectorAll(".footer-wrapper h1")];
    this.allP = [...document.querySelectorAll(".footer-wrapper p")];
    this.allLi = [...document.querySelectorAll(".footer-wrapper li")];

    this.wholeContent = [this.allH1, this.allP, this.allLi];

    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }
  }
}

