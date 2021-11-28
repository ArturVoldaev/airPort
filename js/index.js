
let listPlaceList = document.querySelector(".menu__list");
let allLink = listPlaceList.querySelectorAll(".menu__link-icon")

$(document).ready(function () {
  $(".slider__down").slick({
      arrows:false,
      dots:false,
      autoplay:false,
      infinity: true,
      autoplaySpeed:500,
      slidesToShow: 4,
      centerMode: false,
      draggable: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            arrows:true,
            centerMode: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 701,
          settings: {
            slidesToShow: 1,
            arrows:true,
            centerMode: false,
            variableWidth: true,
          }
        }
      ]
  });
});


