$("#floor").children("ul").children("li").click(function(){
    var i = $(this).index();

    var now = $(".box").eq(i);
    
    var t = now.offset().top;

    $("html").animate({
        scrollTop:t
    })
})