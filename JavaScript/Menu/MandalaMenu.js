class MandalaMenu {
  constructor() {
    window.addEventListener("load", this.loadElement);
    // window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadMenu();
    this.load.showFirstImageMenu();

    //Responsywne wycentrowanie obrazka
    this.menuFirstImageSize = new OnLoadMenu();
    this.menuFirstImageSize.changeSize();
  }

  // scrollWeb() {
  //   //Scrollowanie elementów w 1-szej sekcji
  //   this.scrollTopSectionAbout = new ScrollTopSectionAbout();
  //   this.scrollTopSectionAbout.scrollTopSection();
  // }
}

const mandalaMenu = new MandalaMenu();