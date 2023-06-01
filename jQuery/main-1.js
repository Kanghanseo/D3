$(function(){

    //MENU

    $(".sub").hide()

    $(".main > li").hover(function(){
        $(".sub").stop().show()
    },function(){
        $(".sub").stop().hide()
    })

    //IMG

    $(".move li").hide()
    $(".move li").eq(0).show()

    // $(".move li").eq(0).siblings().hide()

    // $(".move li:gt(0)").hide()

    var n = 0
    
    setInterval(function(){

        $(".move li").eq(0).fadeOut()

        if(n==2){
            n=0
        }else{
            n++
        }

        $(".move li").eq(n).fadeIn()

    },3000)

    // $(".not_gal h2").click(function(){

    //     $(".not_gal h2").removeClass("on")
    //     $(this).addClass("on")

    //     $(".not_gal ul").hide()
    //     $(this).next().show()

    // })

    $(".notice h2").click(function(){
        $(".not_gal h2").removeClass("on")
        $(this).addClass("on")
        $(".not_gal ul").hide()
        $(this).next().show()
    })

    $(".gallery h2").click(function(){
        $(".not_gal h2").removeClass("on")
        $(this).addClass("on")
        $(".not_gal ul").hide()
        $(this).next().show()
    })

    $(".p_click").click(function(){
        $(".popup").show()
    })

    $(".close").click(function(){
        $(".popup").hide()
    })

})