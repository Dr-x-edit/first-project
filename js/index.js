var lessonsCarouselWidth = $('.carousel-inner.carousel-lessons-inner')[0].scrollWidth;
var lessonsCardWidth = $('.carousel-item.carousel-lessons-item').width();

var lessonsScrollPosition = 0;


$('.carousel-control-next.carousel-control-next-lessons').on('click', function(){
    if (lessonsScrollPosition < lessonsCarouselWidth - lessonsCardWidth * 3){
        console.log('lessonsCarouselWidth:', lessonsCarouselWidth);
        var a = lessonsCarouselWidth - lessonsCardWidth * 3;
        console.log('lessonsCardWidth', lessonsCardWidth);
        console.log('result', a);


        lessonsScrollPosition += lessonsCardWidth;
        $('.carousel-inner.carousel-lessons-inner').animate({scrollLeft: lessonsScrollPosition}, 350);
    }
});

$('.carousel-control-prev.carousel-control-prev-lessons').on('click', function(){
    if (lessonsScrollPosition > 0){
        lessonsScrollPosition -= lessonsCardWidth;
        $('.carousel-inner.carousel-lessons-inner').animate({scrollLeft: lessonsScrollPosition}, 350);
    }
});


var testimonialsCarouselWidth = $('.carousel-inner.carousel-testimonials-inner')[0].scrollWidth;
var testimonialsCardWidth = $('.carousel-item.carousel-testimonials-item').width();

var testimonialsScrollPosition = 0;

$('.carousel-control-next.carousel-control-next-testimonials').on('click', function(){
    if (testimonialsScrollPosition < testimonialsCarouselWidth - testimonialsCardWidth * 3){
        console.log('lessonsCarouselWidth:', testimonialsCarouselWidth);
        var a = testimonialsCarouselWidth - testimonialsCardWidth * 3;
        console.log('lessonsCardWidth', testimonialsCardWidth);
        console.log('result', a);
        testimonialsScrollPosition += testimonialsCardWidth;
        $('.carousel-inner.carousel-testimonials-inner').animate({scrollLeft: testimonialsScrollPosition}, 600);
    }
});

$('.carousel-control-prev.carousel-control-prev-testimonials').on('click', function(){
    if (testimonialsScrollPosition > 0){
        testimonialsScrollPosition -= testimonialsCardWidth;
        $('.carousel-inner.carousel-testimonials-inner').animate({scrollLeft: testimonialsScrollPosition}, 600);
    }
});

