class OnLoadContact {
  constructor() {
    this.divContactFirstImage = document.querySelector(".first-image div section");
    this.windowWidth = window.innerWidth;
    this.contactFirstImage = document.querySelector(".first-image");
  }

  showFirstImageContact() {
    this.divContactFirstImage.classList.add("active");
  }

  changeFirstImageSize() {
    if (this.windowWidth > 600){
      this.contactFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 600){
      this.contactFirstImage.dataset.position = "-200px center";
    }
  }
}