$(function(){
       if($(window).width()<1000){
                $("#vidio").hide()
                // $("#jumbotron").css('height', "500");
            }else{
                $("#vidio").show();
                // $("#jumbotron").css('height', 'auto');

            }
        $(window).resize(function(event) {
            if($(window).width()<1000){
                $("#vidio").hide()
                // $("#jumbotron").css('height', "500");
            }else{
                $("#vidio").show();
                // $("#jumbotron").css('height', 'auto');

            }
        });
        $(".show-img").mouseenter(function(){
            $(this).addClass('active');
            $(this).find('div[class="we-c"]').show(500);
        })
        $(".show-img").mouseleave(function(event) {
            $(this).removeClass('active');
            $(this).find('div[class="we-c"]').stop().hide(500);
        });
        $(".icon-display").mouseenter(function(event) {
            // $(this).find('b').show();
            $(this).addClass('active')
            $(this).find('a').stop().animate({ "left": -0}, 500)
            
        });
        $(".icon-display").mouseleave(function(event) {
            $(this).removeClass('active')
            $(this).find('a').stop().animate({ "left": 86}, 500)
            // $(this).find('b').hide();

        });


    $(window).scroll(function(event) {
        if($(window).scrollTop()>200){
            $("#navbar").addClass(' navbar-fixed-top');
        }else{
            $("#navbar").removeClass(' navbar-fixed-top');
        }
    });
    var wlen;
	$(".dropdown").mouseenter(function(){
		$(this).addClass('open');
	})
	$(".dropdown").mouseleave(function(){
		$(this).removeClass('open');
	})
    $(".dropdown").unbind("click");
	// $(".my-collapse").click(function(event) {
	// 	$(".mymark").fadeIn();
	// });
    var nwidth=-$("#nav-center").width()/2;
        if ($(window).width()<758) {
            $("#nav-center").css({'marginLeft': nwidth,"left":"50%"})
        }else{
            $("#nav-center").css({'marginLeft': 0,"left":"0"})} 
	$(window).resize(function(event) {	
		var nwidth=-$("#nav-center").width()/2;
		if ($(window).width()<758) {
			$("#nav-center").css({'marginLeft': nwidth,"left":"50%"})
		}else{
			$("#nav-center").css({'marginLeft': 0,"left":"0"})}		
	});

	var mark=$('.mymark'),
        sidebar=$('#sidebar'),
        sidebar_target=$('.my-collapse');
    function showsidebar() {
        mark.fadeIn();
        sidebar.animate({'left':0},500);
    }
    function hidesidebar() {
        mark.fadeOut();
        sidebar.animate({'left':-sidebar.width()},500);
    }
    sidebar_target.on('click',showsidebar);
    mark.on('click',hidesidebar)

    // $('.text').css("margin-top",($('.auto').height()-$('.text').height())/2+"px");
    // $(window).resize(function(event) {
    // 	$('.text').css("margin-top",($('.auto').height()-$('.text').height())/2+"px");
    // });

    

    $(".col").mouseenter(function(event) {
   		// $(this).find("img").attr("src","images/cdn1.png");
    	$(this).find("img").eq(0).addClass('hidden').siblings('img').removeClass('hidden');

    });
    $(".col").mouseleave(function(event) {
   		// $(this).find("img").attr("src","images/cdn1.png");
    	$(this).find("img").eq(1).addClass('hidden').siblings('img').removeClass('hidden');

    });
})