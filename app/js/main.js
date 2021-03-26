$(function(){

	

	// $(".rate-star").rateYo({    
  //   rating: 4.5,
	// 	starWidth: "17px",
	// 	readOnly: true,
	// 	normalFill: "#f1f3f6"
	// });
 
  $(".ratst.rate-star").rateYo({
			rating: 5,
			starWidth: "14px",
			normalFill: "#faefe0",
			fullStar: true,
  });


	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "17px",
		normalFill: "#faefe0",
		fullStar: true,
});


	$(".popular__items").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',

	});

	$(".followers__inner").slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',

	});
	
	new WOW().init();

	// $(".js-range-slider").ionRangeSlider({
	// 	type: "double",
	// 	min: 0,
	// 	max: 1000,
	// 	from: 0,
	// 	to: 600,
	// 	prefix: "$"
	
	// });

	// $('.icon-th-list').on('click', function(){
	// 	$('.product__item.center').addClass('list');
	// 	$('.icon-th-list').addClass('active');
	// 	$('.icon-th-large').removeClass('active')
	// });
	
	// $('.icon-th-large').on('click', function(){
	// 	$('.product__item.center').removeClass('list');
	// 	$('.icon-th-large').addClass('active');
	// 	$('.icon-th-list').removeClass('active')
	// });

	// $('.product-one__tabs .tab, .settins__tabs .tab').on('click', function(event) {
	// 	var id = $(this).attr('data-id');
	// 		$('.product-one__tabs, .settins__tabs').find('.tab-item').removeClass('active-tab').hide();
	// 		$('.product-one__tabs .tabs, .settins__tabs .tab').find('.tab').removeClass('active');
	// 		$(this).addClass('active');
	// 		$('#'+id).addClass('active-tab').fadeIn();
	// 		return false;
	// 	});


		// $('input[type="file"], select').styler();
		$('select').styler();



	// $('.menu__btn').on('click', function(){
	// 	$('.menu__list').slideToggle();
	// });
	
	// $('.header__btn-menu').on('click', function(){
	// 	$('.header__box').toggleClass('active');
	// });
	
				
						

	// var mixer = mixitup('.products__inner-box');
	 //плагин написан на чистом js должен 
	// видеть себя в дереве на странице, еси класса нет, то все не будет работать
	// нужно вставить єтот класс на страницу
	// а в js дб внизу

});
