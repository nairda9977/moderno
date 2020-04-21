$(function(){
   var mixer = mixitup('.products__inner-box');
      
    $(".rateYo").rateYo({
    rating: 5.0,
    starWidth: "15px", 
        readOnly: true
  });
    
    $(".product-slider__inner").slick({
        arrows:false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll:4,
         responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    })
  
});

