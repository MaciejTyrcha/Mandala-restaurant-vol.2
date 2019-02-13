class OnLoadReservation {
  constructor() {
    this.divReservationFirstImage = document.querySelector(".first-image div section");
    this.reservationFirstImage = document.querySelector(".first-image");
    this.windowWidth = window.innerWidth;
  }

  showFirstImageReservation() {
    this.divReservationFirstImage.classList.add("active");
  }

  changeSize() {
    if ( this.windowWidth > 500){
      this.reservationFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 500){
      this.reservationFirstImage.dataset.position = "-200px center";
    }
  }
}