;(function($){
	/*
	*header
	*banner
	 */
	var $header = $('#head');
	var $navBanner = $header.find('>ul.nav-groups >li');

	$navBanner.on('click', function(e){
		
		$(this)
			.find('nav-items')
			.find('>p.nav-items-en')
			.addClass('active')
			.parents('li')
			.siblings('li').find('.nav-items-en').removeClass('active');
	});


	var hash = window.location.hash;

	switch(hash){
		case "": {
			activeBtn(0);
			$('.search-bg').hide();
			break;
		}
		case "#2": {
			activeBtn(1);
			break;
		}
		case "#3": {
			activeBtn(2);
			break;
		}
		case "#4": {
			activeBtn(3);
			break;
		}
		case "#5": {
			activeBtn(4);
			break;
		}
		case "#6": {
			activeBtn(5);
			break;
		}
		case "#7": {
			activeBtn(6);
			break;
		}
	}

	function activeBtn(i){
		$navBanner
			.eq(i)
			.find('>a.nav-items >p.nav-items-en')
			.addClass('active')
			.parents('li')
			.siblings('li')
			.find('>a.nav-items >p.nav-items-en')
			.removeClass('active');
	}



	/*
	*home 模块
	*定义一个定时器，实现banner的自动轮播
	 */
	var $home = $('#home');
	var $slide = $home.find('.carousel.slide');
	var $carousel = $home.find('.carousel-inner');
	var $carousel_in = $home.find('.carousel-indicators >li');
	var i = 0;
	var copy = $carousel.find('>li').first().clone();
	$carousel.append(copy);
	var size = $carousel.find('>li').length;
	var timing_1 = setInterval(moveLeft,2000);

	function moveLeft(){
		if(flag){
			i = index_;
			flag = false;
		}

		i++;
		var w_carousel = $slide.width();

		if(i == size){
			$carousel.css({
				left: 0
			});
			i = 1;
		}

		$carousel.animate({
			left: -i * w_carousel
		},500);

		if(i == size - 1){
			$carousel_in.eq(0).addClass('active').siblings('li').removeClass('active');
		}else{
			$carousel_in.eq(i).addClass('active').siblings('li').removeClass('active');
		}
		// console.log(i);
	}

	//鼠标滑到banner上面时，自动轮播停止，鼠标划出banner时，自动轮播开始
	var index_ = 0;
	var flag = false;
	$slide.hover(function(event) {
		clearInterval(timing_1);

		$carousel_in.on('click',function(e){
			index_ = $(this).index();
			flag = true;
			var w_carousel = $slide.width();

			$carousel.stop().animate({
				left: -index_ * w_carousel
			},500);

			if(index_ == size - 1){
				$carousel_in.eq(0).addClass('active').siblings('li').removeClass('active');
			}else{
				$carousel_in.eq(index_).addClass('active').siblings('li').removeClass('active');
			}
		});


	},function(event) {
		timing_1 = setInterval(moveLeft,2000);
	});

	/*
	*investment case
	*定义一个定时器，实现投资案例的自动轮播
	 */
	var $caseBody = $home.find('.case-body-content');
	var $case = $home.find('#case-body-inner');
	var $case_in = $home.find('#case-body-indicators >li');
	var j = 0;
	var copy_case = $case.find('>li').first().clone();
	$case.append(copy_case);
	var size_case = $case.find('>li').length;

	var timing_2 = setInterval(moveCase,3000);

	function moveCase(){
		if(flag_){
			j = index_c;
			flag_ = false;
		}

		j++;
		var w_case = $caseBody.width();

		if(j == size_case){
			$case.css({
				left: 0
			});
			j = 1;
		}

		$case.animate({
			left: -j * w_case
		},1500);

		if(j == size_case - 1){
			$case_in.eq(0).addClass('active').siblings('li').removeClass('active');
		}else{
			$case_in.eq(j).addClass('active').siblings('li').removeClass('active');
		}
	}

	var index_c = 0;
	var flag_ = false;

	$caseBody.hover(function(e){
		clearInterval(timing_2);

		$case_in.on('click',function(e){
			index_c = $(this).index();
			flag_ = true;

			var w_case = $caseBody.width();

			$case.stop().animate({
				left: -index_c * w_case
			},1500);

			if(index_c == size_case - 1){
				$case_in.eq(0).addClass('active').siblings('li').removeClass('active');
			}else{
				$case_in.eq(index_c).addClass('active').siblings('li').removeClass('active');
			}

		});


	},function(e){
		timing_2 = setInterval(moveCase,3000);
	});

	/*
	*news center
	*company news and industry news
	*之间实时新闻信息的切换
	 */
	
	var $news = $("#news");
	var $newsBtn = $news.find('a.panel-nav');

	$newsBtn.on('click',function(e){
		// e.preventDefault();
		var i = $(this).index() / 2;
		console.log(i);
		$(this)
			.addClass('active')
			.siblings('a').removeClass('active')
			.parent()
			.siblings('.news-body')
			.find('.news-content').eq(i).addClass('active')
			.siblings().removeClass('active');
	});


	/*
	*enjoy-service
	*认购流程、在线预约、投资问答和下载中心
	*之间内容的切换
	 */
	
	var $enjoy = $('#enjoy-service');
	var $progressBtn = $enjoy.find('span.service-type');
	var $serviceLi = $enjoy.find('ul.service-content >li.service-items');

	$progressBtn.on('click',function(e){
		e.preventDefault();
		var i = $(this).index();
		$(this)
			.addClass('active')
			.siblings('span').removeClass('active');

		$serviceLi
			.eq(i).addClass('active')
			.siblings('li').removeClass('active');
	})


})(jQuery);