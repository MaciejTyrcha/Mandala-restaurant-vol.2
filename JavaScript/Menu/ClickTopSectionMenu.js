class ClickTopSectionMenu {
  constructor() {
    this.wholeMenu = document.getElementById("button-whole");
    this.allP = [...document.querySelectorAll(".menu-top-section-wrapper p")];
    this.allH1 = [...document.querySelectorAll(".menu-top-section-wrapper h1")];
    this.allH2 = [...document.querySelectorAll(".menu-top-section-wrapper h2")];
    this.allTdFirstChild = [...document.querySelectorAll(".menu-top-section-wrapper td:first-child")];
    this.allTdAfter = [...document.querySelectorAll(".menu-top-section-wrapper td:last-child")];
    this.wholeSections = document.querySelectorAll(".menu-top-section-wrapper article");
    this.wholeButtons = document.querySelectorAll(".menu-list p");
    this.wholeContent = [this.allH1, this.allP, this.allTdAfter, this.allTdFirstChild, this.allH2];
    this.element1 = document.getElementById("przystawki"),
    this.element2 = document.getElementById("zupy"),
    this.element3 = document.getElementById("dania-glowne"),
    this.element4 = document.getElementById("desery"),
    this.element5 = document.getElementById("napoje"),
    this.element6 = document.getElementById("alkohole"),
    this.array = [this.element1,this.element2,this.element3,this.element4,this.element5,this.element6]    
  }

  clickMenuSections(pageName, element, arg) {
    for (let i = 0; i < this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "none";
    }

    for (let i = 0; i < this.wholeButtons.length; i++) {
      this.wholeButtons[i].style.color = "";
      this.wholeButtons[i].style.fontWeight = "300";
    }

    document.getElementById(pageName).style.display = "block";
    element.style.color = "#eeae33";
    element.style.fontWeight = "900";

    this.array[arg].classList.add("slide-top");

    for ( let i = 0; i < this.wholeContent.length; i++) {
      let wholeContent = this.wholeContent[i];
      for ( let j = 0; j < wholeContent.length; j++) {
        wholeContent[j].classList.add('active');
      }
    }
  }

  showWholeMenu() {
    for (let i = 0; i < this.wholeSections.length; i++) {
      this.wholeSections[i].style.display = "block";
    }
  }
}

const clickMenu = new ClickTopSectionMenu();