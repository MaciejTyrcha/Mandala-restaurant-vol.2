class ScrollBottomSectionHome {
  constructor() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.allH1 = [...document.querySelectorAll(".bottom-section h1")];
    this.allH2 = [...document.querySelectorAll(".bottom-section h2")];
    this.allP = [...document.querySelectorAll(".bottom-section p")];
    this.a = document.querySelector(".bottom-section a");
    this.wholeContent = [this.allH1, this.allH2, this.allP];
  }

  scrollBottomSection () {
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