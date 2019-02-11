class ScrollTopSectionReservation {
  constructor() {
    this.scrollValue = 0
    this.windowHeight = 0
    this.windowWidth = 0
    this.allInputs = ""
    this.textArea = ""
    this.button = ""
    this.H1 = ""
    this.H2 = ""
    this.allP = ""
    this.wholeContent = []
    this.separateElements = []
  }

  scrollTopSection() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    this.allInputs = [...document.querySelectorAll(".top-section input")];
    this.allP = [...document.querySelectorAll(".top-section p")];

    this.textArea = document.getElementById("textarea");
    this.H1 = document.querySelector(".top-section h1");
    this.H2 = document.querySelector(".top-section h2");
    this.button = document.querySelector(".top-section button");

    this.wholeContent = [this.allInputs, this.allP];
    this.separateElements = [this.textArea, this.button, this.H1, this.H2];

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