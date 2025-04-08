$('.first li').click(function(){
    $(this).toggleClass("shadow-1").siblings();
    $(this).toggleClass("fill-color").siblings();
  });
  $('.second li').click(function(){
    $(this).toggleClass("shadow-2").siblings();
    $(this).toggleClass("fill-color").siblings();
  });