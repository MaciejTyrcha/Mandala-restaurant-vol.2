class MandalaAbout {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadAbout();
    this.load.showFirstImageAbout();

    //Responsywne wycentrowanie obrazka
    this.aboutFirstImageSize = new OnLoadAbout();
    this.aboutFirstImageSize.changeSize();
  }

  scrollWeb() {
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionAbout = new ScrollTopSectionAbout();
    this.scrollTopSectionAbout.scrollTopSection();
  }
}

const mandalaAbout = new MandalaAbout();