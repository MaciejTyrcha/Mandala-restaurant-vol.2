class ScrollTopSectionAbout {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0
    this.allP = ""
    this.allH1 = ""
    this.allH2 = ""
    this.allA = ""
    this.wholeContent = []
  }

  scrollTopSection() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    this.allP = [...document.querySelectorAll(".top-section p")];
    this.allH1 = [...document.querySelectorAll(".top-section h1")];
    this.allH2 = [...document.querySelectorAll(".top-section h2")];
    this.allA = [...document.querySelectorAll(".top-section a")];

    this.wholeContent = [this.allH1, this.allP, this.allH2, this.allA];

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