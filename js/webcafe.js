let items = $('.menu-item');
let section = $('.board section');
let tab = $('.tab');
let tabSubject = $('.board ul a') 
items.attr('tabindex', '0');
tabSubject.addClass('icon-dot-circled');
tab.attr('tabindex','0');

items.on('mouseover focusin', function(){
  items.removeClass('menu-act');
  $(this).addClass('menu-act');
});

tab.on('click keyup', function(e){
  if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)){
    section.removeClass('board-act');
    $(this).parent().addClass('board-act');
  }
});