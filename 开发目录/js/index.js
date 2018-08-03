/*
* @Author: Marte
* @Date:   2018-06-27 13:50:46
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-05 14:21:11
*/

'use strict';
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

//为元素增加样式
var addCls = function(element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1) {
       setCls( element, baseCls+ ' ' +cls);
    }
}

//为元素删除样式
var delCls = function(element, cls) {
    var baseCls = getCls(element);
     if (baseCls.indexOf(cls) != -1) {
       setCls( element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
    }
}


//第一步：初始化样式   init :
var screenAnimateElements = {
    '.screen-1' : [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__point',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-3' : [
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features'
    ],
    '.screen-4' : [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4'
    ],
    '.screen-5' : [
        '.screen-5__heading',       
        '.screen-5__subheading',
        '.screen-5__bg'
    ]
};

//设置屏内元素为初始状态
var setScreenAnimateInit = function(screenCls) {
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for (var i=0; i<animateElements.length; i++) {
            var element = document.querySelector(animateElements[i]);
            var baseCls = element.getAttribute('class');
            element.setAttribute('class', baseCls + ' ' +animateElements[i].substr(1)+'_animate_init');
        }
    }
//设置屏内元素的动画元素
var playScreenAnimateDone = function(screenCls) {
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]; //需要设置动画的元素
    for (var i=0; i<animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_init','_animate_done'));
    }
}
window.onload = function() {
    for (var k in screenAnimateElements) {
        if (k === '.screen-1') {
            continue;
        }
        setScreenAnimateInit(k);
    }
}

//第二步：滚动到哪，就播放到哪
var navItems = getAllElem('.header__nav-item');
var outlineItems = getAllElem('.outline__item');

var switchNavItemActive = function( idx ) {
    for (var i=0; i<navItems.length; i++) {
        delCls(navItems[i],'header__nav-item_status_active');
    }
    addCls(navItems[idx],'header__nav-item_status_active');
    for (var i=0; i<outlineItems.length; i++) {
        delCls(outlineItems[i],'outline__item_status_active');
    }
    addCls(outlineItems[idx],'outline__item_status_active')
}

window.onscroll = function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    switchNavItemActive(0);
    if (top > 80) {
        addCls( getElem('.header'), 'header_status_block');
        addCls( getElem('.outline'), 'outline_status_in');
    } else {
        delCls( getElem('.header'), 'header_status_block');
        delCls( getElem('.outline'), 'outline_status_in');
    }

    if (top > 1) {
        playScreenAnimateDone('.screen-1');
    } 
    if (top > 800*1-80) {
        playScreenAnimateDone('.screen-2');
        switchNavItemActive(1);
    }
    if (top > 800*2-80) {
        playScreenAnimateDone('.screen-3');
        switchNavItemActive(2);
    }
    if (top > 800*3-80) {
        playScreenAnimateDone('.screen-4');
        switchNavItemActive(3);
    }
    if (top > 800*4-80) {
        playScreenAnimateDone('.screen-5');
        switchNavItemActive(4);
    }
}

//第三步：双向定位

var setNavJump = function(i) {
    var item = navItems[i];
    item.onclick = function() {
        document.documentElement.scrollTop = i*800;
    }
}

for (var i=0; i<navItems.length; i++) {
    setNavJump(i);
}
for (var i=0; i<outlineItems.length; i++) {
    setNavJump(i);
}

//第四步： 滑动门特效
var navTip = getElem('.header__nav-tip');
var setTip = function(idx, lib) {
    lib[idx].onmouseover = function() {
        navTip.style.left = (idx*70) + 'px';
    }

    var activeIdx = 0;
    lib[idx].onmouseout = function() {
        for (var i=0; i<lib.length; i++) {
            if (getCls(lib[i]).indexOf('header__nav-item_status_active')) {
                activeIdx = i;
                break;
            }
        }
        navTip.style.left = (activeIdx*70) + 'px';
    }
}
for (var i=0; i<navItems.length; i++) {
    setTip(i,navItems);
}

//优化