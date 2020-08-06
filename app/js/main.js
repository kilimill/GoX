$(function(){

  $('.about__item-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/det/arrow-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/det/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $(".rate-star").rateYo({
    starWidth: "14px",
    ratedFill: "#AC0000",
    readOnly: true,
    rating: 5,
  });

  $('.wrapper .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
	$('.wrapper').find('.tab-item').removeClass('active-tab').hide();
	$('.wrapper .tabs').find('.tab').removeClass('active');
	$(this).addClass('active');
	$('#'+id).addClass('active-tab').fadeIn();
	return false;
  });


  $('.tabs').delegate('.tab:not(.active)', 'click', function () {
    act(this);
  })
  $('.prev').click(function () {
    var i = $('.active').index();
    var obj = $('.tabs > .tab');
    i = (i < 1) ? obj.length - 1 : i - 1;
    act(obj.get(i));
  })
  $('.next').click(function () {
    var i = $('.active').index();
    var obj = $('.tabs > .tab');
    i = ++i % obj.length;
    act(obj.get(i));
  })
  function act(Obj) {
    $(Obj).addClass('active').siblings().removeClass('active')
      .parents('div.wrapper').find('div.tab-item').eq($(Obj).index())
      .show().siblings('div.tab-item').hide();
  };


  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".burger-row").on("click", function (){
    $(".header__menu").slideToggle()
  });
});