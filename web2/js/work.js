// 搜索框
$.fn.searchList = function(){
	$(this).on('click', function() {
		$('.search-list').css({'display':'block'});
		return false; //避免事件冒泡，避免和body事件冲突
	});
	$('.search-list span')
	.on('click', function() {
		$('.search > span').text($(this).text()),
		$('.search-list').css({'display':'none'});
		return false;
	})
	.on('mouseenter', function() {
		$(this)
		.css({'background-color':'rgb(246, 246, 246)'})
		.siblings()
		.css({'background-color':'#fff'})
	});
	$('body').on('click', function() {
		$('.search-list').css({'display':'none'})
	})
}

// 页面切换1
$.fn.switch1 = function(){
	$(this).on('click', function() {
		// 选项卡颜色切换
		$(this)
		.css({'background-color': 'rgb(96, 191, 242)','color': 'rgb(255, 255, 255)'})
		.siblings()
		.css({'background-color':'#fff','color':'rgb(96, 191, 242)'});
		//内容切换
		var index = $(this).index();
		$('.dp').eq(index)
		.css({'display':'block'})
		.siblings()
		.css({'display':'none'});
		return false;
	})
}

// 页面切换2
$.fn.switch2 = function() {
	$(this).on('click', function() {
		$('.item-detail, .item').css({'display':'none'});
		$('.registration, .registration-table1').show()
	});
	$('.registration-caption').on('click', function() {
		$('.registration').css({'display':'none'});
		$('.item-detail, .item').css({'display':'block'})
	});
	return false;
}

// 页面切换3
$.fn.switch3 = function() {

	var l_icon = $('.go-left > span');
	var r_icon = $('.go-right > span')

	l_icon.on('click', function(){
		var table1 = $('.registration-table1');
		var table2 = $('.registration-table2');

		var table1_d = table1.css('left');
		var table2_d = table2.css('left');

		if(table1_d === '0px'){ 
			if(table2_d === '659px') {
				table1.animate({'left':'-659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
			else if (table2_d === '-659px') {
				table2.css({'left':'659px'});
				table1.animate({'left':'-659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
		}
		if(table2_d === '0px'){ 
			if(table1_d === '659px') {
				table2.animate({'left':'-659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
			else if (table1_d === '-659px') {
				table1.css({'left':'659px'});
				table2.animate({'left':'-659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
		} 
	})

	r_icon.on('click', function(){

		var table1 = $('.registration-table1');
		var table2 = $('.registration-table2');

		var table1_d = table1.css('left');
		var table2_d = table2.css('left');

		if(table1_d === '0px'){ 
			if(table2_d === '659px') {
				table2.css({'left':'-659px'});
				table1.animate({'left':'659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
			else if (table2_d === '-659px') {
				table1.animate({'left':'659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
		}
		if(table2_d === '0px'){ 
			if(table1_d === '659px') {
				table1.css({'left':'-659px'});
				table2.animate({'left':'659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
			else if (table1_d === '-659px') {
				table2.animate({'left':'659px'}, 1000)
				.siblings().animate({'left':'0'}, 1000)
			}
		} 
	})

	return false;
}




// 设置日期
var week = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
function formatDate(i) { //返回距离今天第i天的日期字符串格式
	var time = new Date();
	time.setDate(time.getDate() + i);
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var day = time.getDay();
	return ( week[day] + '\n'+ year + '-' + month + '-' + date);
}

function setDate(){
	var i = 0, j = 0;
	while(i < 14){
		if(i < 7){
			$('.registration-date1 td:eq(' + i.toString() +')').text(formatDate(i));
		} else {
			$('.registration-date2 td:eq(' + j.toString() +')').text(formatDate(i));
			j++;
		}
		i++;
	}
}
setDate();

$(function () {
	$('.search span:first-child').searchList();

	$('.item > a').switch1();

	$('.detail-table td').switch2();

	$('.go-right span').switch3();

});


