class ClickTopSectionMenu {
  constructor() {
    this.wholeSections = []
    this.wholeButtons = []
    this.wholeMenu = ""

  }

  clickMenuSections(pageName, element) {
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
    this.wholeButtons = document.querySelectorAll(".menu-list p");

    for (let i=0; i< this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "none";
    }

    for (let i=0; i<this.wholeButtons.length; i++) {
      this.wholeButtons[i].style.color = "";
      this.wholeButtons[i].style.fontWeight = "300";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.color = "#eeae33";
    element.style.fontWeight = "900";
  }

  showWholeMenu() {
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
    this.wholeMenu = document.getElementById("button-whole");

    for (let i=0; i< this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "block";
    }
  }
}

const clickMenu = new ClickTopSectionMenu();