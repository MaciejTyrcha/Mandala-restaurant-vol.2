class MandalaGallery {
  constructor() {
    window.addEventListener("load", this.loadElement);
    window.addEventListener("scroll", this.scrollWeb);
  }

  loadElement() {
    //Ładowanie pierwszego diva
    this.load = new OnLoadGallery();
    this.load.showFirstImageGallery();
  }

  // scrollWeb() {
  //   //Scrollowanie elementów w 1-szej sekcji
  //   this.scrollTopSectionGallery = new ScrollTopSectionGallery();
  //   this.scrollTopSectionGallery.scrollTopSection();
  // }
}

const mandalaGallery = new MandalaGallery();