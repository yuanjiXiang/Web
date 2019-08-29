
//获取元素
var getElem = function(selector) {
	return document.querySelector(selector);
}
var getAllElem = function(selector) {
	return document.querySelectorAll(selector);
}

//获取元素样式
var getCls = function(element) {
	return element.getAttribute('class');
}
//设置元素样式
var setCls = function(element, cls) {
	return element.setAttribute('class', cls);
}

//为元素添加样式
var addCls = function(element, cls) {
	var baseCls = getCls(element);
	if (baseCls.indexOf(cls) === -1) {
		setCls(element, baseCls + ' ' + cls);
	}
}
//为元素删除样式
var delCls = function(element, cls) {
	var baseCls = getCls(element);
	if (baseCls.indexOf(cls) != -1) {
		setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
	}
}

//第一步：初始化样式 init 
var screenAnimateElements = {
	'.header' : [
	'.header',
	],
	'.sc1' : [
	'.sc1__content1',
	'.sc1__content2',
	],
	'.sc2' : [
	'.sc2__content1',
	'.sc2__content2',
	'.sc2__pic2',
	],
	'.sc3' : [
	'.sc3__pic1',
	'.sc3__content1',
	'.sc3__content2',
	],
	'.sc4' : [
	'.sc4__content1',
	'.sc4__content2',
	'.sc4__content3',
	],
	'.sc5' : [
	'.sc5__content1',
	'.sc5__content2',
	'.sc5__pic1',
	],
};

//设置屏内元素初始状态
var setScreenAnimateInit = function(screenCls) {
	var screen = document.querySelector(screenCls); //获取当前屏的元素
	var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素

	for (var i = 0; i < animateElements.length; i++) {
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');

		element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
	}

}

//设置播放屏内的元素动画
var playScreenAnimateDone = function(screenCls) {
	var screen = document.querySelector(screenCls); 
	var animateElements = screenAnimateElements[screenCls];

	for (var i = 0; i < animateElements.length; i++) {
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');
		element.setAttribute("class", baseCls.replace('_animate_init', '_animate_done'));
	}
}

window.onload = function() {
	for(k in screenAnimateElements) {
		if (k === '.header' || k === '.sc1' || k === '.sc2') {
			continue;
		}
		setScreenAnimateInit(k);
	}
}

// setTimeout(playScreenAnimateDone('.header'), 1000);
// setTimeout(playScreenAnimateDone('.sc1'), 1000);

//第二部，滚动到哪，播放到哪
var navTip = getElem('.header__nav-tip');
var navItems = getAllElem('.header__nav-item');
var outlineItems = getAllElem('.outline__item');

var switchNavItemsActive = function(idx) {
	for (var i = 0; i < navItems.length; i++) {
		delCls(navItems[i], 'header__nav-item_status_active');
	}
	addCls(navItems[idx], 'header__nav-item_status_active');
}

var switchOutlineItemsActive = function(idx) {
	for (var i = 0; i < outlineItems.length; i++) {
		delCls(outlineItems[i], 'outline__item-status_active');
	}
	addCls(outlineItems[idx], 'outline__item-status_active');
}




window.onscroll = function() {
	var top = document.documentElement.scrollTop; //获取滚动条高度

	if (top > 200) {
		addCls(getElem('.header'), 'header_status_change');
		addCls(getElem('.header__nav'), 'header__nav_status');
		addCls(getElem('.header__logo'), 'header__logo_status');
	} else {
		delCls(getElem('.header'), 'header_status_change');
		delCls(getElem('.header__nav'), 'header__nav_status');
		delCls(getElem('.header__logo'), 'header__logo_status');
	}
	if (top > -1) {
		addCls(getElem('.outline'), 'outline_status_in');
		switchNavItemsActive(0);
		switchOutlineItemsActive(0);
		navTip.style.left = 0 + 'px';
	}
	if (top > 640 * 1 - 200) {
		playScreenAnimateDone('.sc2');
		switchNavItemsActive(1);
		switchOutlineItemsActive(1);
		navTip.style.left = 1 * 92 + 'px';
	}
	if (top > 640 * 2 - 200) {
		playScreenAnimateDone('.sc3');
		addCls(getElem('.sc3__content3'), 'sc__content3_special_animate');
		switchNavItemsActive(2);
		switchOutlineItemsActive(2);
		navTip.style.left = 2 * 92 + 'px';
	}
	if (top > 640 * 3 - 200) {
		playScreenAnimateDone('.sc4');
		switchNavItemsActive(3);
		switchOutlineItemsActive(3);
		navTip.style.left = 3 * 92 + 'px';
	}92
	if (top > 640 * 4 - 200) {
		playScreenAnimateDone('.sc5');
		switchNavItemsActive(4);
		switchOutlineItemsActive(4);
		navTip.style.left = 4 * 92 + 'px';
	}
}


//第三部，导航条下划线


var setTip = function(idx, lib) {
	lib[idx].onmouseover = function() {
		navTip.style.left = (idx * 92) + 'px';
	}

	var activeIdx = 0;
	lib[idx].onmouseout = function() {
		for (var i = 0; i < lib.length; i++) {
			if (getCls(lib[i]).indexOf('header__nav-item_status_active') != -1) {
				activeIdx = i;
				break;
			}
		}
		navTip.style.left = (activeIdx * 92) + 'px';
	}
}

for (var i = 0; i < navItems.length; i++) {
	setTip(i, navItems);
}

playScreenAnimateDone('.header');
playScreenAnimateDone('.sc1');
