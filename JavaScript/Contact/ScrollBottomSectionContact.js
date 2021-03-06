class ScrollBottomSectionContact {
  constructor() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.H1 = document.querySelector(".bottom-section h1");
    this.allP = [...document.querySelectorAll(".bottom-section p")];
    this.map = document.querySelector(".bottom-section .map");
  }

  scrollBottomSection () {
    if(this.windowWidth > 900) {
      if ( this.scrollValue > this.H1.offsetTop + this.H1.clientHeight - this.windowHeight) {
        this.H1.classList.add('active');
        this.map.classList.add('active');
      }
    }
    if (this.windowWidth <= 900) {
      if ( this.scrollValue > this.H1.offsetTop + this.H1.clientHeight - this.windowHeight) {
        this.H1.classList.add('active');
      }
      if ( this.scrollValue > this.map.offsetTop + this.map.clientHeight - this.windowHeight) {
        this.map.classList.add('active');
      }
    }

    for ( let i = 0; i < this.allP.length; i++) {
      let allP = this.allP[i];
      if ( this.scrollValue > allP.offsetTop + allP.clientHeight - this.windowHeight) {
        allP.classList.add('active');
      }
    }
  }
}