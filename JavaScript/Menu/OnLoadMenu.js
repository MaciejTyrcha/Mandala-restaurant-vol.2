class OnLoadMenu {
  constructor() {
    this.divMenuFirstImage = ""
    this.MenuFirstImage = ""
    this.windowWidth = 0
  }

  showFirstImageMenu() {
    this.divAboutFirstImage = document.querySelector(".first-image div section");
    this.divAboutFirstImage.classList.add("active");
  }

  changeSize() {
    this.windowWidth = window.innerWidth;
    this.aboutFirstImage = document.querySelector(".first-image");

    if ( this.windowWidth <= 1000 && this.windowWidth > 600){
      this.aboutFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 600){
      this.aboutFirstImage.dataset.position = "-100px center";
    }
  }
}