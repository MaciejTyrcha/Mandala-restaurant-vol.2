class ScrollTopSectionMenu {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0
    this.topSection = ""
    this.allP = ""
    this.allH1 = ""
    this.allH2 = ""
    this.allTdFirstChild = ""
    this.allTdAfter = ""
    this.wholeContent = []
  }

  scrollTopSection() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    this.topSection = document.querySelector(".top-section");
    this.allP = [...document.querySelectorAll(".top-section p")];
    this.allH1 = [...document.querySelectorAll(".top-section h1")];
    this.allH2 = [...document.querySelectorAll(".top-section h2")];
    this.allTdFirstChild = [...document.querySelectorAll(".top-section td:first-child")];
    this.allTdAfter = [...document.querySelectorAll(".top-section td:last-child")];

    this.wholeContent = [this.allH1, this.allP, this.allH2];

    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }
    let k = 0;
    for ( let j = 0; j < this.allTdFirstChild.length; j++) {
      let allTdFirstChild = this.allTdFirstChild[j];
      if ( this.scrollValue > allTdFirstChild.offsetTop + allTdFirstChild.clientHeight - this.windowHeight) {
        allTdFirstChild.classList.add('active');
        this.allTdAfter[k].classList.add('active');
      }
      k++;
    }
  }
}