// slide in left
jQuery.fn.slideRight = function () {
    $(this).css('left',-$(this).width()).show();
    $(this).stop().animate({left:0,opacity: 1}, 500, function() {});
    return this;
}

jQuery.fn.slideOutRight = function () {
    $(this).stop().animate({left: $(document).width(),opacity: 1}, 500, function() {}).hide();
    return this;
}

// slide out right
jQuery.fn.slideLeft = function() {
    $(this).stop().animate({left: -$(this).width(), opacity: 0},500, function() {});
    return this;
}

$(window).on('hashchange', function(e){
  e.preventDefault();
  $('.active').slideOutRight().removeClass('active');
  $(location.hash).slideRight().addClass('active');
});

$('.left').attr('active','false')

$(document).ready(function(){
  $("body").on('mousemove',function(e){
    if (e.pageX < 50 && $('.left').attr('active') == 'false') {
      $('.left').attr('active','true');
      $('.left').slideRight();
    }
    if (e.pageX > $('.left').width() && $('.left').attr('active') == 'true') {
      $('.left').attr('active','false');
      $('.left').slideLeft();
    }
  });

  if (location.hash) {
    $(location.hash).slideRight().addClass('active');
  }
  else {
    $('#start').slideRight().addClass('active');
  }
})