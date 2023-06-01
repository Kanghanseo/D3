$(function(){

    $(".sub").hide()

    $(".main li, .sub").hover(function(){
        $(".sub").stop().show()
    },function(){
        $(".sub").stop().hide()
    })

    $(".sub_list > li").hover(function(){
        var n = $(this).index()
        console.log(n)
        
        $(".main li a").removeClass("on")
        $(".main li").eq(n).find("a").addClass("on")
    },function(){
        $(".main li a").removeClass("on")
    })

})