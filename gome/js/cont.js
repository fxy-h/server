$(".millet-a").children("ul").children("li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    $(".millet-b-2").children(".millet-b-2-1").css("display","none").eq($(this).index()).css("display","block");
})