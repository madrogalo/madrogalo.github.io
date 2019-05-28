$('.slider-game').slick({
  autoplay: true,
  arrows: true,
  dots: true,
  mobileFirst: true,
  rows: 2,
  appendArrows: $('.slider-arrow-style'),
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet navigation"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet navigation"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
        breakpoint: 1023,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
        }
    },
    {
        breakpoint: 680,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
        }
    }]
});
$(".slider-game").on('afterChange', function(event, slick, currentSlide){
  $("#cp").text(currentSlide + 1);
});