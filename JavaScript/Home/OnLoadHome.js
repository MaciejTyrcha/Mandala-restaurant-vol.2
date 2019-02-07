class OnLoadHome {
  constructor() {
    this.divHomeFirstImage = ""
    this.homeSecondImage = ""
    this.windowWidth = 0
  }

  showFirstImageHome() {
    this.divHomeFirstImage = document.querySelector(".first-image div section");
    this.divHomeFirstImage.classList.add("active");
  }

  changeSecondImageSize() {
    this.windowWidth = window.innerWidth;
    this.homeSecondImage = document.querySelector(".second-image");
    if ( this.windowWidth <= 1000 && this.windowWidth > 600){
      this.homeSecondImage.dataset.position = "left center";
    }

    if ( this.windowWidth <= 600){
      this.homeSecondImage.dataset.position = "-200px center";
    }
  }
}