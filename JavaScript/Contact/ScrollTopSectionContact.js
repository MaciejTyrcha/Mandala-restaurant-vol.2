class ScrollTopSectionContact {
  constructor() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.allInputs = [...document.querySelectorAll(".top-section input")];
    this.allH1 = [...document.querySelectorAll(".top-section h1")];
    this.allH3 = [...document.querySelectorAll(".top-section h3")];
    this.allP = [...document.querySelectorAll(".top-section p")];
    this.textArea = document.getElementById("textarea");
    this.button = document.querySelector(".top-section button");
    this.wholeContent = [this.allInputs, this.allH1, this.allH3, this.allP];
    this.separateElements = [this.textArea, this.button];
  }

  scrollTopSection() {
    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      for ( let j = 0; j < wholeContent.length; j++) {
        let wholeContentDeeper = wholeContent[j];
        if ( this.scrollValue > wholeContentDeeper.offsetTop + wholeContentDeeper.clientHeight - this.windowHeight) {
          wholeContentDeeper.classList.add('active');
        }
      }
    }

    for ( let i = 0; i < this.separateElements.length; i++) {
      let allElements = this.separateElements[i];
      if ( this.scrollValue > allElements.offsetTop + allElements.clientHeight - this.windowHeight) {
        allElements.classList.add('active');
      }
    }
  }
}