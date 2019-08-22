// let 변수에 담을 때 만드는 것 const 는 상수를 만들 떄 씀 
// $() 안에 css class를 넣으면 된다. 
let items = $('.menu-item');
let section = $('.board section');
let tab = $('.tab');
let tabSubject = $('.board ul a');
items.attr('tabindex','0');
tabSubject.addClass('icon-dot-circled');
tab.attr('tabindex','0');

items.attr('tabindex', '0'); //6개의 속성에 모두 attrivbute추가 해준다. 


//jQuery 메쏘드 on :  multi렌드를 바인딩 할 수 있다.  
//중괄호 안에 실행시키고 싶은것 넣는다. 
items.on('mouseover focusin', function(){
  items.removeClass('menu-act'); //이벤트가 발생한 순간 이벤트를 지운다. 
  $(this).addClass('menu-act'); //마우스 포인터를 올리면 menu-act class를 추가 해준다. 
}); 

tab.on('click keyup', function(e){
if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)){//===를 쓰면 type까지 같은걸로 찾는다. 13은 엔터 키 ~~
    section.removeClass('tab-act');
    $(this).parent().addClass('tab-act'); //css는 자식요소에는 접근가능하나 부모에는 접근이 불가하다 따라서 script로 
  }
}
// tab.on('click keyup', function(){ //click시에도 동작 keyup시에도 동작한다. 
  
// });//click이벤트가 발생할떄 일을 지시한다. 