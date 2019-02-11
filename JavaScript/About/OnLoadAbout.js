class OnLoadAbout {
  constructor() {
    this.divAboutFirstImage = ""
    this.aboutFirstImage = ""
    this.windowWidth = 0
  }

  showFirstImageAbout() {
    this.divAboutFirstImage = document.querySelector(".first-image div section");
    this.divAboutFirstImage.classList.add("active");
  }

  changeSize() {
    this.windowWidth = window.innerWidth;
    this.aboutFirstImage = document.querySelector(".first-image");

    if (this.windowWidth > 650){
      this.aboutFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 650){
      this.aboutFirstImage.dataset.position = "-150px center";
    }
  }
}