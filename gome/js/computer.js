$(".computer-a").children("ul").children("li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    $(".computer-b-2").children(".computer-b-2-1").css("display","none").eq($(this).index()).css("display","block");
})