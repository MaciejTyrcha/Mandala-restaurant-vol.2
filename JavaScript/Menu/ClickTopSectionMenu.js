class ClickTopSectionMenu {
  constructor() {
    this.wholeSections = []
    this.wholeButtons = []
    this.wholeMenu = ""
    this.allP = ""
    this.allH1 = ""
    this.allH2 = ""
    this.allTdFirstChild = ""
    this.allTdAfter = ""
    this.wholeContent = []
  }

  clickMenuSections(pageName, element) {
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
    this.wholeButtons = document.querySelectorAll(".menu-list p");

    this.allP = [...document.querySelectorAll(".top-section p")];
    this.allH1 = [...document.querySelectorAll(".top-section h1")];
    this.allH2 = [...document.querySelectorAll(".top-section h2")];
    this.allTdFirstChild = [...document.querySelectorAll(".top-section td:first-child")];
    this.allTdAfter = [...document.querySelectorAll(".top-section td:last-child")];

    this.wholeContent = [this.allTdAfter, this.allTdFirstChild, this.allH1, this.allP, this.allH2];

    for (let i = 0; i < this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "none";
    }

    element.classList.add("orange");

    for (let i = 0; i < this.wholeButtons.length; i++) {
      this.wholeButtons[i].style.color = "";
      this.wholeButtons[i].style.fontWeight = "300";
      if (this.wholeButtons[i].classList.contains("orange")) {
        for ( let i = 0; i < this.wholeContent.length; i++) {
          let wholeContent = this.wholeContent[i];
          for ( let j = 0; j < wholeContent.length; j++) {
              wholeContent[j].classList.add('active');
          }
        }
      }
      this.wholeButtons[i].classList.remove("orange");
    }


    document.getElementById(pageName).style.display = "block";
    element.style.color = "#eeae33";
    element.style.fontWeight = "900";
  }

  showWholeMenu() {
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
    this.wholeMenu = document.getElementById("button-whole");

    for (let i = 0; i < this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "block";
    }
  }
}

const clickMenu = new ClickTopSectionMenu();