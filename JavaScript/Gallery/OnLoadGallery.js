class OnLoadGallery {
  constructor() {
    this.divGalleryFirstImage = document.querySelector(".first-image div section");
  }

  showFirstImageGallery() {
    this.divGalleryFirstImage.classList.add("active");
  }
}