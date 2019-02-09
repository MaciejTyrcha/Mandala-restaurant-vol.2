class MandalaHome {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadHome();
    this.load.showFirstImageHome();

    //Responsywne wycentrowanie drugiego obrazka 
    this.homeSecondImageSize = new OnLoadHome();
    this.homeSecondImageSize.changeSecondImageSize();
  }

  scrollWeb() {
    //Scrollowanie diva w drugim obrazku
    this.scrollSecondImageHome = new ScrollSecondImageHome();
    this.scrollSecondImageHome.scrollSecondImageHome();
    
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionHome = new ScrollTopSectionHome();
    this.scrollTopSectionHome.scrollTopSection();

    //Scrollowanie elementów w 2-giej sekcji 
    this.scrollBottomSectionHome = new ScrollBottomSectionHome();
    this.scrollBottomSectionHome.scrollBottomSection();
  }
}

const mandalaHome = new MandalaHome();