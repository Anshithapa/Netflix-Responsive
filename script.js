$(document).ready(function(){
    $(window).scroll(function(){
        var scroll =$(window).scrollTop()
        if(scroll>100){
            $(".netflix-navbar").css("background","#141414")
        }else
            {
                $(".netflix-navbar").css("background","transparent")
            }
    })
})