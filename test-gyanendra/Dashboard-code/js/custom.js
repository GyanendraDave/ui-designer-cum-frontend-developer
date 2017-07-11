var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}



$('.tabs-nav a').on('click', function (event) {
    event.preventDefault();
    
    $('.tab-active').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage .item-card').hide();
    $($(this).attr('href')).show();
});

$('.tabs-nav a:first').trigger('click'); // Default

$('#main-menu li').click(function() {
    $('#main-menu li').removeClass('active');
    $(this).addClass('active');
});

/*$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});*/

/*Hide-top Header*/
$(".close-item").click(function(){
        $(".top-header").hide();
    });


$('ul.main-menu li.dropdown').hover(function() {
  $(this).find('.sub-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.sub-menu').stop(true, true).delay(200).fadeOut(500);     
});



$( document ).ready(function() {
    $(".setsize").each(function() {
        $(this).height($(this).width());
    });
});
$(window).on('resize', function(){
    $(".setsize").each(function() {
        $(this).height($(this).width());
    });
});






