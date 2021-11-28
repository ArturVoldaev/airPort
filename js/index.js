

let listPlaceList = document.querySelector(".menu__list");
let allLink = listPlaceList.querySelectorAll(".menu__link-icon")
console.log(allLink);

/*if (window.innerWidth <= 1024) {
  $('.slider').slick();
 }
*/



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

$(document).ready(function(){
  $(".burger").click(function (e) { 
    e.preventDefault();
    $(".navigation,.burger").toggleClass("active")
  });
})

var mediaQuery = window.matchMedia('(max-width: 400px)');

if (mediaQuery.matches) {
  
  for (const key in allLink) {
    
      console.log(allLink[key]);
      allLink[key].style.backgroundColor = "#00883f";
  }
}

function click(evt) {
  let div = evt.target;
  for (const key in allLink) {
    allLink[key].style.backgroundColor = "#00ae4d"
    div.style.backgroundColor = "#00883f"; 
  } 
}

//rgb(0, 136, 63)
