//js/details.js
$(function(){
    //获得地址栏中?后的查询字符串部分，按等号一分为二，取后半部分。
    var lid=location.search.split("=")[1];
    //只有地址栏中提供了lid时，才发送请求
    if(lid!==undefined){
      $.ajax({
        url:"http://localhost:3000/details",
        type:"get",
        data:{lid},
        dataType:"json",
        success:function(result){
          console.log(result);
          //从result中提取出需要的三个成员分别使用
          var {product, specs, pics}=result;
          /*将product中title, subtitle, price, promise属性提取出来放到页面指定位置*/
          var {titles, price}=product;
          //46行:h6 id="p-title"
          
          //54行:h2 id="p-price"
          //58行:span id="p-promise"
          $("#good_title").html(titles);
         
          $("#good_price").html(`¥${price.toFixed(2)}`);
         
    
          //动态生成多个规格按钮
          //先声明空字符串html等待接收拼接的<a>
          var html="";
          //遍历specs数组中每个规格对象
          for(var sp of specs){
          //sp:{lid:2, spec:双核i5/8GB内存}
            //每遍历一个就向html中拼接一个<a>片段
            html+=`<li>
            <a class="${sp.lid==lid?'active':''}" href="getGoodsinfo4.html"?lid=${sp.lid}">${sp.spec}</a>
             </li>`;
          }
          //console.log(html);
          //70行:<div id="p-specs"
          $("#good_specs").html(html);
    
          /*放大镜效果*/
          //1. 小图片加载
          //定义空字符串html
          var html="";
          //遍历pics中每个图片对象
          for(var p of pics){
          
            //每遍历一个就拼接一个li元素到html中
            html+=`<li><img src="${p.lg}" data-md="${p.md}" data-lg="${p.lg}"width="50px" alt=""></li>`;
          }
          // <ul id="ulImgs"
          var $ul=$("#ulImgs").html(html)
          //动态计算ul的宽度:pics.length*62
            .css("width",pics.length*80);
          
          //当单击左右按钮时，让ul左右移动一次
          // <img id="btn-left"
          // <img id="btn-right"
          //定义变量moved保存已经左移的li的个数
          var moved=0;
          //为两个按钮绑定单击事件
          var $btnLeft=$("#btn-left");
          var $btnRight=$("#btn-right");
          //如果pics的length<=4右边按钮就禁用
          if(pics.length<=4){
            $btnRight.addClass("disabled");
          }
          $btnRight.click(function(){
            var $this=$(this);
            //只有当前按钮不是禁用样式时
            if($this.is(":not(.disabled)")){//才能点击
              //左移的li个数+1
              moved++;
              //ul的marginleft永远等于-moved*62
              $ul.css("margin-left",-58*moved);
              //只要右边按钮可以点一次，则左边按钮一定可以点
              $btnLeft.removeClass("disabled");
              //如果多余的图片已经移动完
              if(moved==pics.length-4){
                $this.addClass("disabled")
              }
            }
          });
          $btnLeft.click(function(){
            var $this=$(this);
            //只有当前按钮不是禁用样式时
            if($this.is(":not(.disabled)")){//才能点击
              //左移的li个数-1
              moved--;
              $ul.css("margin-left",-62*moved);
              //只要左边按钮可以点一次，则右边按钮一定可以点一次
              $btnRight.removeClass("disabled");
              //如果左移的li个数为0，说明不能退了
              if(moved==0){
                $this.addClass("disabled");
              }
            }
          });
    
          //鼠标进入小图片切换中图片
          //先找到中图片<img
          var $mImg=$("#m-img");
          //查找右侧大图，随中图片一同更新
          var $divLg=$("#bigImg");
          
          //console.log($divLg,$mImg);
          //初始化中图片为pics中第一张图片的中图片版本
          $mImg.attr("src",pics[0].lg);

          //同时初始化div-lg的背景图片
          $divLg.css("background","url("+pics[0].lg+")");
          console.log(pics[0].lg);
          //事件代理/委托, 为ul绑定鼠标进入事件，只有鼠标进入li下的img元素时才能触发事件
          $ul.on(
            "mouseenter",
            "li>img",
            function(){
              //获得当前img
              var $img=$(this);
              //获得当前img的中图片路径
              var src=$img.attr("data-md");
              //将md赋值给中图片的src属性
              //27行: <img id="m-img"
              $mImg.attr({src});
              //再获得大图片路径
              var src=$img.attr("data-lg");
             
              //设置大div的背景图片为src
              $divLg.css("background-image","url("+src+")").css("background-repeat","no-repeat");
            }
          )
    
          //鼠标进入中图片，显示半透明遮罩层
          //先查找半透明遮罩层
          var $mask=$("#mask");
          //获得上层充当保护层的玻璃板div
          var $superMask=$("#super-mask")
          //定义变量保存mask的大小:
          var maskSize=176;
          //事件绑定在上层玻璃板上，不会影响下层元素
          $superMask
          .mouseenter(function(){
            $mask.css("display","block");
            $divLg.css("display","block");
          })
          .mouseleave(function(){
            $mask.css("display","none");
            $divLg.css("display","none");
          })
          //当鼠标在super-mask上移动时，修改mask的位置
          .mousemove(function(e){
            var left=e.offsetX-maskSize/2;
            var top=e.offsetY-maskSize/2;
            //如果left<0，就固定在0，如果left>176，就固定在176
            if(left<0){
              left=0;
            }else if(left>250){
              left=250;
            }
            //top的规则同left
            if(top<0){
              top=0;
            }else if(top>250){
              top=250;
            }
            $mask.css({left,top});
            //作业：同时根据mask的left和top，修改$divLg的背景图片位置(background-position)
            $divLg.css("background-position",`${-left*1.5}px ${-top*1.5}px`)
          })
        }
      })
    }else{
      alert("请提供商品编号?lid=n")
    }
    })
    //在product_details.html结尾引入
    //<script src="js/header.js"
    //<script src="js/details.js"