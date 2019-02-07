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