class ScrollSecondImageHome{
  constructor() {
    this.windowHeight = window.innerHeight;
    this.scrollValue = window.scrollY;
    this.homeSecondImage = document.querySelector(".second-image");
    this.divHomeSecondImage = document.querySelector(".second-image div section");
    }

    scrollSecondImageHome() {
      if ( this.scrollValue > (this.divHomeSecondImage.offsetTop + this.homeSecondImage.offsetTop)- this.windowHeight / 3) {
        this.divHomeSecondImage.classList.add('active');
      }
  }
}