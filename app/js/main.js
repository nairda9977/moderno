$(function(){
   
      
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
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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

$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
})

$('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
})
    
    $('input[type="file"], select').styler();
    
$('.product-one__tubs .tab, .settings__tabs .tab').on('click', function(event) {
var id = $(this).attr('data-id');
	$('.product-one__tubs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
	$('.product-one__tubs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
	$(this).addClass('active');
	$('#'+id).addClass('active-tab').fadeIn();
	return false;
});    

var mixer = mixitup('.products__inner-box');
    

  
});



 

