var elDarkBtn = document.querySelector(".button-dark");
var elBurgerBtn = document.querySelector(".burger-js");
var elHeroBg = document.querySelector(".wrapper-all");
var elHeader = document.querySelector(".site-header");


elDarkBtn.addEventListener("click" , function(){
    elHeroBg.classList.toggle("dark")
    document.body.classList.toggle("dark");
    
    
    
})

elBurgerBtn.addEventListener("click" , function(){
    elHeader.classList.toggle("btn-click");
    document.body.classList.toggle("none");
})

$(".slider").slick({
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  variableWidth: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
});