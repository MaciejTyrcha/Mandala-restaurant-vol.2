class OnLoadAbout {
  constructor() {
    this.divAboutFirstImage = document.querySelector(".first-image div section");
    this.windowWidth = window.innerWidth;
    this.aboutFirstImage = document.querySelector(".first-image")
  }

  showFirstImageAbout() {
    this.divAboutFirstImage.classList.add("active");
  }

  changeSize() {
    if (this.windowWidth > 650){
      this.aboutFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 650){
      this.aboutFirstImage.dataset.position = "-150px center";
    }
  }
}