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
			normalFill: "#fff",
			ratedFill: "#ffc000",
			fullStar: true,
  });

	$(".list__item-star.rate-star").rateYo({
		rating: 5,
		starWidth: "15px",
		normalFill: "#fff",
		ratedFill: "#ffc000",
		fullStar: true,
		spacing: "5px",
		// starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>',
		// starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>',

	});

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "17px",
		normalFill: "#fff",
		ratedFill: "#ffc000",
		fullStar: true,
	});




	$(".featured__items").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-left"></use></svg></button>',
		nextArrow: '<button><svg class="lnr lnr-chevron-left"><use xlink:href="#lnr-chevron-right"></use></svg></button>'
	

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
	
				
						

	var mixer = mixitup('.new__inner-box');
	 //плагин написан на чистом js должен 
	// видеть себя в дереве на странице, еси класса нет, то все не будет работать
	// нужно вставить єтот класс на страницу
	// а в js дб внизу

});
