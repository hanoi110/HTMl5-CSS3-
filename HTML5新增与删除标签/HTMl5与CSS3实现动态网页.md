###Welcome to use MarkDown
##常用的DOCTYPE声明
#HTML 4.01 Strict
#HTML 4.01 Transitional
#HTML 4.01 Frameset
#HTML 5 <!DOCTYPE html>
##文档类型定义（DTD）
#在HTML中：DTD规定了标记语言的规则
	HTML5不基于SGML,所以不需要引用DTD
#新增的标签
	1.结构标签---有意义的div
		<article>文章
		<header>页面或区块头部
		<nav>导航连接
		<section>区域
		<aside>侧边栏
		<hgroup>文件一个区块的相关信息
		<figure>媒体内容
		<figcaption>figure元素的标题
		<footer>页面或区块底部
		<dialog>对话框（会话框）
		补充：
		header/section/aside/article/footer自己不嵌套自己
		header/section/footer > aside/article/figure/hgroup/nav > div/figcaption
	
	2.多媒体标签
		<video> 视频
		<audio> 音频
		<source>媒体资源
		<canvas>图片
		<embed>定义外部的可交互的内容或插件，比如flash
		
	3.Web应用标签
		状态标签
		<meter> 状态标签（气压、气温）
		<meter value="val" min="" max="" low="" high="" optimum=""></meter>
		<progress> 状态标签（安装、加载）
		<progress value="30" max="100"></progess>
		
		列表标签
		<datalist>为input标记定义一个下拉列表，配合option
		<details> 标记一个元素的详细内容，配合summary
		
		Menu
		<menu>     命令列表
		<menuitem> menu命令列表标签
		<command>  menu标记定义一个命令按钮
		
	4.其他标签
		<ruby>定义注释或音标
		<rt>  定义对ruby的注释内容文本
		<rp>  告诉那些不支持ruby元素的浏览器如何去显示
		<p>我们来<ruby>夼<rp>(</rp><rt>Kuang</rt><rp>)</rp></ruby>一个话题。</p>
		
		<mark>  定义有标记的文本（黄色选中状态）
		<output>定义一些输出类型
		
		<keygen>定义表单里一个生成的键值（加密信息传送）
		<time>  定义日期/时间
#删除的标签
	1.纯表现的元素
		Basefont,big,center,font,s,strike,tt,u
	2.对可用性产生负面影响的元素
		frame,frameset,noframes
	3.产生混淆的元素
		acronym,applet,isindex,dir
#重定义标签
	<b>  表示内联文本，通常是粗体
	<i>  代表内联文本，通常是斜体
	<dd> 可以同details和figure,dialog一同使用，定义包含文本
	<dt> 可以同details和figure,dialog一同使用，汇总细节
	<hr> 表示主题结束，而不是水平线，虽然显示相同
	<menu>   重新定义用户界面的菜单
	<small>  小字体，如打印注释或者条款
	<strong> 表示重要性