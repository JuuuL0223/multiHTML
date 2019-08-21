// let 변수를 만들 때 만드는 것 const 는 상수를 만들 떄 씀 
// $() 안에 css class를 넣으면 된다. 
let items = $('.menu-item');
items.attr('tabindex', '0'); //6개의 속성에 모두 attrivbute추가 해준다. 

//jQuery 메쏘드 on :  multi렌드를 바인딩 할 수 있다.  
//중괄호 안에 실행시키고 싶은것 넣는다. 
items.on('mouseover focusin', function(){
  items.removeClass('menu-act'); //이벤트가 발생한 순간 이벤트를 지운다. 
  $(this).addClass('menu-act'); //마우스 포인터를 올리면 menu-act class를 추가 해준다. 
});