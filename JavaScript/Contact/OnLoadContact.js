class OnLoadContact {
  constructor() {
    this.divContactFirstImage = ""
    this.contactFirstImage = ""
    this.windowWidth = 0
  }

  showFirstImageContact() {
    this.divContactFirstImage = document.querySelector(".first-image div section");
    this.divContactFirstImage.classList.add("active");
  }

  changeFirstImageSize() {
    this.windowWidth = window.innerWidth;
    this.contactFirstImage = document.querySelector(".first-image");
    if (this.windowWidth > 600){
      this.contactFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 600){
      this.contactFirstImage.dataset.position = "-200px center";
    }
  }
}