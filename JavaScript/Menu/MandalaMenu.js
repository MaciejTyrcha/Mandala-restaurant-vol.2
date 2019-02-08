class MandalaMenu {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
    window.addEventListener("click", this.clickMenu);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadMenu();
    this.load.showFirstImageMenu();

    //Responsywne wycentrowanie obrazka
    this.menuFirstImageSize = new OnLoadMenu();
    this.menuFirstImageSize.changeSize();
  }

  scrollWeb() {
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionMenu = new ScrollTopSectionMenu();
    this.scrollTopSectionMenu.scrollTopSection();
  }

  clickMenu() {
    //Przełączanie menu po kategoriach
    this.clickTopSectionMenu = new ClickTopSectionMenu();
    this.clickTopSectionMenu.clickTopSection();
  }
}

const mandalaMenu = new MandalaMenu();