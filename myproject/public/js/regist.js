$(function(){
    
		//下拉列表
		var $btn=$("[data-trigger=dropdown]");
        //2. 绑定事件
        $btn.mouseover(function(e){
            //停止冒泡到window
            e.stopPropagation();
            //3. 查找要修改的元素
            //查找当前按钮下一个兄弟元素menu
            $(this).next() //下一个兄弟
            //4. 修改元素
             .css({height:399,opacity:1})
        })
        //当点击窗口空白处时，收起菜单
        $(window).mouseleave(function(e){
            //可选: 获得目标元素，封装为jquery对象
            //var $tar=$(e.target);
            //可选: 只有目标元素不是按钮时才
            //if(!$tar.is("[data-trigger=dropdown]")){
                //查找class为dropdown-menu的元素，收起
                $(".dropdown-menu")
                    .css({height:0,opacity:0})
            //}
        })
		
    $("#tb_input").blur(function(){
        var name=$("#tb_input").val();
        if(name.length==0){
            $(".uname_span").html("用户名不能为空");
        }
        else if(name.length<3||name.length>8){
            $(".uname_span").html("用户名为3-8个字符");
        }
        else{
            $(".uname_span").html("");
        }
    })
    $("#tb_input_phone").blur(function(){
        var name=$("#tb_input_phone").val();
        if(name.length==0){
            $(".upwd_span").html("密码不能为空");
        }
        else if(name.length<3||name.length>6){
            $(".upwd_span").html("用户名为3-6个字符");
        }
        else{
            $(".upwd_span").html("");
        }
    })

    $(".tb_regist2").click(function(){
        var name=$("#tb_input").val();
        var upwd=$("#tb_input_phone").val();
        $.ajax({
            url:"http://localhost:3000/user/regist",
            type:"post",
            data:{uname:name,upwd:upwd},
            dataType:"json",
            success:function(result){
                console.log(result);
            }
          })

    })
})

		