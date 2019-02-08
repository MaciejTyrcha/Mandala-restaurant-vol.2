class ClickTopSectionMenu {
  constructor() {
    this.przystawkiButton = ""
    this.zupyButton = ""
    this.daniaGlowneButton = ""
    this.deseryButton = ""
    this.napojeButton = ""
    this.alkoholeButton = ""
    this.przystawkiSection = ""
    this.zupySection = ""
    this.daniaGlowneSection = ""
    this.deserySection = ""
    this.napojeSection = ""
    this.alkoholeSection = ""
    this.wholeSections = []
    this.wholeButtons = []
  }

  clickTopSection() {
    //Pobranie przyciskow
    this.przystawkiButton = document.getElementById("button-przystawki");
    this.zupyButton = document.getElementById("button-zupy");
    this.daniaGlowneButton = document.getElementById("button-dania-glowne");
    this.deseryButton = document.getElementById("button-desery");
    this.napojeButton = document.getElementById("button-napoje");
    this.alkoholeButton = document.getElementById("button-alkohole");
    this.wholeButtons = document.querySelectorAll(".menu-list p");

    //Pobieranie sekcji
    this.przystawkiSection = document.getElementById("przystawki");
    this.zupySection = document.getElementById("zupy");
    this.daniaGlowneSection = document.getElementById("dania-glowne");
    this.deserySection = document.getElementById("desery");
    this.napojeSection = document.getElementById("napoje");
    this.alkoholeSection = document.getElementById("alkohole");
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
  }
}