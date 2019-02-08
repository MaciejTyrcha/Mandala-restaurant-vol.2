class OnLoadGallery {
  constructor() {
    this.divGalleryFirstImage = ""
    this.galleryFirstImage = ""
    this.windowWidth = 0
  }

  showFirstImageGallery() {
    this.divGalleryFirstImage = document.querySelector(".first-image div section");
    this.divGalleryFirstImage.classList.add("active");
  }
}