class ScrollSecondImageContact{
  constructor() {
    this.windowHeight = window.innerHeight;
    this.scrollValue = window.scrollY;
    this.contactSecondImage = document.querySelector(".second-image");
    this.divContactSecondImage = document.querySelector(".second-image div section");
    }

    scrollSecondImage() {
      if ( this.scrollValue > (this.divContactSecondImage.offsetTop + this.contactSecondImage.offsetTop)- this.windowHeight / 3) {
        this.divContactSecondImage.classList.add('active');
      }
  }
}