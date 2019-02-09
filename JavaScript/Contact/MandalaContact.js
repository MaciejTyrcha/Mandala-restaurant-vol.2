class MandalaContact {
  constructor() {
    window.addEventListener("load", this.loadElement);
    // window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadContact();
    this.load.showFirstImageContact();

    //Responsywne wycentrowanie pierwszego obrazka 
    this.contactFirstImageSize = new OnLoadContact();
    this.contactFirstImageSize.changeFirstImageSize();
  }

  // scrollWeb() {
  //   //Scrollowanie diva w pierwszym obrazku
  //   this.scrollSecondImageHome = new ScrollSecondImageHome();
  //   this.scrollSecondImageHome.scrollSecondImageHome();
    
  //   //Scrollowanie elementów w 1-szej sekcji
  //   this.scrollTopSectionHome = new ScrollTopSectionHome();
  //   this.scrollTopSectionHome.scrollTopSection();

  //   //Scrollowanie elementów w 2-giej sekcji 
  //   this.scrollBottomSectionHome = new ScrollBottomSectionHome();
  //   this.scrollBottomSectionHome.scrollBottomSection();
  // }
}

const mandalaContact = new MandalaContact();