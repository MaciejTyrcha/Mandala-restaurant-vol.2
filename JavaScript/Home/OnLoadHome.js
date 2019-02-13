class OnLoadHome {
  constructor() {
    this.divHomeFirstImage = document.querySelector(".first-image div section");
    this.homeSecondImage = document.querySelector(".second-image");
    this.windowWidth = window.innerWidth;
  }

  showFirstImageHome() {
    this.divHomeFirstImage.classList.add("active");
  }

  changeSecondImageSize() {
    if (this.windowWidth > 600){
      this.homeSecondImage.dataset.position = "left center";
    }

    if ( this.windowWidth <= 600){
      this.homeSecondImage.dataset.position = "-200px center";
    }
  }
}