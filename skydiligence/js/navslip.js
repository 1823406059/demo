$(document).ready(function (){
            setSlip();
        });
        var setSlip = function(){
            var slip = $('#navslip');
            var a = $('.navigation a:first');
            //初始化滑块
            slip.css({
                'width':a.width()+1,
                'left' :parseInt(a.position().left) + 1 +'px'
            });
            $('.navigation a').mouseenter(function(){
                //显示滑块
                if(slip.css('display') == 'none'){
                    slip.show();
                };
                //移动滑块
                slip.stop().animate({
                    width: $(this).width()+1,
                    left:  parseInt($(this).position().left) + 1 +'px'
                },300);
            });
        };