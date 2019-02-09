class MandalaContact {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadContact();
    this.load.showFirstImageContact();

    //Responsywne wycentrowanie pierwszego obrazka 
    this.contactFirstImageSize = new OnLoadContact();
    this.contactFirstImageSize.changeFirstImageSize();
  }

  scrollWeb() {    
    //Scrollowanie elementów w 1-szej sekcji
    this.scrollTopSectionContact = new ScrollTopSectionContact();
    this.scrollTopSectionContact.scrollTopSection();

    //Scrollowanie elementów z 2-giego obrazka 
    this.scrollSecondImageContact = new ScrollSecondImageContact();
    this.scrollSecondImageContact.scrollSecondImage();

    //Scrollowanie elementów w 2-giej sekcji 
    this.scrollBottomSectionContact = new ScrollBottomSectionContact();
    this.scrollBottomSectionContact.scrollBottomSection();
  }
}

const mandalaContact = new MandalaContact();