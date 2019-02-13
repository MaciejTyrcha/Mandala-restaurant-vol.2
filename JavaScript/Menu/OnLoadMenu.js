class OnLoadMenu {
  constructor() {
    this.divMenuFirstImage = document.querySelector(".first-image div section");
    this.menuFirstImage = document.querySelector(".first-image");
    this.windowWidth = window.innerWidth;
  }

  showFirstImageMenu() {
    this.divMenuFirstImage.classList.add("active");
  }

  changeSize() {
    if ( this.windowWidth > 600){
      this.menuFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 600){
      this.menuFirstImage.dataset.position = "-100px center";
    }
  }
}