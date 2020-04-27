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
    });
    
  
  
});

   $('.slider-js').ionRangeSlider({
  type: "double",
  min: 0,
  max: 50000,
  from: 200,
  to: 7000,
  grid: true,
  prefix: "$"
    });

  $(".rateYo").rateYo({
    rating: 5.0,
    starWidth: "12px", 
        readOnly: true
  });

  $('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active'); 
    });

$('.icon-th-large').on('click' , function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
})

 

