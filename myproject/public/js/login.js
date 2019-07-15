$(function(){
    $(document).ready(function(){
        $(".login_a").click(function(){
            var height=$(window).height();  
            $(".log_div_box").css({"display":"block","height":height});
            $("#log_div").css("display","block");
        })
        $("#logdiv_tit_a").click(function(){
          $("#log_div").hide();
          $("#div").hide();
        })
    $("input:checkbox").click(function(){
        var $inpt=$(this);
        var $treg2=$("#a");
        if($inpt.is(":not(:checked)")){
            $treg2.addClass("tb_regist2");
            $treg2.removeClass("tb_regist");
    }else{
        $treg2.addClass("tb_regist");
        $treg2.removeClass("tb_regist2");
    }
        })
    })
    
})