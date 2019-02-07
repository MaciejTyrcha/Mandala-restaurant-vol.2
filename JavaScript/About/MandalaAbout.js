class MandalaAbout {
  constructor() {
    window.addEventListener("load", this.loadElement);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadAbout();
    this.load.showFirstImageAbout();

     //Responsywne wycentrowanie obrazka
     this.aboutFirstImageSize = new OnLoadAbout();
     this.aboutFirstImageSize.changeSize();
  }
}

const mandalaAbout = new MandalaAbout();