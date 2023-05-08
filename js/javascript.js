//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})

//gameList
$(function(){
    $('.gameList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var n = $(this).index();

        $(".gameBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//news切換
$(function(){
    $(".jumpWindow.news li").on("click",function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".jumpWindow.news .content ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//個人資料頁更變切換
$(function(){
    $(".memberInfo .chBtn").click(function(){
        $(this).closest(".btnBox").prev().toggleClass("active");
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })
})

//record
$(function(){
    $(".searchContent .check").click(function(){
        $(".noData")
        .removeClass("display");
        $(".recordBox")
        .addClass("display");
    })

    $(".searchContent .date button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".noData").addClass("display");
        $(".recordBox").removeClass("display");
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".eventApplyType li:eq(0)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.choose").addClass("display");
    })
    $(".eventApplyType li:eq(1)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.already").addClass("display");
    })
    $(".eventApplyType li:eq(2)").click(function(){
        $(".applyList").removeClass("display");
        $(".applyRecord").addClass("display");
    })

    $(".applyRecord .bigBtn button").click(function(){
        $(".reviewBody .noData").removeClass("display");
        $(".reviewBody .recordBox").addClass("display");
    })

    $(".applyRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".reviewBody .noData").addClass("display");
        $(".reviewBody .recordBox").removeClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit").addClass("display");
        $(".editBtn").removeClass("display");
        $(".mailBox").addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit").removeClass("display");
        $(".editBtn").addClass("display");
        $(".mailBox").removeClass("editing");
    })

    $(".topList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".topList li:eq(0)").click(function(){
        $(".mailBody.normal").addClass("display");
        $(".mailBody.post").removeClass("display");
        $("header .editBtn").addClass("display");
    })
    $(".topList li:eq(1)").click(function(){
        $(".mailBody.normal").removeClass("display");
        $(".mailBody.post").addClass("display");
        $("header .editBtn").removeClass("display");
    })


    $(".mailBody .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active"); 
    })
    $(".mailBody.normal .subClass li:eq(0)").click(function(){
        $(".mailBox.system").addClass("display");
        $(".mailBox.personal").removeClass("display");
    })
    $(".mailBody.normal .subClass li:eq(1)").click(function(){
        $(".mailBox.system").removeClass("display");
        $(".mailBox.personal").addClass("display");
    })
    $(".mailBody.post .subClass li:eq(0)").click(function(){
        $(".mailBox.hot").addClass("display");
        $(".mailBox.hot").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(1)").click(function(){
        $(".mailBox.nor").addClass("display");
        $(".mailBox.nor").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(2)").click(function(){
        $(".mailBox.dep").addClass("display");
        $(".mailBox.dep").siblings().removeClass("display");
    })
})

//smallTip展開
$(function(){
    $(".smallInfo").on("click",function(){
        $(this).find(".inner")
        .toggleClass("active");
    })
})

//錢包展開
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail")
        .toggleClass("active");
    })

    $('.openBtn').click(function(){
        $(this)
        .toggleClass('active')
        .prev('ul,.innerBox').toggleClass('active');
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".depList li:eq(0)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.card").addClass("display");
    })
    $(".depList li:eq(1)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.atm").addClass("display");
    })
    $(".depList li:eq(2)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.shop").addClass("display");
    })

    $(".depContent.card .check").click(function(){
        $(".depList,.depContent").removeClass("display");
        $(".depContent.already").addClass("display");
    })
    $(".depContent.already .change").click(function(){
        $(".depContent").removeClass("display");
        $(".depList,.depContent.card").addClass("display");
    })
})

//slotPage
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this)
        .toggleClass('active');
    })
})
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this)
        .addClass('active')
        .siblings().removeClass('active');
    })
})

//help
$(function(){
    $("header .helpPage:not(:first-child) .back_arrow").on("click",function(){
        $(this).closest(".helpPage")
        .removeClass("display");

        $("header .helpPage:first-child")
        .addClass("display");

        $(".helpInner")
        .removeClass("display");

        $(".helpWrap")
        .addClass("display");
    })

    $(".helpInner li .title").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })

    $(".helpBody li:eq(0)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q1").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q1").addClass("display");
    })

    $(".helpBody li:eq(1)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q2").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q2").addClass("display");
    })

    $(".helpBody li:eq(2)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q3").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q3").addClass("display");
    })

    $(".helpBody li:eq(3)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q4").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q4").addClass("display");
    })

    $(".helpBody li:eq(4)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q5").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q5").addClass("display");
    })

    $(".helpBody li:eq(5)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q6").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q6").addClass("display");
    })
    
    $(".helpBody li:eq(6)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q7").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q7").addClass("display");
    })

    $(".helpBody li:eq(7)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q8").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q8").addClass("display");
    })
})

//filter
$(function(){
    $('.jumpWindow .close,.jumpWindow .close_ic').click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".unLogin").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".openNews").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.news')
        .addClass('display');
    })

    $('.loginBtn .login').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.loginWindow')
        .addClass('display');
    })

    $('.loginWindow .forget').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.jumpWindow.forget')
        .addClass('display');
    })

    $(".loginWindow .registerBtn p,.loginBtn .signup,.jumpWindow.rule .back").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.jumpWindow.register')
        .addClass('display');
    })

    $('.register .isCheck span').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.jumpWindow.rule')
        .addClass('display');
    })

    $(".openSport").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.sport')
        .addClass('display');
    })
    $(".openLive").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.live')
        .addClass('display');
    })
    $(".openLottery").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.lottery')
        .addClass('display');
    })
    $(".openSlot").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.slot')
        .addClass('display');
    })
    $(".openFish").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.fish')
        .addClass('display');
    })
    $(".openBoard").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.gameWindow.board')
        .addClass('display');
    })

    $(".recordBox .check").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })
    $(".recordBox .num.link").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointDetail')
        .addClass('display');
    })

    $('.opLang').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.langWindow')
        .addClass('display');
    })

    $(".changePhoneBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.phoneWindow')
        .addClass('display');
    })
    $(".changePwdBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.passwordWindow')
        .addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.accWindow')
        .addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.platWindow')
        .addClass('display');
    })

    $(".cardContent button").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })

    $(".transWrap .check").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".waterBox .btnBox button:last-child").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.bettingDetail')
        .addClass('display');
    })
})