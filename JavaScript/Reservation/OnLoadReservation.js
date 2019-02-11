class OnLoadReservation {
  constructor() {
    this.divReservationFirstImage = ""
    this.reservationFirstImage = ""
    this.windowWidth = 0
  }

  showFirstImageReservation() {
    this.divReservationFirstImage = document.querySelector(".first-image div section");
    this.divReservationFirstImage.classList.add("active");
  }

  changeSize() {
    this.windowWidth = window.innerWidth;
    this.reservationFirstImage = document.querySelector(".first-image");

    if ( this.windowWidth > 500){
      this.reservationFirstImage.dataset.position = "center";
    }

    if ( this.windowWidth <= 500){
      this.reservationFirstImage.dataset.position = "-200px center";
    }
  }
}