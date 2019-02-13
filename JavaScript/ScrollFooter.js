class ScrollFooter {
  constructor() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.allH1 = [...document.querySelectorAll(".footer-wrapper h1")];
    this.allP = [...document.querySelectorAll(".footer-wrapper p")];
    this.allLi = [...document.querySelectorAll(".footer-wrapper li")];
    this.wholeContent = [this.allH1, this.allP, this.allLi];
  }

  scrollFooter() {
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
