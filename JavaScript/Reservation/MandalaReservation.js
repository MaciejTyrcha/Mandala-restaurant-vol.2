class MandalaReservation {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadReservation();
    this.load.showFirstImageReservation();

    //Responsywne wycentrowanie obrazka
    this.reservationFirstImageSize = new OnLoadReservation();
    this.reservationFirstImageSize.changeSize();
  }

  scrollWeb() {
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionReservation = new ScrollTopSectionReservation();
    this.scrollTopSectionReservation.scrollTopSection();
  }
}

const mandalaReservation = new MandalaReservation();