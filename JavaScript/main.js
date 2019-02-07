class Mandala {
  constructor() {
    window.addEventListener("scroll", this.scrollFooter);
  }

  scrollFooter() {
    //Scrollowanie elementów z footera 
    this.scrollFooter = new ScrollFooter(); 
    this.scrollFooter.scrollFooter();
  }
}

const mandala = new Mandala();

$('.hamburgerMenu').click(function () {
  $('nav').toggleClass('open');
  $('.hamburgerMenu span').toggleClass('openHamburger');
  $('.hamburgerWrapper').toggleClass('hamburgerWrapperOpen');
})