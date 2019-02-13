class ScrollTopSectionGallery {
  constructor() {
    this.scrollValue = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.firstImage = document.querySelector(".top-section .first-image-top");
    this.secondImage = document.querySelector(".top-section .second-image-top");
    this.thirdImage = document.querySelector(".top-section .third-image-top");
    this.fourthImage = document.querySelector(".top-section .fourth-image-top");
    this.fifthImage = document.querySelector(".top-section .fifth-image-top");
    this.sixthImage = document.querySelector(".top-section .sixth-image-top");
    this.seventhImage = document.querySelector(".top-section .seventh-image-top");
    this.eightImage = document.querySelector(".top-section .eight-image-top");
    this.ninethImage = document.querySelector(".top-section .nineth-image-top");
    this.tenthImage = document.querySelector(".top-section .tenth-image-top");
    this.eleventhImage = document.querySelector(".top-section .eleventh-image-top");
  }

  scrollTopSection() {

    if (this.windowWidth > 880 ) {
      //1 i 2
      if ( this.scrollValue > this.firstImage.offsetTop + this.firstImage.clientHeight - this.windowHeight) {
        this.firstImage.classList.add('active');
        this.secondImage.classList.add('active');
      }
      //3 i 4
      if ( this.scrollValue > this.fourthImage.offsetTop + this.fourthImage.clientHeight - this.windowHeight) {
        this.thirdImage.classList.add('active');
        this.fourthImage.classList.add('active');
      }
      //5, 6 i 7
      if ( this.scrollValue > this.sixthImage.offsetTop + this.sixthImage.clientHeight - this.windowHeight) {
        this.fifthImage.classList.add('active');
        this.sixthImage.classList.add('active');
        this.seventhImage.classList.add('active');
      }
      //8
      if ( this.scrollValue > this.eightImage.offsetTop + this.eightImage.clientHeight - this.windowHeight) {
        this.eightImage.classList.add('active');
      }
      //9
      if ( this.scrollValue > this.ninethImage.offsetTop + 0.7 * this.ninethImage.clientHeight - this.windowHeight) {
        this.ninethImage.classList.add('active');
      }
      //10 i 11
      if ( this.scrollValue > this.eleventhImage.offsetTop + this.eleventhImage.clientHeight - this.windowHeight) {
        this.tenthImage.classList.add('active');
        this.eleventhImage.classList.add('active');
      }
    }
    
    else if (this.windowWidth <= 880 && this.windowWidth > 450) {
      //1 i 2
      if ( this.scrollValue > this.firstImage.offsetTop + this.firstImage.clientHeight - this.windowHeight) {
        this.firstImage.classList.add('active');
        this.secondImage.classList.add('active');
      }
      //3
      if ( this.scrollValue > this.thirdImage.offsetTop + 0.7 * this.thirdImage.clientHeight - this.windowHeight) {
        this.thirdImage.classList.add('active');
      }
      //4
      if ( this.scrollValue > this.fourthImage.offsetTop + this.fourthImage.clientHeight - this.windowHeight) {
        this.fourthImage.classList.add('active');
      }
      //5 i 6
      if ( this.scrollValue > this.sixthImage.offsetTop + this.sixthImage.clientHeight - this.windowHeight) {
        this.fifthImage.classList.add('active');
        this.sixthImage.classList.add('active');
      }
      //7
      if ( this.scrollValue > this.seventhImage.offsetTop + 0.7 * this.seventhImage.clientHeight - this.windowHeight) {
        this.seventhImage.classList.add('active');
      }
      //8
      if ( this.scrollValue > this.eightImage.offsetTop + this.eightImage.clientHeight - this.windowHeight) {
        this.eightImage.classList.add('active');
      }
      //9 i 10
      if ( this.scrollValue > this.ninethImage.offsetTop + this.ninethImage.clientHeight - this.windowHeight) {
        this.ninethImage.classList.add('active');
        this.tenthImage.classList.add('active');
      }
      //11
      if ( this.scrollValue > this.eleventhImage.offsetTop + this.eleventhImage.clientHeight - this.windowHeight) {
        this.eleventhImage.classList.add('active');
      }
    }
  }
}