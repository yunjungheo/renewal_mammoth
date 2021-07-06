// JQuery 기본 형식 두가지(어느걸 사용해도 상관없음)

// $(function(){

// });

// $(document).ready(function(){});
$(function(){
  // Mega Box Menu Show Hide When Hovering Navigation
  $(".topnav, .hidden_sub").on("mouseenter", function(){
    $(".hidden_sub").css({display:"block"});
    $(".topnav li a").css({color:"#000"});
    $(".hidden_sub").stop().animate({height:"485px"}, 300);
  });

  $(".topnav, .hidden_sub").on("mouseleave", function(){
    $(".hidden_sub").stop().animate({height:0}, 300, function(){
     $(".topnav li a").css({color:"#fff"});
     $(".hidden_sub").css({display:"none"});

        // 뒤에 함수써준건 콜백함수임. 앞에 높이가 0이되고나서 다읽어준다음에 뒤에 내용을 처리해줌 
    });
  });

  // Sub Mega Box Menu Hide and Show
  $(".topnav li").on("mouseenter", function(){
    const i = $(this).index();
    // 여기서 i 는 마우스엔터할때의? 그 인덱스를 받아오는것?!
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  // Mobile Menu Animation Effect
  $(".menu_icon").hover(function(){
    $(this).toggleClass('active');
  });
  //Mobile Menu Click Effect
  $(".menu_icon").click(function(){
    $(".mobile_nav").animate({left:0},300);
    $("section").animate({left:'60%'},300);
    $(".overlay").animate({
      "opacity":0.7,
      "left":"60%",
      "width":"100%"
    },300);
  });

  $(".close_btn, .overlay").click(function(){
    $(".mobile_nav").animate({left:'-60%'},300);
    $("section").animate({left:0},300);
    $(".overlay").animate({
      "opacity":0,
      "left":0,
      "width":0
    },300);
  });


  // Mobile Menu Accordion Effect
  $(".mobile_tit").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(this).removeClass("rotate");
      $(".movile_tit").removeClass("rotate");



    }else{
      $(".mobile_tit").removeClass("active");
      $(".mobile_tit").removeClass("rotate");
      $(this).addClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");
      

    }
  });
  
});
