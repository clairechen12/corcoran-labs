$(window).scroll(function() {
    var $percentageComplete = (($(window).scrollTop() + window.innerHeight - $(".item-wrapper").offset().top) / $(".item-wrapper").outerHeight()) * 100;
    var window_bottom = ($(window).scrollTop() + window.innerHeight);
    $(".item-wrapper").each(function() {
        var svg_bottom = $(this).offset().top + $(this).find("svg").outerHeight();
        if (window_bottom > svg_bottom) {
            $(this).find("path").addClass("line-drawing");
        }
    });
});

$('.carousel').carousel({
  interval: false
});


function goTo(el) {
     var ID = "#" + el;
     $('body, html').animate({ scrollTop: $(ID).offset().top }, '700');
     $(".navigation-mobile").hide("slide", { direction: "up" }, 400);
 }

 $(window).bind('keydown', function(e){
    if (e.keyCode == 37) {
        console.log('left');
    } else if (e.keyCode == 38) {
        console.log('up');
    } else if (e.keyCode == 39) {
        console.log('right');
    } else if (e.keyCode == 40) {
        console.log('down');
    }
});

 $(".mobile-menu-trigger").click(function(){
    $(".navigation-mobile").toggle();
 });