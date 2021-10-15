# 

### 一、什么是前端？

1、一个完整的网站是由两部分组成的，前端和后端
2、前端看得见的东西，网页就是看的见的东西，界面（视图），后端属于数据层
3、根据UI小姐姐给的设计稿使用代码的形式还原成网页形式，网页也是一个文档，后缀名是.html

### 二、HTML5和前端的关系？

1、以前的时候，前端的能做的事情特别的少，被人戏称为页面仔、切图仔，所以很多公司里面的前端基本上都是由后端兼职做的，前端的岗位特别少
2、随着技术的发展前端丰富化，做的东西越来越复杂了，专业的岗位需求越来越多了，这得利于HTML5技术的发展和推动，让前端更进一步，这个时候
为了改变前面大家对前端的影响，所以大家更愿意以HTML5工程师来叫做前端
3、后面随着大家对前端的认可，前端能做的东西越来越多了，随着node.js出来后咱们前端也可以做后端相关的东西了，所以它的价值得到了体现
4、2014年以后，HTML5技术发展，前端火了
5、前端具有唯一性，HTML、CSS、JavaScript。pc端网页、移动端网页、小程序、桌面应用、游戏、软件应用的界面等等
6、HTML5是HTML语言的第五个版本或者第五次重大修改，HTML5意义的是包含一切前端技术

### 三、什么是后端？

1、后端就是跟服务器和数据库打交道的。服务器是用来存储网站或者软件的，数据库存储数据的
2、服务器，是一台超级电脑只不过它的配置和性能比普通电脑高不知道多少倍，一天24小时不能断电
3、后端语言有哪些？php、java、python、c、c++、.net、C#、Go、node.js。。。

### 四、PS简单操作？

1、常用快捷键：
     ctrl+N 新建
     ctrl+O 打开
     ctrl+S 保存
     ctrl++ 放大图片
     ctrl- - 缩小图片
     ctrl+R 标尺（带有参考线，如果快捷键不起作用直接找到视图，选择标尺即可。参考线当光标移到到它的身上时，点击ctrl点击可以直接拖动）

2、常用方法：
     图片拖拽：点击空格键 + 鼠标左键，可以把图片进行拖动操作
     截图：使用矩形选框工具 -- 选中目标区域（鼠标右键选择变换选取可以对选框进行微调，微调后回车即可）-- ctrl+C、ctrl+N（不要修好任何参数直接回车即可）、ctrl+V
     -- 存储为web所以格式（可以修改图片格式和大小）-- 保存
    吸取颜色值：使用吸管工具 -- 点击要吸取的区域 -- 点击拾色器（前景色）-- 复制十六进制颜色值（注意点：默认复制的时候#号是没有的，使用的时候要自己添加）
    例如：#ff2d1a
    量取尺寸：使用矩形选框工具选中要量取的区域 -- F8（快捷键可以显示信息面板，w（width）表示宽度、h（height）表示高度），如果F8不起作用直接找到窗口 -- 选择信息即可

### 五、学习最重要的是什么？

1、要有一个驱使你前进学习的动力，家庭、改变自身的现状、薪资是多少
2、肯做练习，最少敲10遍以上

### 六、建站流程？

一个网站从产生到上线，到你直接可以正常使用的过程
1、购买域名（网址，可以通过它找到对应的网站 http://www.baidu.com）
2、租用空间（购买服务器）-- 虚拟主机、虚拟云主机
     购买服务器和域名的网站有哪些？万网（阿里收购，阿里云）、新浪云、百度云、华为云、西部数码、新网等等
3、网站建设 -- 制作页面
4、网站推广：百度竞价、微信公众号、今日头条（抖音）、新浪热搜
5、网站维护

### 七、HTML超文本标记语言

1、文本：文字，不仅仅指的是汉字还包含其他的语言，指的是英文（西欧语言）
2、标记：记号，当你下次看到它的时候知道是什么意思，一个东西表示一个意思
3、超文本：指的是是网页中除了文字以外的其他的东西，图片、音频、视频、程序等等





1、W3C制定的结构和表现的标准

W3C( World Wide Web Consortium )**万维网联盟**，创建于1994年是Web技术领域最具权威和影响力的国际中立性技术标准机构。(制定了结构和表现的标准，非赢利性的。)

2、WHATWG

​    **网页超文本应用技术工作小组**是一个以推动网络HTML 5 标准为目的而成立的组织。在2004年，由Opera、Mozilla基金会和苹果这些浏览器厂商组成。

3、ECMA制定的行为的标准

 **欧洲电脑场商联合会。**制定了js标准

# 

### 一、创建站点

1、站点的作用

   用来归纳一个网站上所有的网页、素材以及他们之间的联系

2、创建站点的步骤

3、文件的命名规则

文件命名规则：用英文，不用中文

名称全部用小写英文字母、数字、下划线的组合，其中不得包含汉字、空格和特殊字符；必须以英文字母开头。

首页必须命名为index.html 

### 二、

```
<!--注释：解释代码的意思，浏览器不识别它。注意点，html注释不能少于四个杠，可以有多个杠-->
<!--声明文档类型（不属于标记范畴），告诉浏览器这是一个什么类型的文档，网页类型-->
<!doctype html>
<!--根元素（标记、标签），它是超文本标记语言里面最大的标记 --boss-- -->
<html>
<!--网页头部-->
<head>
<!--
字符编码（字符集）：1.解决乱码问题 2、兼容与沟通
utf-8这是国际标准编码
gb2312国际（国内标准）
GBK亚太地区使用的编码格式，包含中文里面的繁体字、日文、韩文、泰文等
-->
<meta charset="utf-8"/>
<!--网页标题-->
<title>这是网页标题</title>
</head>
<!--主体，网页内容都是放在它里面的-->
<body>
<h1>一级标题</h1>
</body>
</html>

```

### 三、01-HTML基本语法

**HTML基本语法分文两部分：**

1、常规标记（对儿标记、双标记）

2、单标记（空标记）

说明：

1、一对尖括号里面的第一个单词把它叫做标记、标签、元素

2、标记空格后的那个单词叫做属性，属性和属性值之间使用等号连接，属性值是放在双引号里面。一个标记可以有属性也可以没有，也可以有多个属性。多个属性之间不分先后顺序。

3、单标记（空标记）必须以斜杠结束。

### 四、02-HTML常用标记

**1、h1~h6：标题标记**
特点：独占一行，自上而下排列
注意点：一个网页中只能有一个h1标题，因为h1的搜索权重比较高。例如：在搜索一个关键字的时候，如果这个关键字放在h1标记里面的会被优先搜索到

html属性：

align="left|center|right" 水平对齐方式

**2、p 段落标记**

特点：独占一行，自上而下排列

html属性：

align="left|center|right" 水平对齐方式

**3、br 换行标记 单标记**

**4、hr 水平线标记 单标记**

html属性：

color="英文单词颜色值|十六进制颜色值"  水平线颜色

**5、strong、b 加粗标记**

特点：横向排列的 

注意点：对于横向排列的元素，如果代码排列中换行后，元素和元素之间有默认的间隙

**6、em、i 倾斜标记**

特点：横向排列的 

注意点：对于横向排列的元素，如果代码排列中换行后，元素和元素之间有默认的间隙

**7、font 字体标记**

特点：横向排列的 

html属性：

color="英文单词颜色值|十六进制颜色值" 

size="1-7" 表示文本大小

注意点：对于横向排列的元素，如果代码排列中换行后，元素和元素之间有默认的间隙

### 五、03-预留字符

预留字符：就是html里面准备好的一些符号

```
1、&nbsp;空格
2、&copy;版权符号 
3、&lt;小于
4、&gt;大于
5、&times;乘号
```

### 六、04-列表标记

列表标记：

1、无序列表 ul li

2、有序列表 ol li 

​    html属性：

type=“number|a|A|”

3、自定义 dl dt dd

```
<dl>
<dt>里面放置图片或者名词</dt>
<!--dd可以有多个-->
<dd>里面放的是解释</dd>
</dl>
```

特点：独占一行，自上而下排列

### 七、05-超链接标记

a 超链接标记

特点：横向排列的

html属性：

href="#" 地址  #表示空链接，起了占位的作用

target="_blank| _self";新窗口打开|默认值，当前窗口

### 八、06-图片标记

**1、img 图片标记**

特点：横向排列的

html属性：

src 路径

width 图片宽度

height 图片高度

title 图片标题，当鼠标悬停在图片上面时显示标题

alt  提示信息，当图片由于某种特殊原因（路径错误、网速慢、被和谐）不能正常加载时给用户的一个提示

图片路径分为两种：

**1、绝对路径  带盘的路径、网络地址**

**2、相对路径  一个文件夹下面互相查找**

​    当前文件指的就是网页

​    目标文件指的就是图片

​    ../ 表示返回上一级目录

​    ./ 表示当前目录，可以省略不写

​    a、当当前文件与目标文件在同一目录下时，直接写目标文件名+扩展名

​    b、当当前文件与目标文件的文件夹在同一目录下时，先写文件夹名，再写目标文件名+扩展名

​    c、当当前文件的文件夹与目标文件的文件夹在同一目录下时，../再写文件夹名，最后写目标文件名+扩展名

### 九、07-表格标记

**table 表格标记**

作用：显示数据

特点：独占一行，自上而下排列

组成：table、tr（行）td（列、单元格）

**html属性：**

width 宽度

height 高度

border 边框

align="left|center|right"

​    规则：

​        1、当把它设置在table上面时，会让整个表格水平对齐

​        2、当把它设置在tr上面时，会让整行的文本水平对齐

​        3、当把它设置在td上面时，会让单元格文本水平对齐

valign="top|middle|bottom" 垂直对齐方式

​    注意点：只能给tr和td使用

bgcolor 背景颜色

bordercolor 边框颜色

cellspacing 单元格到单元格之间的距离

​    注意点：只能给table设置

cellpadding 单元格内容到边框之间的距离

​    注意点：只能给table设置

rowspan 合并行

colspan 合并列

表格默认填充内容后，大小会自动伸缩。先合并再填写内容

### 十、08-表单标记

form 表单标记

作用：收集用户信息发送给服务器

特点：独占一行，自上而下排列

注意点：标记可以嵌套标记使用，外层的标记叫做父元素，里面的叫做子元素

html属性：

name 表单的名称，主要是为了区分不同的表单

action 表单提交地址，后台地址

method 表单提交方式  属性值 get post

**get 和post区别**

​        1、get是从服务器获取数据，post是向服务器传输数据

​        2、get数据可以在地址栏看见，而post是在地址栏看不到，因为post是通过http机制加密的

​        3、get不安全，post比较安全

​        4、get传输数据量比较小，一般不能大于2kb，而post理论上是没有限制的

​        5、get执行速度比post快

**input 标记**

html属性：

name 名称，为了区分不同的input标记

type 类型，type属性值决定了input标记的不同功能

value 表单的默认值

HTML5新增属性：

placeholder 表单的提示信息，当用户输入内容时，提示内容会默认隐藏，密码框里面的提示会正常显示

```
<form name="login" action="后台地址" method="">
<!--文本框-->
<input type="text" name="username"/>
<!--密码框-->
<input type="password" name="userpwd"/>
<!--提交按钮-->
<input type="submit"/>
</form>

<form name="">
<!--文本框-->
<input type="text"/>
<!--密码框-->
<input type="password"/>
<!--提交按钮-->
<input type="submit"/>
</form>

<form>
<!--文本框-->
<input type="text" name="username" value=""/>
<!--密码框-->
<input type="password" name="userpwd"/>
<!--提交按钮-->
<input type="submit"/>
</form>
```

checked 默认选中

disabled 禁用

**select 标记**

html属性：

name 下拉菜单的名称 

option 选项标记

html属性：

value 表示选项的内容，作用是后面使用js通过value可以获取里面的值

selected 默认选中排列在第一位

​    注意点：如果属性和属性值是一样的情况下，属性值可以省略不写

**textarea 多行文本域**

html属性：

cols 表示字符宽度

rows 表示字符高度

**reset 重置按钮**

注意点：必须放在form里面才起作用

### 十一、09-文本结点标记

span 文本结点标记

特点：横向排列的

作用：可以用于某个段落里面的某个字或者语句

注意点：span默认没有任何样式

### 十二、10-网页布局标记

div 网页布局标记

作用：用于把网页划分成不同的区域

特点：独占一行，自上而下排列

网页调试：

​    1、通过浏览器的控制台去查看网页的代码

​    2、通过控制台工具，可以看到一个网站的html和css代码

​        查看浏览器控制台的方法：

​        a、f12

​        b、鼠标移到目标区域位置，鼠标右键（检查、审查元素）点击审查元素

# 

### 一、css介绍

1、css语言是web标准中的样式语言

2、css翻译过来是层叠样式表

3、css作用是对网页信息显示进行控制

###  二、名词解释

1、层叠指的是css的一些规则

2、样式表，html和css是两门不同的语言，语言和语言之间要进行配合使用，必须需要一个沟通的"桥梁"，样式就是它们之间的桥梁。样式就是css代码执行的一个环境

3、网页信息，就是网页里面的一些文字、图片、音频、视频等等

### 三、样式表

1、内部样式表  通过style标记来执行的，style标记的功能就是执行css代码

 html属性：type 定义文档类型，告诉浏览器这是一个什么类型的文档

语法：

```html
<!--内部样式表-->
<style type="text/css">
	h1{color:red;}
</style>
```

注意点：

a、可以省略不写，但是不能写错

b、无论是style还是link标记在实际的开发过程中都是放在head标记里面，因为代码是从上自下执行的

2、外部样式表  通过link标记来执行的，link标记的作用是引入一个外部的css文件

3、内联（行内）样式表 通过style属性在标记的行内执行的，style属性的内部写的就是css代码

### 四、css语法

1、css语法由两部分组成：选择器（选择符）和声明组成

2、什么是选择器？表示要定义样式的对象，简单来说给谁设置样式谁就是那个对象，也可以给它取名称。把选择器可以理解为一个小工具，作用就是把标记提出出来给其设置样式

3、什么是声明？所谓的声明就是属性，css里面属性和属性值是用冒号连接的，分号结束的。一个属性有多个属性值的时候，属性值和属性值之间不分先后顺序

4、声明必须放在花括号里面，属性与属性直接空格或者换行不会影响它最终的效果

### 五、css常用属性

```css
width 宽度

height 高度

color 文本颜色

font-size 文本大小

background-color 背景颜色

border:值1 值2 值3; 边框  值1表示边框宽度  值2表示边框样式（solid实线）值3表示边框颜色

text-align:left|center|right|justify（两端对齐）; 文本水平对齐方式

line-height 行高 行高指的是文字行与行之间的距离

规则：

1、当行高等于容器高度时，可以实现文本垂直居中

2、当行高大于容器高度时，可以实现文本垂直往下

3、当行高小于容器高度时，可以实现文本垂直往上

组合方法：

margin:0 auto; 可以让元素在页面中水平居中

*{margin:0;padding:0;} 清除内外边距

 text-decoration:none; 清除超链接的下划线使用
    
list-style:none; 清除列表符号

背景属性：

背景分写形式：

background-color 背景颜色

background-image:url(); 背景图  url表示路径

背景图使用规则：

1、当背景图小于容器大小时，图片会默认平铺

2、当背景图大于容器大小时，图片某些部分会显示不完整

3、当背景图等于容器大小时，图片刚好显示下

background-repeat 背景图平铺属性 repeat默认值（平铺） no-repeat（不平铺） repeat-x（水平平铺） repeat-y（垂直平铺）  

背景图位置缩写形式：

background-position 背景图位置 left、right、center、top、bottom、百分比、具体的数值

值1表示水平位置  值2表示垂直位置

背景图位置分写形式：

background-position-x 水平位置

background-position-y 垂直位置

background-attachment 背景图固定 scroll（滚动） fixed背景图固定

缩写形式：

background:值1 值2 值3 值4...;

margin指的是外边距 类似于cellspacing，就是盒子与盒子之间的距离

margin:值1 值2; 值1表示上下  值2表示左右

margin-left 左边距

margin-top  上边距

margin-right 右边距

margin-bottom 下边距

padding 内边距、填充，指的是内容到边框之间的距离
			
padding:值1 值2; 值1表示上下  值2表示左右

padding-left 左填充

padding-top 上填充

padding-right 右填充

padding-bottom 下填充

float:left（左浮动）|right（右浮动）|none（默认值，不浮动）; 浮动 
			
作用：让竖着排列的元素横向排列
```

### 六、选择器

class选择器

语法：

```html
html:<标记 class="名称"></标记>

css: .名称{}

作用：可以让标记有一个名称，这样可以区分标记

注意点：class选择器在css里面对应的是点，这个点不能进行修改。选择器名称不能是中文或者是纯数字
```

id选择器

语法:

```html
html:<标记 id="名称"></标记>

css: #名称{}

作用：可以让标记有一个名称，这样可以区分标记

注意点：

1、id选择器在css里面对应的是#号，这个#不能进行修改。选择器名称不能是中文或者是纯数字

2、id选择器具有唯一性，一个标记对应的只能有一个id名称
```

包含选择器（后代选择器）

语法：

```html
html:

<标记>
	<标记></标记>
</标记>

css: 选择器1 选择器2...{}

作用：限定样式起作用的范围
```

通配符

语法：

```html
*{} *（all）表示的是所有的意思

作用：一般用来做重置样式。把默认的不需要的样式重新设置

注意点：通配符没有权重，通配符对权重没有贡献
```

权重：

1、什么是权重？所谓的权重是css默认给每个选择器自带的一种特性

2、权重的作用：当样式发生冲突的时候，以权重高的覆盖权重低的

3、权重默认表示方法四位数描述

注意点：

1、权重会遵循一个就近原则

2、权重覆盖的是相同的属性

```css
标记选择器 0 0 0 1

class选择器 0 0 1 0

id选择器  0 1 0 0

包含选择器 包含选择器之和
```

### 七、导航案例

html结构代码：

```html
<ul class="nav">
	<li class="first"><a href="#">首页</a></li>
    <li><a href="#">国内</a></li>
    <li><a href="#">国际</a></li>
    <li><a href="#">军事</a></li>
    <li><a href="#">财经</a></li>
    <li><a href="#">娱乐</a></li>
    <li><a href="#">体育</a></li>
    <li><a href="#">互联网</a></li>
    <li><a href="#">科技</a></li>
    <li><a href="#">游戏</a></li>
    <li><a href="#">女人</a></li>
    <li><a href="#">汽车</a></li>
    <li><a href="#">房产</a></li>
</ul>
```

css样式代码：

```css
/*内部样式表*/
<style>
	*{margin:0;padding:0;}
	.nav{
		width:1000px;
		height:40px;
		background-color:#01204f;
		/*
			margin指的是外边距 类似于cellspacing，就是盒子与盒子之间的距离
			
			margin:值1 值2; 值1表示上下  值2表示左右
			
			margin-left
			
			margin-top
			
			margin-right
			
			margin-bottom
			
		*/
		margin:0 auto;
		margin-top:50px;
		}
	.nav li{
		list-style:none;
		/*
			float:left|right|none; 浮动 
			
			作用：让竖着排列的元素横向排列
		*/
		float:left;
		line-height:40px;
		font-size:14px;
		/*
			padding 内边距、填充 
			
			padding:值1 值2; 值1表示上下  值2表示左右
			
			padding-left
			
			padding-top
			
			padding-right
			
			padding-bottom
		*/
		padding:0 10px;
		}
	.nav li a{
		text-decoration:none;
		/*超链接的文字颜色不能继承父元素的*/
		color:#fff;
		}
	.nav .first{
		padding-left:30px;
		background:#cc0000 url(images/home.png) no-repeat 8px 8px;
		}
</style>
```

# 

### 一、css样式表

1、内部样式表 通过style标记，在标记内部执行css代码

html属性:

type 定义文档类型，可以省略，但是不能写错

语法:

```css
<style>
	div{
		width:200px;
		height:200px;
		background:red;
		}
</style>
```

内部样式表适用于代码量较少的时候

2、外部样式表 通过link标记来引入一个外部的css文件

html属性：

rel 关联样式表，把html文件和css文件建立链接

type 定义文档类型，可以省略，但是不能写错

href css文件的路径

语法:

```css
<!--路径遵循相对路径规则-->
<link rel="stylesheet" type="text/css" href="css/hello.css"/>
```

注意点：

a、html文件命名叫做什么，css文件就命名叫做什么

b、同一个css文件可以给不同的html文件引用

外部样式表适用于代码量较多的时候

3、内联样式表 通过style属性，在它属性值里面执行的是css代码

语法:

```css
<!--内联样式表-->
<div style="width:200px;height:200px;background-color:red;">内联（行内）样式表</div>
```

内联样式表偶尔使用

样式表优先级：

1、内联样式表的优先级最高

2、内部样式表和外部样式表的优先级和书写顺序有关，后面的会把前面的给覆盖掉

3、在选择器里面叫做权重，在css样式表里面叫做优先级

### 二、css的层叠性

一个元素可能同时被多个css选择器选中，每个选择器都有一些css规则， 这就是层叠。 这些规则中有些是没有冲突的可以同时起作用，然而有些规则是相互冲突的。当发生冲突的时候必须选出一条最高特殊性(权重)的规则来应用，以优先级高的权重为标准。

### 三、外部样式表扩展

外部样式表两种形式：

1、link标记形式

2、css提供的import形式

语法：

```css
<!--css外部样式表扩展形式-->
<style type="text/css">
	@import url(css/hello.css);
</style>
```

link和import方法区别：

1、本质区别，link属于html标记，import是css提供的一种方式

2、加载顺序，link可以让html和css同时加载，import是先加载结构后加载样式，所以有时候当网速比较慢的时候，会看到明显的闪烁现象

3、兼容问题，link没有兼容问题，而import老的版本的浏览器不支持

4、控制DOM（document object model -- 文档对象模型，属于js里面的内容）时的区别，link可以被DOM操作，而import不能被操作

### 四、选择器

群组选择器

语法：

```css
html: 

<标记1></标记1>
<标记2></标记2>
...

css：选择器1,选择器2...{}

span, p, h1{color:red;}
```

作用：可以同时选择多个标记一起设置样式

注意点：最后一个选择器不能有逗号

伪类选择器

1、伪类选择器其实描述的是一种状态

2、语法：

a:link 表示的是鼠标初始的状态

a:visited 表示的是鼠标访问过后的状态

a:hover 表示的是鼠标悬停时的状态，光标移到到a标记上面不动

a:active 表示的是鼠标激活时的状态，鼠标点击不松开

```css
<style>
	a:link{color:red;}
	a:visited{color:pink;}
	a:hover{color:green;}
	a:active{color:yellow;}
</style>
```

3、注意点：

当鼠标访问过后，浏览器会默认有缓存

伪类选择器应用 -- 鼠标划过导航栏改变背景颜色和文本颜色

html结构代码:

```html
<ul>
	<li><a href="#">新闻列表</a></li>
    <li><a href="#">刘强东</a></li>
    <li><a href="#">马云不爱钱</a></li>
    <li><a href="#">马化腾</a></li>
    <li><a href="#">王思聪喜欢小姐姐</a></li>
    <li><a href="#">李嘉诚房子多</a></li>
</ul>
```

css结构代码:

```css
<style>
	*{margin:0;padding:0;}
	ul{
		width:800px;
		height:40px;
		background-color:#ccc;
		margin:50px auto;
		}
	ul li{
		list-style:none;
		float:left;
		line-height:40px;
		font-size:14px;
		padding:0 20px;
		}
	ul li a{
		text-decoration:none;
		color:black;
		}
	/*表示当鼠标划过li标记时让它的背景改变*/
	ul li:hover{
		background-color:greenyellow;
		}
	/*表示当鼠标划过li标记时让它下的a标记的文字颜色发生改变*/
	ul li:hover a{
		color:red;
		}
</style>
```

### 五、关于input问题

input横向排列的，在代码排列中换行后，input与input之间有默认的间隙。input默认都有两像素的边框问题

```css
取消input的边框：border:none|0;
input换行后的间隙问题解决方法：float:left;
input标记默认点击的时候有蓝色轮廓，取消轮廓 outline:none;
```

注意点：

1、浏览器支持的最小字体大小默认是12px，如果小于12px就以12px

2、当容器没有设置高度的时候，图片会默认把容器底部撑大几像素，解决方法给图片设置高度

### 六、控制文本位置的方法

控制文字的位置使用padding，padding会默认把元素变大，如果想要保持元素大小不改变直接从宽度或者高度上面减去对应的padding值

注意点：

1、left和right从宽度上减去

2、top和bottom从高度上减去

# 

### 一、盒模型

**盒模型概念**

css规定把所有HTML元素都可以看作成一个盒子，在CSS中，盒模型是用来设计和布局时使用的。 盒模型本质上是一个盒子，它的作用是封装周围的HTML元素。    

**盒模型组成**

边框（border）、边界（margin）、填充（padding）、内容区（content --- width和height）。

**盒模型概念解释**

1、可以把元素看成一个盒子，盒子在生活中是干什么呢？用来装东西

2、在html中可以把标记看成是一个盒子，盒子用来装内容，内容分为文本和标记本身

3、盒模型作用用来封装html元素，简单来说就是元素嵌套元素

### 二、margin属性

**margin介绍**

1、margin属性是盒模型给咱们提供的

2、margin作用：控制盒子与盒子之间的距离

3、margin名称：外边界、外边距  

**margin属性分写形式**

```css
margin-left 左边距

margin-right 右边距

margin-top 上边距

margin-bottom 下边距
```

**margin属性缩写形式**

```css
margin:值1; 值1表示四个方向都有

margin:值1 值2; 值1表示上下 值2表示左右

margin:值1 值2 值3; 值1表示上 值2表示左右 值3表示下

margin:值1 值2 值3 值4; 值1表示上 值2表示有  值3表示下  值4表示左
```

### 三、padding属性

**padding属性介绍**

1、padding属于盒模型给咱们提供的一个属性

2、padding作用：控制内容的位置，指的是内容到边框之间的距离

3、padding名称：内边距、填充、补白

**padding属性分写形式**

```css
padding-left 左边距
    
padding-right 右边距

padding-top 上边距

padding-bottom 下边距
```

**padding属性缩写形式**

```css
padding:值1; 值1表示四个方向都有
    
padding:值1 值2; 值1表示上下 值2表示左右

padding:值1 值2 值3; 值1表示上 值2表示左右 值3表示下

padding:值1 值2 值3 值4; 值1表示上 值2表示有  值3表示下  值4表示
```

**padding注意事项**

1、如果容器使用了padding属性，会默认把容器撑大，如果想要保持容器大小不变需要从元素的宽度或者高度上减去设置的padding值

 2、容器的内容，既可以是文本，也可以是标记。如果内容是标记的话，控制内容的位置既可以使用margin也可以使用padding怎么选择呢？那个简单就使用那个

3、如果一个块级元素没有设置宽度它的宽度根据父元素来的，这个时候使用了padding值不用减去   

### 四、元素类型

**元素类型介绍**

1、css规定了html标记有三种类型

2、分别是块级、内联、内联块元素   

**元素类型的特点**

1、块级元素类型 特点：独占一行，自上而下排列，可以设置宽和高度，一般作为其他元素的容器使用 

2、内联元素类型 特点：横向排列的，不能设置宽宽和高度，它的大小是由内容撑开的

3、内联块元素类型 特点：横向排列的，可以设置宽度和高度

注意点：对于块级元素来说，如果子元素没有设置宽度，根据它的元素特性会把容器的宽度

### 五、margin-top问题

**问题介绍**

1、什么是兼容，同一个css属性或者样式在不同的浏览器中解析的规则不一样，把兼容问题也称之为css bug，代码错误或者漏洞

2、当咱们给子元素设置了margin-top时，浏览器在解析的时候会误认为给父元素设置的，所以会出现一起往下掉的情况

**解决方案**

1、给容器设置overflow:hidden;

2、overflow:hidden; 第一个作用让内容溢出隐藏 第二个作用可以解决margin-top问题

**在哪些情况下会出现margin-top问题**

1、父元素和子元素都是设置了背景颜色时会出现

2、父元素是背景子元素是边框时会出现

3、父元素设置了边框，子元素设置了背景不会出现

4、父元素和子元素都是边框的时候也不会出现

5、子元素或者父元素设置了浮动属性时也不会出现

# 

### 一、关于流

1、在语言中流其实指的是规则

2、在css中有很多种流，浮动流、标准（文档）流、定位流

标准流：

- 什么是标准流？所谓的标准流其实就是正常的网页排版顺序

- 块级元素自上而下排列的，可以设置宽度和高度，独占一行的。内联元素横向排列的不能设置宽度和高度等等

- 标准流其实就是标记默认的一些状态或者叫做特性

浮动流：

- 什么是浮动流？所谓的浮动流就是一个标记设置了float属性后，就变成了浮动流

- 把一个标记设置了float属性你就要遵循我的规则
- 浮动流是漂浮在标准流之上的，一个标记成为浮动流后会改变原来的位置

### 二、浮动属性

1、为什么会出现浮动属性呢？标准流满足不了开发需求，不能让块级元素横向排列，所以出现了浮动属性帮助咱们解决这个问题

2、语法：float:left|right|none;

3、浮动定义：定义了文本如何环绕该元素显示。其实浮动属性一开始出现就是为了解决文本环绕现象的，在后面的使用过程中发现它还可以改变块级元素的排列方向

4、浮动作用：让自上而下排列的元素横向排列

5、注意点：把设置了浮动属性的元素其实也叫做脱离文档流或者叫标准流

**浮动使用注意事项：**

- 两个div，如果第一个浮动了，第二个没有设置浮动，这个时候第一个div会把第二个覆盖掉

- 两个div，如果第二个设置了浮动，第一个没有浮动，这个时候它们的位置保持不变
- 两个div，都设置了浮动，这个时候如果容器的宽度不够的情况下，第二个div会被挤到第二行去

### 三、清除浮动

1、清除浮动并不会把浮动给删除掉，而是清除浮动带来的一些负面影响

2、负面影响：高度塌陷、高度塌陷引起的元素垂直问题

3、高度塌陷：当给容器没有设置高度的时候，在标准流中子元素会把容器高度给撑开，如果把子元素设置了浮动属性，这个时候子元素就无法把容器的高度撑开，把这种现象称之为高度塌陷

清除浮动方法：

1、使用clear：both|left|right|none; both清除左右浮动

使用clear属性条件：

a、必须在设置了浮动属性的元素的同级下设置一个div或者叫做空元素，然后给空元素设置clear属性

b、这个用于清除的标记，不能有除了clear属性以为的其他样式

2、给容器设置overflow:hidden;

  oveflow属性作用：

  a、内容溢出隐藏

  b、解决margin-top兼容问题

  c、清除浮动

注意点：清除浮动并不是只要设置了浮动属性就要清除，而是发生了负面影响才去清除           

### 四、页面布局

1、最早的时候网页布局都是统一使用表格进行布局的，使用table标记把页面划分成不同的区域。由于早期网页结构和内容比较单一，完全可以使用这种形式的布局满足开发需求

2、随着网页内容越来越丰富多彩，开发需求复杂化，table布局无法满足的开发需求，所以出现了一种新的布局方式，把这种布局方式叫做div+css布局

3、div+css布局有两种形式：

- 窄屏页面，网页的外层宽度都是固定好的，这是由于刚开始时电脑屏幕的分辨率普遍没有那么大，所以窄屏页面布局可以满足开发需求

- 宽屏页面，技术发展越来越快，电脑屏幕的分辨率也越来越高，很明显窄屏页面无法满足需求，这个时候就出现了宽屏页面


宽屏页面写法：

1、采用网页外层宽度自适应 + 版心（指的是网页内容区域）

2、外层区域怎么达到自适应？

-    外层可以使用百分比

-    使用块级元素的特性，外层宽度可以不写。如果外层有脱离文档流的现象，必须设置宽度

# 

### 一、单位介绍

pt 表示是点的意思，其实更精确的翻译是磅。主要是用于印刷行业
    pt是固定不变的，设计师使用这个单位设计出来的东西，无论在什么样的分辨率下设计稿都不会改变，所以它保证了打印出来的最终效果
    

    pt转成px公式：9pt = 12px 3/4  0.75  
    
    em是一个相对于容器字体大小的单位，最大好处是会随着字体大小改变
    
    浏览器默认字体大小是16px，浏览器默认支持的最小字体大小是12px
    
    text-indent 首行缩进 推荐使用的单位是em  2em == 32px
    
    letter-spacing 字间距
    
    注意点：首行缩进和字间距都可以为负值，首行缩进为负值可以起到隐藏文字的作用
### 二、颜色值和字体

	颜色值：
	
	1、英文单词（orange、blue、pink、red、green、purple、yellow、white、black等等）
	
	2、十六进制颜色 例如：#fff  #ccc 注意点：可以写成三位或者是六位，必须前面设置#号
	
	3、rgb() 计算机三原色 red green blue 例如：255,255,255白色 0,0,0黑色
	
	font-family 字体
	
	说明：浏览器首先会寻找字体1、如存在就使用改字体来显示内容，如在字体1不存在的情况下，则会寻找字体2，如字体2也不存在，按字体3显示内容，如果字体3 也不存在；则按系统默认字体显示；
	
	注意点：同样字号大小的文字，如果字体不同在页面中最终显示的效果会有差异
	
	font-weight 字体加粗
	
	font-weight：bolder（更粗的）/bold（加粗）/normal（常规）
	分为九个等级：100-900
	100-400 一般
	500 常规字体
	600-900 加粗字体
	
	font-style 文字倾斜
	font-style：italic/oblique/normal(取消倾斜，常规显示)
	说明：italic和oblique都是向右倾斜的文字，但区别在于italic是指斜体字，而oblique是倾斜的文字，对于没有斜体的字体应该使用oblique属性值来实现倾斜的文字效果。
	
	text-decoration 文本修饰
	text-decoration:none/underline/overline/line-through
	
	text-indent 首行缩进
	text-indent:2em;
	(1)text-indent 可以取负值
	(2)text-indent 属性只对第一行起作用
	
	letter-spacing 字间距
	letter-spacing:2px;
	
	font属性的简写：字号，行高，字体
	说明：font属性值应当按照以下次序书写：
	顺序：font-style font-weight font-size/line-height font-family
	（1）简写时：font-size和line-height只能通过斜杠组成一个值，不能分开写
	（2）顺序不能改变，这种简写只能在同时制定font-size和font-family属性时才起作用，而且，没有设定font-weight，font-style，他们会使用默认值。


​	
### 三、标记补充

```html
<!--下划线和删除线-->
<u>哈哈</u>
<s>哈哈</s>
<del>删除线</del>

<!--上标和下标-->
X<sup>2</sup>
X<sub>2</sub>
<p>更多优惠<sup style="color:red;">hot</sup></p>

<!--代码标记 内联标记-->
<code>
	var a = 10;
    var b = 20;
</code>

<!--预格式化标记 块级标记-->
<pre style="width:200px;height:200px;border:1px solid;">上课      有些同


学听着听


着就睡了</pre>

<!--水平居中标记 块级标记-->
<center style="width:200px;height:200px;border:1px solid;">哈哈</center>
<center style="width:200px;height:200px;border:1px solid;">哈哈</center>
```

### 四、列表属性

```
1、/*list-style == list-style-type*/
	/*列表符号*/
	list-style-type:none;
2、/*列表符号图片化*/
    list-style-image:url(images/list.png);
3、/*列表符号的位置 外边和里面*/
	list-style-position:inside;
```



### 五、边框属性

边框属性：
    1、边框属性分写形式
    
    border-width 边框宽度
    
    border-style 边框样式（线型） solid实线  dashed虚线  dotted点划（状）线  double（双线）
    注意点：如果是双线必须是大于或者等于3px
    
    border-color 边框颜色
    
    2、边框属性缩写形式
    
    border:值1 值2 值3; 值1表示边框宽度 值2表示边框样式 值3表示边框颜色
    
    border-left:值1 值2 值3;
    
    border-right:值1 值2 值3;
    
    border-top:值1 值2 值3;
    
    border-bottom:值1 值2 值3;
# 

### 一、overflow

```
overflow:hidden;
作用：
1.内容溢出隐藏
2.解决margin-top问题
3.清除浮动，给容器设置

overflow:auto;
自适应，当内容溢出时会出现滚动条，如果是内容溢出高度会出现纵向滚动条，如果是内容溢出宽度会出现横向滚动条

overflow:inherit;
继承，父元素使用的值是什么样，子元素就是什么样的值

overflow:scroll;
滚动条，当内容溢出时会出现滚动条，内容没有溢出时横向和纵向滚动条的样式依旧在

overflow:visible;
默认值，内容不会被修剪，会出现在框外

```

### 二、空余空间

```
1、white-space:normal;默认值
2、white-space:nowrap;让文字强制不换行
   补充：<nobr></nobr>双标记 强制不换行
3、white-space:pre;将其他标记转成具有pre标记的功能，具有强制不换行
4、white-space:pre-wrap;具有pre标记的功能，但是会默认换行
5、white-space:pre-line;会把空白进行合并，会保留pre标记的换行功能
```

### 三、省略号显示

```
text-overflow:ellipsis;
条件：
1.必须设置宽度width:200px;
2.强制不换行white-space:nowrap;
3.溢出隐藏overflow:hidden;
4.出现省略号text-overflow:ellipsis;这个属性不能单独使用，使用没有任何作用

```

### 四、网页优化

1、一般在logo区域使用h1标记，因为h1搜索权重比较高

### 五、元素类型划分

在css里面会把html标记划分成几个不同的类型，根据元素特点划分

1、最早的时候只有两种元素类型：块级元素（block）、内联元素（inline）

2、横向排列的元素有些能设置宽度和高度有些不能设置，出现了一种新的类型内联块元素（inline-block）

块级元素、内联元素、内联块元素

3、有人也把元素划分成两种类型：置换元素和非置换元素

置换元素：把html标记里面默认带有css格式化以外的样式的标记称之为置换元素  img、button、select、textarea、input等等

非置换元素：除了置换元素以外其他的标记都称之为非置换元素

元素类型使用注意点：

1、在实际开发中，块级元素一般作为其他元素的容器使用

2、内联元素如果脱离了文档流后，就可以设置宽度和高度

3、p标记里面不能嵌套其他的块级标记，margin和padding上下值对于内联元素来说有问题，不能正常使用

### 六、元素类型转换

```css
display用于元素类型转换
常用的属性值：
display:block;把其他类型转成块级类型
display:inline;把其他类型转成内联类型
display:inline-block;把其他类型转成内联块类型
组合用法：
display:block让隐藏的元素显示
display:none;让显示的元素隐藏
不常用属性值：
display:list-item;把其他类型转成列表类型
display:table;把其他类型转成表格类型
display:inline-table;把其他类型转成行内表格类型
display:table-cell;把其他类型转单元格类型
```

注意点：内联块元素不能转换成内联元素

# 

### 一、图片整合技术（精灵图、css sprite、雪碧图）

图片整合技术（精灵图、css sprite、雪碧图）
    1、概念：将导航背景图片，按钮背景图片等有规则的合并成一张背景图，即将多张图片合为一张整图，然后用background-position”来实现背景图片的定位技术。
    

    2、为什么有图片整合技术的存在？从网页优化的角度去看，可以节约网络资源、可以提高网页加载速度
    
    图片整合的优势：
    
    1、通过图片整合来减少对服务器的请求次数，从而提高页面的加载速度
    
    2、通过整合图片来减小图片的体积
    
    了解内容关于服务器请求：
    
    在浏览器里面有一个协议，叫做http|https协议，超文本传输协议。作用：是约定了用户如何去上网
    
    1、当咱们在浏览器地址栏输入一个网址并回车的时候，浏览器会根据网址自动向服务器发送请求 -- 发送报文
    
    2、服务器接收请求的时候会进行一个判断，如果有这个资源就返回给你，如果没有就返回给你一个提示信息 404 不好意思你的网页走低了
    
    3、服务器把资源返回给浏览器，资源是html、css、js文件、图片、文字、音频、视频等等
    
    总结：看到浏览器和服务器之间进行交换，需要时间，会耗费网络资源，使用图片整合可以进行网页优化
    
    序列选择器：nth-child（）



# 

### 一、定位属性   

    关于流：
    1、标准流，就是正常的网页排版顺序
    
    2、浮动流，就是一个标记设置了float属性就成为浮动流 -- 脱离文档（标准）流（脱标）
    
    3、定位流，就是一个标记设置了position属性就成为定位流
    
    定位属性介绍：
    
    1、position位置，定位的作用就是让元素的位置发生改变
    
    2、语法：position:
    
    		static（静态定位，默认值，标准流的状态）
             
            relative（相对定位）
                    
            absolute（绝对定位）
                    
            fixed（固定定位）
                    
       注意点：定位属性必须配合这几个属性来使用，left、right、top、bottom
       
    relative相对定位：
    
    特点：
    
    1、相对定位是相对于自己以前在标准流的位置进行定位
    
    2、相对定位是不脱离文档流的，所以占位置（空间）
    
    3、相对定位是区分元素类型的（设置了定位，你以前是什么类型的元素现在依旧是，例如span标记，设置了相对定位依旧不能设置宽和高）
    
    4、作用：对元素进行微调、一般配合绝对定位来使用（子绝父相，父元素使用相对定位，子元素使用绝对定位）


​    
​    absolute绝对定位：
​        特点：
​        1、绝对定位是相对于祖先（父元素--有定位流）元素进行定位
​         绝对定位规则：绝对定位会优先去查找父元素进行定位，如果父元素是定位流就以它定位，如果不是会继续往上一级继续查找，直到找到最外层还是没有定位流，就以body进行定位 
​        2、绝对定位是脱离文档流的，所以不占位置。绝对定位会进行叠加
​        3、绝对定位是不区分元素类型的
​        
​        定位层级属性：
​        1、给所有的元素设置了绝对定位后，元素相互之间会进行层叠，默认最后一个定位的会排列在最上面。在实际的开发中层级会遇到冲突，可以使用z-index属性来解决
​        2、语法：z-index:auto|number; 注意点：没有单位，数值越大排列在最上面
​        
​        fixed固定定位：
​        特点：
​        1、脱离文档流的，不占位置
​        2、相对于body进行定位
​        3、不区分元素类型
​        4、不会随着滚动条的滚动而滚动
​        
​        设置了固定定位后，默认覆盖在内容区域的上面，但是咱们现在没有指定固定定位相对于body进行定位，所以头部区域的元素默认要有一个初始的位置，初始的位置就是覆盖在内容区域的上面，所以当内容区域的位置发生了改变，头部区域也要跟着下来
相对定位：

```html
<body>
<input type="text" value="大师经典之作"/>
<img src="img/yzm.jpg"/>
</body>
```

```css
<style>
	*{margin:0;padding:0;}
	input{
		width:200px;
		height:35px;
		}
	img{
		width:70px;
		height:35px;
		/*设置了相对定位后，移动的是元素定位后的位置，它以前标准流中的位置依旧存在，所以不会出现一起往下掉的状态*/
		position:relative;
		top:12px;
		left:-77px;
		}
</style>
```

定位应用：

```html
<body>
<div class="scroll">
	<!--轮播图结构，使用ul和li放置图片-->
    <ul>
    	<li><a href="#"><img src="img/16.jpg"/></a></li>
        <li><a href="#"><img src="img/18.jpg"/></a></li>
        <li><a href="#"><img src="img/21.jpg"/></a></li>
        <li><a href="#"><img src="img/22.jpg"/></a></li>
        <li><a href="#"><img src="img/31.jpg"/></a></li>
    </ul>
    <!--小圆圈的结构，使用ol和li-->
    <ol>
    	<li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ol>
</div>
</body>
```



```css
<style>
	*{margin:0;padding:0;}
	.scroll{
		width:500px;
		height:300px;
		border:1px solid;
		margin:50px auto;
		overflow:hidden;
		position:relative;
		}
	/*轮播图的原理：使用定位控制ul的left值*/
	.scroll ul{
		width:2500px;
		height:300px;
		}
	.scroll ul li{
		list-style:none;
		float:left;
		}
	.scroll ul li img{
		width:500px;
		height:300px;
		}
	.scroll ol{
		width:150px;
		height:30px;
		position:absolute;
		bottom:20px;
		left:50%;
		margin-left:-75px;
		}
	.scroll ol li{
		list-style:none;
		float:left;
		width:20px;
		height:20px;
		background-color:greenyellow;
		/*让元素变成圆，设置为50%或者元素的宽度一半*/
		border-radius:50%;
		font-size:12px;
		text-align:center;
		line-height:20px;
		margin:0 5px;
		/*鼠标指针，手型*/
		cursor:pointer;
		}
	.scroll ol li:hover{
		background-color:orange;
		color:#fff;
		}
		
</style>
```

# 

### 一、锚点

命名锚点链接的应用

    定义：
    是网页制作中超级链接的一种，又叫命名锚记。命名锚记像一个迅速定位器一样是一种页面内的超级链接，运用相当普遍。
    命名锚点的作用：在同一页面内的不同位置进行跳转。
    
    制作锚标记：
    1)给元素定义命名锚记名
    语法：<标记 id="命名锚记名"> </标记>
    2)命名锚记连接
    语法：<a href="#命名锚记名称"></a>
```html
<body>
    <a href="#gwz">瓜娃子</a>
    <a href="#thh">铁憨憨</a>
    <a href="#rnb">日脓包</a>
    <div id="gwz">瓜娃子</div>
    <div id="thh">铁憨憨</div>
    <div id="rnb">日脓包</div> 
</body>    
   
```

```css
<style>
	div{
		height:800px;
		}
	#gwz{
		background-color:green;
		}
	#thh{
		background-color:red;
		}
	#rnb{
		background-color:hotpink;
		}
</style>
```

### 二、透明属性

    1、高版本浏览器使用的透明属性：opacity 取值范围 0-1 0.5 = .5
    2、IE低版本浏览器兼容写法：filter:alpha(opacity=value); 取值范围 1-100
    
    高版本浏览器使用的透明属性：opacity 取值范围 0-1 0.5 = .5
    IE低版本浏览器兼容写法：filter:alpha(opacity=value); 取值范围 1-100
    
    css3新增了一个方法：rgba() 颜色值带透明功能  透明度取值范围0-1
    注意点：
    1、css3新增的方法，透明度子元素不能继承
    2、以前的写法子元素会继承父元素的透明度
    
    注意：改变伦理关系，父和子之间继承，兄弟和兄弟之间不能继承，可以把透明属性设置给它兄弟元素
```html
<div class="box1">
	<div class="son1"></div>
    <div class="son2">以前版本</div>
</div>

<div class="box2">
	<div>新版本</div>
</div>
```

```
<style>
	.box1{
		width:300px;
		height:300px;
		/*ackground-color:black;*/
		margin:50px auto;
		/*opacity:.5;*/
		position:relative;
		}
	/*改变伦理关系，父和子之间继承，兄弟和兄弟之间不能继承，可以把透明属性设置给它兄弟元素*/
	/*.box1 div{
		width:150px;
		height:150px;
		background-color:red;
		}
	*/
	
	.box1 .son1{
		width:300px;
		height:300px;
		background-color:black;
		opacity:.5;
		}
	.box1 .son2{
		width:150px;
		height:150px;
		background-color:red;
		position:absolute;
		left:0;
		top:0;
		}
		
		
	.box2{
		width:300px;
		height:300px;
		background-color:rgb(0,0,0,.5);
		margin:50px auto;
		}
	.box2 div{
		width:150px;
		height:150px;
		background-color:red;
		}
</style>
```

### 三、字母滚动

```html
<body>
<marquee scrollamount="500">欢迎小哥哥来到我的直播间</marquee>
<marquee behavior="alternate">感谢！宝贝儿，送的豪华游艇...</marquee>
<marquee direction="up">小哥哥，空虚寂寞冷吗？快来我的直播间</marquee>
</body>
```

```css
<style>
	marquee{
		width:500px;
		height:200px;
		border:1px solid red;
		}
</style>
```

### 四、宽高自适应

宽高自适应介绍：
			1、在以往的开发中发现容器的宽度和高度固定死的情况下，不利于内容的扩展。所以提出了宽高自适应
			2、宽高自适应可以一定程度上让内容的灵活性更强，也可以适应不同的屏幕

需求：

在开发中一开始给元素一个固定的高度，但是会随着内容的增加高度达到自适应？
			1、为了满足开发需求，css给咱们提供了一个属性 min-height 最小高度
			2、最小高度在低版本的IE浏览器里面不起作用的，正常的高度在低版本的IE浏览器里面就是最小高度

```html
<body>
		<!--
			需求：在开发中一开始给元素一个固定的高度，但是会随着内容的增加高度达到自适应？
			1、为了满足开发需求，css给咱们提供了一个属性 min-height 最小高度
			2、最小高度在低版本的IE浏览器里面不起作用的，正常的高度在低版本的IE浏览器里面就是最小高度
		-->
		<div>哈哈成都的高度在低版本面不起作用的</div>
	</body>
```

```css
<style type="text/css">
			div{
				width: 200px;
				/*注意点：只要最小高度和正常的高度一起使用，正常的高度会把最小高度给覆盖掉*/
				min-height: 200px;
				/*过滤器*/
				_height: 200px;
				background-color: yellow;
			}
		</style>
```



### 五、百分比单位

百分比布局其实也是宽高自适应，百分比布局其实也叫流式布局	

### 六、关键字过滤器

！important

# 

### 一、宽高自适应

宽高自适应：
	1、之前的布局使用属性：width和height固定元素宽高	
	2、现在css给咱们提供了几个属性来让网页自适应：
	
	max-width 最大宽度：元素有一个最大的宽度，如果宽度小于最大宽度，内容区域会自适应
	min-width 最小宽度：元素一开始是自适应的，如果宽度小于最小宽度，内容区域不会自适应
	
	max-height 最大高度：一开始元素的高度是自适应的，当内容超出最大高度时会溢出
	min-height 最小高度：一开始元素有一个固定的高度，随着内容的增加高度自适应
### 二、visibility

visibility: hidden;占位隐藏

### 三、伪对象选择器

选择器：
			1、伪类选择器，描述的是某种状态
			2、伪对象（元素）选择器，可以通过选择器的形式来给标记里面的指定的内容设置样式

```
/*可以给段落里面的第一个字设置样式*/
p::first-letter{
	            font-size: 30px;
				color: red;
			} 
			
/*可以给段落的第一行设置样式*/
p::first-line{
				color: red;
			}
```

```
/*在容器内容的后面添加一个元素，注意点：content属性必须设置，默认元素类型是内联类型*/
div::after{
		content: url(../../day05/代码/wolong/images/btn1.jpg);
			} 
			
div::before{
				content: "你的名字什么？";
			} 
			
div::after{
    content: "";
	width: 100px;
	height: 100px;
	background: red url(../../day05/代码/wolong/images/btn1.jpg) no-repeat center center;
	display: block;
			}
```

### 四、三角

```
div{
	width: 0;
	height: 0;
	/*transparent透明*/
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 50px solid blue;
	border-bottom: 50px solid transparent;
			}
			
/*鼠标划过的时候，伪类选择器和伪对象选择器中间没有空格*/
	ul li:hover::after{
			 display: block;
			}
```

### 五、兼容问题

兼容问题：
			1、IE由于绑定在window系统上，所以一开始IE浏览器的市场占有率非常高，其他的浏览器无法取代它
			2、IE浏览器基本上出于垄断地位，觉得自己就是标准，不会向web标准靠拢导致咱们作为开发者非常的痛苦
			3、后面由于 其他浏览器慢慢的出现，威胁到了IE浏览器的地位，所以自我革新出现了一个产品IE9
			4、IE9以下兼容问题是最多的，因为它很多情况下没有向标准考虑，IE9以上基本上和其他的浏览器都是一样的
			5、之前看兼容问题，一般以IE8为分界线
			

	浏览器内核：
		1、内核是浏览器最关键的部分，相当于是电脑的cpu
		2、内核是渲染引擎，它的作用相当于是一个翻译，把html、css、js文件解析成咱们能看得懂的东西
		3、浏览器内核分为了两个部分：渲染引擎、js引擎
			
	图片兼容bug：当容器没有设置高度的时候，图片默认会把容器底部撑大几像素
		1、设置高度
		2、float
		3、把图片转成块级标记 display:block;
		
	浏览器内核：
	    Triden、Gecko、Presto、Webkit、Blink
为什么会出现浏览器兼容问题？

​			1、由于各大浏览器由不同的厂家开发，所用的核心架构和代码很难重合

​			2、各大厂商出于自身利益考虑而设置的种种技术壁垒

### 六、vertical-align

图片兼容bug：当容器没有设置高度的时候，图片默认会把容器底部撑大几像素
			1、设置高度
			2、float
			3、把图片转成块级标记 display:block;
			4、vertical-align:top;
			注意点：图片默认情况下，在标准流中默认是以基线对齐的。只要不是以baseline基线对齐，其他的属性值都可以

vertical-align属性
			1、作用：垂直对齐方式
			2、属性值：top、middle、baseline、bottom
			解决问题：
			1、解决图片排列的间隙问题
			2、可以让两个内联或者内联块元素对齐
			

	表格html属性：
	valign="top、middle、baseline、bottom"
	注意点：如果有多个元素的时候，限定类型是内联或者内联块元素，会默认以最高的元素为参照物
	
	text-align:center;会对容器里面的内联或者内联块元素起作用
### 七、蓝色边框

图片蓝色边框：当图片放在a标记里面时，在IE版本的浏览器里面会出现蓝色边框

```html
<a href="#"><img src="img/small.jpg" width="200"></a>
```

```css
<style type="text/css">
			img{
				border: none;
			}
		</style>
```

### 八、表单元素问题

表单元素在标准流中由于自身排列问题，表单元素与元素之间无法与顶部对齐

```html
<input type="text" value="" />
<input type="button" value="按钮" />
```

```css
*{
	margin: 0;
	padding: 0;
	}
input{
	float: left;
	}
```

### 九、按钮问题

不同浏览器中，按钮样式不同

```html
<!--html标记，按钮-->
<!-- <button type="button">按钮</button> -->
<input type="button" value="按钮" />
<!--因为a标记默认也具有跳转功能-->
<a href="#">按钮</a>
```

```css
input{
				border: none;
				outline: none;
				width: 200px;
				height: 50px;
				background-color: orange;
			}
			a{
				width: 200px;
				height: 50px;
				background-color: orange;
				display: inline-block;
				text-decoration: none;
				color: black;
				text-align: center;
				line-height: 50px;
			}
```

### 十、鼠标指针

cursor:pointer; hand表示手型的意思，hand在低版本的IE浏览器下是没有问题，在其他浏览器里面不识别

```css
cursor: hand; 
cursor: pointer; 
cursor: help; 
cursor: wait; 
cursor: move;
```

### 十一、表单元素行高问题

表单元素的内容在低版本的IE浏览器下内容没有居中

```html
<input type="text" value="哈哈" />
```

```css
input{
				width: 200px;
				height: 50px;
				line-height: 50px;
			}
```

### 十二、公共样式使用

通配符存在问题：
	*表示通配符，通配符表示所有的意思，如果直接使用通配符取消内外边距会导致浏览器在解析代码的时候，会把页面中所有的标记都清除一遍，这样对于浏览器性能影响比较大

### 十三、万能清除法

```css
.clear::after{
	content: "";
	display: block;
	clear: both;
	visibility: hidden;
	height: 0;
}
.clear{
	zoom: 1;
}
```

### 十四、IE块级元素问题

设置1px的高度，在IE低版本浏览器中会有十几像素

设置overflow：hidden；

## 兼容问题总结

1、margin-top问题;

解决办法：

​            1、overflow:hidden;

2、图片间隙问题

解决办法：

​            1、设置高度
​			2、float
​			3、把图片转成块级标记 display:block;
​			4、vertical-align:top;

3、图片蓝色边框：当图片放在a标记里面时，在IE版本的浏览器里面会出现蓝色边框

解决办法：

​            设置border: none;

4、表单元素与元素之间无法与顶部对齐

解决办法：

​            设置float: left;

5、不同浏览器中，按钮样式不同

解决办法：

​            用a标签代替button

6、鼠标指针，hand在低版本的IE浏览器下是没有问题，在其他浏览器里面不识别

解决办法：

​            用cursor:pointer;

7、表单元素的内容在低版本的IE浏览器下内容没有居中

解决办法：

​            设置行高line-height

8、IE块级元素问题，设置1px的高度，在IE低版本浏览器中会有十几像素

9、opacity

IE低版本浏览器兼容写法：filter:alpha(opacity=value); 取值范围 1-100

解决办法：

​            设置overflow：hidden；

# 

###  一、表格标记和属性

table表格标记：
			1、作用：显示数据的，一般现在使用后台系统，数据相关的网站，用于显示图表信息
			2、组成：table tr（行） td（单元格）
			3、tr th 表头标题 caption 表格标题		

table标记html属性：

```
table标记html属性：
width
height
border
cellspacing
cellpadding
colspan
rowspan
bgcolor
bordercolor
align
valign
表格标记完整组成部分：
<table>
表格标题
 <caption></caption>
表头 <!--表格行分组-->
 <thead>
  <tr>
表头标题，默认带加粗效果和水平居中，垂直居中
   <th></th>
  </tr>
 </thead>
表体，注意点：tbody如果不写的情况下，浏览器在解析的时候为了区分表格表体内容会默认添加
 <tbody>
  <tr>
   <td></td>
  </tr>
 </tbody>
表尾
 <tfoot>
  <tr>
   <td></td>
  </tr>
 </tfoot>
</table>			
```
	<!--表格列分组 span属性 作用：用于把表格划分不同的区域-->
	<!-- <colgroup span="2" style="background-color: red;"></colgroup> -->
	<!-- <colgroup span="1" style="background-color: yellow;"></colgroup>
	<colgroup span="2" style="background-color: orange;"></colgroup> -->
	<!-- <col span="1" style="background-color: blueviolet;"/> -->
	
	<!--rules属性表示的是组分割线-->
	rules="rows/cols/all/none"添加组分隔线


table标记css属性：

```
table标记css属性：
border-spacing: 20px;表示单元格与单元格之间的间隙
border-collapse: collapse;合并单元格的边框
table-layout: fixed;表格固定
empty-cells: hide;单元格无内容时隐藏
```

```
表格隔行变色
双数行：tr:nth-child(2n/even(偶数))
双数行：tr:nth-child(2n+1/odd(奇数))
```

### 二、表单

表单分组标记：

```
表单分组标记：
<fieldset>
<legend></legend>
</fieldset>
1、表单字段集
<fieldset></fieldset>
2、字段集标题
<legend align="left/center/right"></legend>
```

提示信息标签：

```
提示信息标签：
<lable></lable>
<!--for属性用于和表单元素的id建立链接-->
<label for="username">用户名</label>
<input type="text" name="" id="username" value="" /> 
或者
<label>用户名:<input type="text" value="" /></label> 

```

```html
单选框，id具有唯一性，设置不同id
<input type="radio" name="sex" id="by" value="" /><label for="by">男</label>
<input type="radio" name="sex" id="gl" value="" /><label for="gl">女</label>
```

上传文件框：

```
上传文件框：
<!--multiple多选-->
<input type="file" value="" multiple="multiple"/>
```

想要改变上传文件框的样式：

```html
<div>
	<input type="file" value="" multiple="multiple"/>
	<p>上传文件</p>
</div>
```

```css
*{
	margin: 0;
	padding: 0;
 }
div{
	width: 200px;
	height: 50px;
	background-color: greenyellow;
	margin: 50px auto;
	position: relative;
	border-radius: 10px 10px 10px 10px;
	}
div input{
	width: 200px;
	height: 50px;
	/* display: none; */
	/* visibility: hidden; */
	/*透明属性为0的时候可以隐藏元素*/
	opacity: 0;
	position: absolute;
	z-index: 999;
	cursor: pointer;
	}
div p{
	position: absolute;
	height: 26px;
	top: 50%;
	margin-top: -13px;
	left: 30%;
	}
```

图像域：

```
<!--网站状态栏图标-->
<link rel="shortcut icon" href="img/tm.gif"/>
图像域：
<input type="image" src="">
html里面最重要的就是标记的语义化：
1、见名知意
2、让机器能读懂它是什么意思
3、不是你认为怎么样，而是让浏览器认为是什么样
图像域也叫做图片按钮
```

### 三、目录
​		/表示网站根目录
​		./表示网站的当前目录，在实际开发中服务器环境下需要添加
​		../表示返回上一级目录

### 四、HTML5介绍

HTML5介绍：
			1、HTML5是HTML超文本标记语言的第五个版本
			2、现在HTML5简单来说代指的是前端的相关技术
			3、HTML5里面新增的东西不仅仅是一些语义化的标记，还有很多其他的东西，一些高级的好用的东西配合js使用

​	HTML5的特点：

	HTML5的特点：
	 1、跨平台，简单来说使用H5技术开发的应用可以在各个平台使用
	 2、其实H5技术发展为很多公司开发应用节约了成本
			
	开发app种类：
	 1、原生开发 Android、IOS，开发出来的应用的性能比较高，成本较高
	 2、webapp开发，成本低，相比较原生的性能相对较差
			
	HTML5结构为什么简单（不基于以下两个）：
	 1、DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容
	 2、SGML标准通用标记语言，是一种定义电子文档结构和描述其内容的国际标准语言
			
	盒模型介绍：
	 1、标准盒模型（w3c）
	    盒模型宽度 = 左右margin + 左右padding + 左右border + content（width）
	 2、怪异盒模型（IE）
	    盒模型宽度 = 左右margin + content（width包含了padding和border）可以方便计算
	怪异盒模型使用：
	 1、在低版本的IE浏览器里面，当咱们不定义doctype时可以触发
	 2、在css3里面新增了一个box-sizing:border-box（怪异盒模型）|content-box（标准盒模型）;
	可以把标准盒模型转成了怪异盒模型，padding和border可以自动计算box-sizing: border-box;
### 五、H5标记（语义化）

```
<header>网页头部</header>
<nav>导航</nav>
<section>广告图</section>
<main>主体
<article>文章</article>
<aside>侧边栏</aside>
</main>
<footer>网页尾部区域</footer>

其他标记：
<!--主要用来写图和文字描述的-->
<figure>
<figcaption>标题</figcaption>
<img src="" >
<p></p>
<p></p>
<address>地址</address>
</figure>

<!--地址标记-->
<address>武侯区肖家河大厦沿街8848</address>	

<!--日期标记-->
<time>2021-4-7 16:04</time>		

<!--画布标记-->
<canvas>你的浏览器不支持此标记</canvas>

<!--高亮显示-->
<mark></mark>内联标记

<!--下拉菜单，搜索时带有提示功能-->
<mark></mark>内联标记
```

# 

### 一、H5标记

```
<!--高亮显示-->
<mark></mark>内联标记
```

```html
<!--下拉菜单，搜索时带有提示功能-->
<datalist></datalist>

<input type="text" list="search"/>
 <datalist id="search">
	<!-- <option value=""/> -->
	<option value ="宝马">宝马</option>
	<option value ="宝宝">宝宝</option>
	<option value ="宝贝">宝贝</option>
	<option value ="老王">老王</option>
	<option value ="老李">老李</option>
	<option value ="老陈">老陈</option>
</datalist>

```

### 二、多媒体标记

param标记 （参数）作用：用来引入flash的，路径选择 object对象标记 作用：用来引入flash的
video视频标记  src属性 可以引入视频资源
source标记（资源）作用：视频的路径选择
video标记支持的视频格式如下：
	mp4
	ogg（ogv）
	webm
video标记属性：
	src 路径
	controls 视频控件（播放、暂停、放大、快进等等功能）
	loop 循环播放
	autoplay 自动播放（谷歌浏览器把自动播放功能禁用）
	muted 静音
	poster 视频封面
	preload 预加载（注意点：和autoplay是冲突的，只能设置一个）

```html
<video src="" controls="controls" poster="" </video>
```

```html
<!--音频-->
	<audio src="" controls="controls" loop="loop" autoplay="autoplay"></audio>
<!--插件，不仅可以引入视频还可以引入音频-->
	<embed src=".mp3"></embed>
	<embed src="../资料/video/wei28.mp4">
```

### 三、智能表单

**智能表单：**
    1、HTML5给咱们提供了一些语义化的表单
    2、表单新增了验证功能
    3、注意点：表单新增的验证功能具有一定的局限性，验证功能很少在实际的开发中很多时候还是使用js进行表单验证

**思考：智能表单验证功能为什么这么少？**
    1、代码是老外制定的标准
    2、很多规则都是符合他们的思维或者行为习惯的，所以对咱们来说验证不够用		

**新增表单属性：**
			1、placeholder属性：文本框处于未输入状态时文本框中显示的输入提示。
			2、autofocus属性：给文本框、选择框、或者按钮控件加上该属性，当打开页面时，该控件自动获得国标焦点，一个页面只能有一个。
			3、required属性：验证输入不能为空。
			4、novalidate 属性规定当提交表单时不对其进行验证。给form添加。
			5、autocomplete 可以关闭当表单有那么属性时，自动提示之前输入过信息功能 off（关闭） on（开）
			6、maxlength 限定表单内容的字符长度	

```html
<form>
  <h3>智能表单</h3>
  <p><span>用户名:</span><input type="text" value="" /></p>
  <p><span>密码:</span><input type="password" value="" /></p>
  <p><span>邮箱地址:</span><input type="email" value="" /></p>
  <p><span>电话号码:</span><input type="tel" value="" /></p>
  <p><span>网络地址:</span><input type="url" value="" /></p>
<!--max 最大值 min 最小值 step 间隔-->
  <p><span>数字:</span><input type="number" value="0" min="10" step="10" max="100"/></p>
  <p><span>搜索:</span><input type="search"/></p>
  <p><span>取色器:</span><input type="color"/></p>
  <p><span>进度条:</span><input type="range"/></p>
<!--日期格式问题：2021-04-08 2021/04/08-->
  <p><span>日历:</span><input type="date" value="2021-04-08"/></p>
  <p><span>月份:</span><input type="month"/></p>
  <p><span>星期:</span><input type="week"/></p>
    
<!--
	隐藏域：用户看不见这个表单，这个表单的功能是这样，默认情况下可以控制收集网站上需要的一些信息，当用户点击提交按钮时，会把收集的信息一起发生给服务器
-->
  <p><input type="hidden"/></p>
  <p style="text-align: center;"><input type="submit" class="submit"/></p>
</form>
```

新增表单属性：

```html
新增表单属性：
<form novalidate="novalidate" autocomplete="off">
  <h3>智能表单</h3>
  <p><span>用户名:</span><input type="text" value="" name="username" autofocus="autofocus" required="required" maxlength="10"/></p>
  <p><span>密码:</span><input type="password" value="" name="userpwd" required="required"/></p>
  <p><span>邮箱地址:</span><input type="email" value="" /></p>
  <p style="text-align: center;"><input type="submit" class="submit"/></p>
</form>
```

### 四、序列选择器

大家在使用序列选择器的时候注意最好不要在最外层使用

```
:first-child第一个
:last-child最后一个
:nth-child（）选中第几个
:nth-last-child选中的是倒数第几个
:only-child选中父元素中的唯一的标记
:first-of-type选中同类型的第一个
:last-of-type选中同类型的最后一个
:nth-of-type（）选中同类型的第几个
:nth-last-of-type（）选中同类型的倒数第几个
:only-of-type指定属于父元素的特定类型的唯一子元素的每个p元素：
```

### 五、属性选择器

```css
/*通过标记属性选中*/
 input[name]{
			border: 1px solid red;
			} 
/*通过标记属性的属性值来选中*/
input[type="email"]{
			border: 1px solid red;
			}
input[type="search"]{
			border: 1px solid blue;
			}
input[type="number"]{
			border: 1px solid orange;
			} 
/*通过标记的属性的属性值开头的内容选择标记*/
a[href^="h"]{
			background-color: orange;
			} 
/*通过标记的属性的属性值结尾的内容选择标记*/
a[href$="com"]{
			background-color: red;
			} 
/*通过标记的属性的属性值的任意内容选择标记*/
a[href*="S"]{
			background-color: yellow;
			}
div[title]{
			background-color: orange;
			}
/*不推荐大家使用中文*/
div[title="我是div"]{
			background-color: pink;
			}
```

```html
<body>
<!--通过标记上面的属性可以选中元素，可以区分减少对之前class和id名称依赖-->
 <input type="email" name="" id="" value="" />
 <input type="search" id="" value="" />
 <input type="number" name="" id="" value="" />
 <a href="#">你喜欢这个网站吗？1</a>
 <a href="JavaScript:;">你喜欢这个网站吗？2</a>
 <a href="https://www.baidu.com">你喜欢这个网站吗？3</a>
 <a href="http://www.taobao.com">你喜欢这个网站吗？4</a>
 <a href="heihei">你喜欢这个网站吗？5</a>
 <div title="我是div">容器</div>
 <div title="div">容器</div>
</body>
```

### 六、UI元素状态伪类

```css
/*可以选中可用状态的标记*/
input:enabled{
			width: 200px;
			height: 50px;
			} 
/*可以选中禁用状态的标记*/
input:disabled{
			width: 200px;
			height: 50px;
			} 
/*可以选中默认选中的状态标记*/
input:checked{
			width: 200px;
			height: 50px;
			}
/*改变默认选中文本的状态，注意点：只能改变文本颜色和背景颜色*/
p::selection{
				background-color: red;
				color: #fff;
				font-size: 12px;
			}
```

```html
<body>
 <input type="tel" name="" id="" value="" />
 <input type="checkbox" name="" id="" value="" checked="checked"/>
 <input type="radio" name="" id="" value="" />
 <input type="search" name="" id="" value="" />
 <input type="checkbox" name="" id="" value="" />
 <input type="button" value="验证码倒计时60秒" disabled="disabled"/>
 <p>他自幼是天才，突然有一天变成了废柴！其中原因不可以外人道...</p>
</body>
```

### 七、否定和根选择器

```css
/*否定选择器：设置了样式只有自己没有，其他的标记有*/
input:not([type="tel"]){
			border: 1px solid red;
			}
/*根选择器*/
:root{
	 background-color: orange;
			}
```

### 八、交集选择器

```css
/*交集选择器：表示只有div类型的标记它的class为pp的标记起作用*/
div.pp{
		background-color: yellow;
		    }
/*表示当input标记获取焦点的时候改变样式*/
input:focus{
		color: red;
		font-size: 12px;
			}
```

```html
<body>
 <!--交集选择器也叫交叉选择器：限定样式起作用的范围-->
 <p class="pp">小pp同学1</p>
 <p>小pp同学2</p>
 <p class="pp">小pp同学3</p>
 <p>小pp同学4</p>
 <p>小pp同学5</p>
 <p class="pp">小pp同学6</p>
 <p>小pp同学7</p>
 <p class="pp">小pp同学8</p>
 <div>这是一个div标记</div>
 <div class="pp">这是一个div标记</div>
 <div>这是一个div标记</div>
 <input type="text" name="" id="" value="请输入用户名" />
</body>
```

### 九、层次选择器

层次选择器（层级选择器）：
			1、包含（后代）选择器
			2、子选择器
			3、相邻兄弟选择器
			4、通用兄弟选择器

```css
子选择器：
/*表示只对子元素起作用*/
.select>li{}
兄弟选择器：
/*相邻兄弟选择器，只能选中离我最近的兄弟元素，注意点：不能被其他标记隔开*/
 div+p{
		background-color: red;
			} 
/*通用兄弟选择器，只要你是我的兄弟元素都可以选中，也可以被其他的标记隔开*/
div~p{
		background-color: greenyellow;
			}
```

```html
<body>
 <!-- <p>我也是你兄弟</p> -->
 <div>你不努力不是我兄弟！</div>
 <h1>老大哥</h1>
 <p>鲁迅先生说，我加门前有两棵树，一颗是枣树，另一颗也是枣树！</p>
 <p>鲁迅先生说，我加门前有两棵树，一颗是枣树，另一颗也是枣树！</p>
 <p>鲁迅先生说，我加门前有两棵树，一颗是枣树，另一颗也是枣树！</p>
</body>
```

### 十、浏览器私有前缀

​    例如：border-radius这个圆角属性一开始出来时还没有成为标准，各个浏览器它的支持性不好。在有些浏览器里面可以识别，有些识别不了。为了解决兼容问题，所以各个浏览器提出了解决方案，设置私有前缀，设置了私有前缀后咱们的浏览器就可以正常识别它
私有前缀：
​			-webkit- 谷歌
​			-moz- 火狐
​			-ms- IE
​			-o- 欧朋

### 十一、文字阴影

```css
值1表示阴影水平位置 ；值2表示阴影垂直位置 ；值3表示阴影模糊程度 ；值4表示阴影颜色
text-shadow: 5px 5px 5px hotpink, 10px 10px 5px skyblue;
```

### 十二、盒子阴影

```css
/*值1表示阴影水平位置 值2表示阴影垂直位置 值3表示阴影模糊程度 值4表示阴影颜色*/
 box-shadow: 0px 2px 13px black; 
/*过渡属性*/
/*那个需要过渡效果*/
transition-property: box-shadow, margin-top, background-color; 
transition-property: all; 
/*过渡时间*/
 transition-duration: .5s; 
/*过渡缩写形式*/
transition: all .5s; 
/*inset表示内阴影*/
box-shadow: 0px 2px 13px black inset;
```

# 

## flexbox

### 一、初始弹性盒布局

**弹性盒布局：**
		1、名称：弹性盒布局、伸缩布局盒模型、flexbox
		2、弹性盒是css3给咱们提供的一种新的布局方式
		3、作用：可以让咱们使用它提供的一些属性可以快速进行布局，主要思想是让容器去控制子元素

**怎么定义一个弹性盒布局：**
		1、使用display属性给咱们提供的值flex。display:flex;
		2、display:flex;属性设置在容器里面的

**弹性盒的规则：**
	1、当咱们把容器转成弹性盒布局模式后，默认情况下子元素是横向排列的
	2、弹性盒布局模式把父元素称之为容器（container），把子元素称之为项目（子项目item）
	3、弹性盒里面有个轴的概念：之前把元素的方向称之为横向排列和纵向排列，在弹性盒里面把横向排列叫做主轴方向，把纵向排列叫做侧轴方向
	4、弹性盒把容器进行改变，把容器的**左上**位置称之为主轴的起始点，**右上**位置称之为主轴的结束位置。把容器**左上**位置也叫做侧轴的起始点，把**左下**位置叫做侧轴的结束位置
	5、可以通过容器控制项目在侧轴或者主轴的位置		

### 二、flex-direction

1、伸缩流方向 flex-direction 主要用来创建主轴，定义伸缩项目在伸缩容器中的方向

2、当咱们把容器转成弹性盒布局模式后，子项目默认的方向是横向（主轴）排列的，但是在实际开发中并不是所有的情况下，项目都需要横向排列，这个时候就需要改变它的方向

3、标准流中块级元素默认是自上而下排列的，如果不把容器转成弹性盒，弹性盒里面好用的属性就没有办法使用

值：

1）flex-direction：row；从左向右，默认值

2）flex-direction：row-reverse；与row相反，效果和float:right;是一样的

3）flex-direction：column；从上到下

4）flex-direction：column-reverse；与column相反

### 三、主轴对齐justify-content

1、主轴对齐 justify-content 主要用来定义伸缩项目沿主轴线的对齐方式

2、使用这个属性可以控制子元素在水平位置，例如：左边、右边、中间、均分等等

值：

1）justify-content: flex-start；伸缩项目向一行的起始位置靠齐，默认值			

2）justify-content:flex-end；伸缩项目向一行的结束位置靠齐，会直接把子元素平移过去不会改变元素的顺序关系

3）justify-content:center；伸缩项目向一行的中间位置靠齐

4）justify-content:space-between；伸缩项目会平均的分布在行里

5）justify-content:space-around；伸缩项目会平均的分布在行里，两端保留一半的空间

6）justify-content:space-evenly；项目均匀分布，所有项目之间及项目与边框之间距离相等

### 四、侧轴对齐align-items

1、侧轴对齐 align-items 伸缩项目行在侧轴上的对齐方式

值：

1）align-items:flex-start；伸缩项目在侧轴起点边的外边距 紧靠住 该行在侧轴起始边

2）align-items:flex-end；伸缩项目在侧轴终点边的外边距 紧靠住 该行在侧轴终点边

3）align-items:center；伸缩项目的外边距盒 在该行的侧轴上居中放置

4）align-items:baseline；伸缩项目根据伸缩项目的基线对齐。

5）align-items:stretch；伸缩项目拉伸填充整个伸缩容器。当容器变成弹性盒布局模式后，当子元素没有设置高度的时候会自动拉伸高度，这是默认行为

### 五、flex

1、flex（设置在子元素上） 作用：可以让元素自动占用容器的可用空间，等比划分

应用：

1、三列布局：容器里面的两边的区域宽度是固定的，中间内容是自适应的

2、当容器转成弹性盒布局模式后，如果容器的宽度不够的情况默认会把子元素进行压缩，为了防止内容溢出

### 六、换行flex-wrap

1、当容器转成弹性盒布局模式后，当容器大小不够的情况下，子元素会默认进行自动压缩，为了防止内容溢出

值：

1）flex-wrap: nowrap; 不换行 默认值，不管超出还是不超出都不会换行

2）flex-wrap:wrap; 换行 一旦伸缩项目超出伸缩容器，那么就会换行(当容器设置高度时，子元素换行后，行与行之间有默认行距)

3）flex-wrap:wrap-reverse ;换行反向  主轴水平时(flex-direction: row;)，上下反向;主轴垂直时(flex-direction: column;)，左右反向

### 七、flex-flow

1、伸缩流方向属性与换行属性缩写形式 flex-flow

值：

flex-flow：换行 伸缩方向;  两个值同时定义或者单独定义都生效，不分先后顺序

如：flex-flow: column wrap;

### 八、align-self（加在子元素上）

1、主要用来设置单独伸缩项目在**侧轴**的对齐方式。注意点：align-self可以覆盖align-items

值：

1）align-self：flex-start；伸缩项目在**侧轴**起点边的外边距 紧靠住 该行在侧轴起始边；（元素位于容器的开头）

2）align-self：flex-end；伸缩项目在**侧轴**终点边的外边距 紧靠住 该行在侧轴终点边；（元素位于容器的结尾）

3）align-self：center；伸缩项目的外边距盒 在该行的**侧轴**上居中放置；（元素位于容器的中间）

4）align-self：stretch；伸缩项目拉伸填充整个伸缩容器。（元素被拉伸以适应容器）

### 九、堆栈伸缩行 align-content

1、堆栈伸缩行 align-content(行与行之间的对齐方式) 定义多个伸缩行的对齐方式；往往要与换行同时应用，没有换行就不存在多行的情况

值：

1）align-content：flex-start；各行向伸缩容器的起点位置堆叠；（没有行距）

2）align-content：flex-end；各行向伸缩容器的结束位置堆叠；（底部对其没有行距）

3）align-content：center；各行向伸缩容器的中间位置堆叠；（居中没有行距）

4）align-content：space-between；各行在伸缩容器中平均分布；（两端对齐，中间自动分配）

5）align-content：space-around；各行在伸缩容器中平均分布，两端保留一半的空间；（自动分配距离）

### 十、显示顺序 order

1、显示顺序 order （加在子元素上）默认状态是按照标准流的顺序排列，在<span>flexbox</span>模型里，可以通过order改变伸缩项目的顺序

1）不定义order的伸缩项目会排到前面  2）order：1； 排第一   order：2； 排第二

2、order最大的作用是不改变html代码盒子的顺序，可以通过css改变

### 十一、三列布局

三列布局：容器里面的两边的区域宽度是固定的，中间内容是自适应的
三列布局延伸应用：
		1、之前有一种布局方式叫做圣杯布局或者双飞翼布局
		2、需求：容器里面的两边的区域宽度是固定的，中间内容是自适应的，要求中间的内容区域在代码里面优先解析，
			并位置在实际的效果中又不变

```html
<div class="box">
<!--优先解析，无论其他的地方有没有加载出来，这块区域可以保证优先加载-->
	<div class="center">容器的</div>
	<div class="left">左边区域</div>
	<div class="right">右边区域</div>
</div>
```

```css
.box{
     width: 100%;
	 height: 200px;
	 background-color: greenyellow;
/*当容器转成弹性盒布局模式后，如果容器的宽度不够的情况默认会把子元素进行压缩，为了防止内容溢出*/
	 display: flex;
			}
.box .left{
	 width: 200px;
	 height: 200px;
	 background-color: yellow;
	 order: 1;
			}
 .box .center{
	 background-color: orange;
	 flex: 1;
	 order: 2;
			}
.box .right{
	width: 300px;
	height: 200px;
	 background-color: hotpink;
	 order: 3;
			}
```

### 十二、flex-grow

1、flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

2、如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

### 十三、flex-shrink

1、flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

2、如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

### 十四、flex-basis

1、flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）

2、浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。不常用，还在不断变化中。

### 十五、flex

1、flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

# 

### 一、rem

rem单位：
			1、相当于根元素字体大小的单位，简单理解，rem会根据html的字体大小进行动态的改变
			2、rem是css3给咱们新增的单位，主要用于移动端布局
			3、rem刚出来时很多大的公司在使用，例如：淘宝、京东、网易等等

	rem单位适配方案：
	1、使用js动态的改变rem的大小，js会根据屏幕的大小改变rem大小
	rem使用：
	<!--使用script标记引入js文件即可 src属性：路径-->
	<script src="js/rem.js"></script>
### 二、移动端布局

可视区域（手机模拟器的屏幕大小）和网页布局区域对不上，把网页布局区域强行缩放了，所以导致内容压缩文本不清晰
可以让布局达到一个理想的区域（状态），这句代码可以让布局区域等比例缩放，可以禁止用户缩放页面

### 三、vm和vh介绍

vw和vh单位介绍：
			1、vw 视窗宽度：默认把屏幕宽度划分了100vw
			2、vh 视窗高度：默认把屏幕高度划分了100vh
			3、特点：可以动态改变，不需要参照物，直接根据屏幕进行变化

	设计稿宽度是750px，对于vw来说默认是100vw = 750px 
	1px = 0.1333333vw
	
	元素所展示的大小（设计图固定大小）=（vw*设计稿宽度）/100
	Vw = 元素所展示的大小（设计图固定大小）*100/设计稿宽度

### 四、vm适配rem

vw适配rem单位：
			1、假如设计稿宽度是750px，以vw划分100vw
			2、100vw = 750px，1px = 0.1333333vw
			3、使用js动态改变rem时，html{font-size:100px;}
			4、100px等于多少vw呢？100 * 0.133333 = 13.3333vw；

# 

### 一、媒体查询

1、媒体查询介绍:

媒体查询可以让我们根据设备显示器的特性（如视口宽度、屏幕比例、设备方向：横向或纵向）为其设定CSS样式，媒体查询由媒体类型和一个或多个检测媒体特性的条件表达式组成。媒体查询中可用于检测的媒体特性有 width 、 height 和 color （等）。使用媒体查询，可以在不改变页面内容的情况下，为特定的一些输出设备定制显示效果。

2、媒体查询操作方式：

实际操作为：对设备提出询问（称作表达式）开始，如果表达式结果为真(符合当前条件)，媒体查询中的CSS被应用，如果表达式结果为假(不符合)，媒体查询内的CSS将被忽略。

### 二、媒体查询示例

1、语法：

```css
/*表示设备宽度小于320px时就不执行蓝色背景了。*/
@media all and (min-width:320px) { 
	div{ background-color:blue;}
}  

/*表示设宽度到640px------300px之间显示桔色背景。*/
@media only screen and (min-width: 300px) and (max-width: 640px) {
    div{
    	background-color: orange;
    }
}      

/* 竖屏 */
@media screen and (orientation:portrait) {对应样式}

/* 横屏 */
@media screen and (orientation:landscape){对应样式}

```

2、媒体类型:

<img src="F:\html5notes\week4\day16\day16\资料\img\1.png" width="1000"/>

3、名词解释：

- screen 是媒体类型里的一种，CSS2.1定义了10种媒体类型
- and 被称为关键字，其他关键字还包括 not(排除某种设备)，only(限定某种设备)
- (min-width: 400px) 就是媒体特性，其被放置在一对圆括号中

4、断点介绍：

无论基于那种模式的设计，要兼容所有设备，布局响应时不可避免地需要对模块布局做一些变化（发生布局改变的临界点称之为断点）

<img src="F:\html5notes\week4\day16\day16\资料\img\2.png" width="800"/>

5、css2媒体查询语法:

```css
其实并不是只有CSS3才支持Media的用法，早在CSS2开始就已经支持Media，具体用法，就是在HTML页面的head标签中插入如下的一段代码

<link rel="stylesheet" type="text/css" media="screen" href="style.css">;

想知道现在的移动设备是不是纵向放置的显示屏，可以这样写：

<link rel=“stylesheet” type=“text/css” media=“screen and  (orientation:portrait)”  	href="style.css">

第一段的代码也用CSS2来实现，让它一样可以在页面宽度小于960的执行指定的样式文件：

<link rel="stylesheet" type="text/css" media="screen and (max-width:960px)" href="style.css">

```

### 三、常见的布局方案

1. 固定布局：以像素作为页面的基本单位，不管设备屏幕及浏览器宽度，只设计一套尺寸；
2. 可切换的固定布局：同样以像素作为页面单位，参考主流设备尺寸，设计几套不同宽度的布局。通过识别的屏幕尺寸或浏览器宽度，选择最合适的那套宽度布局；
3. 弹性布局：以百分比作为页面的基本单位，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；
4. 混合布局：同弹性布局类似，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；只是混合像素、和百分比两种单位作为页面单位。
5. 布局响应：对页面进行响应式的设计实现，需要对相同内容进行不同宽度的布局设计，有两种方式：pc优先（从pc端开始向下设计）；移动优先（从移动端向上设计）；

### 四、响应式布局方案

1、基于媒体查询实现

<img src="F:\html5notes\week4\day16\day16\资料\img\9.png" width="800"/>



<img src="F:\html5notes\week4\day16\day16\资料\img\4.png" width="800"/>

<img src="F:\html5notes\week4\day16\day16\资料\img\5.png" width="800"/>

<img src="F:\html5notes\week4\day16\day16\资料\img\6.png" width="800"/>

<img src="F:\html5notes\week4\day16\day16\资料\img\7.png" width="800"/>



<img src="F:\html5notes\week4\day16\day16\资料\img\8.png" width="800"/>

2、响应式布局特点

​	  设计特点：

​              a、面对不同分辨率设备灵活性强 

​              b、能够快捷解决多设备显示适应问题

​	  缺点：

​             a、兼容各种设备工作量大，效率低下

​             b、代码累赘，会出现隐藏无用的元素，加载时间加长

​            c、其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果一定程度上改变了网站原有的布局结构，会出现用户混淆的情况



### 五、Meta标签的设置

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

这段代码的几个参数解释：

width = device-width：宽度等于当前设备的宽度

initial-scale： 初始的缩放比例（默认设置为1.0）

minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）

maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）

user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）

```

### 六、线型渐变

线性渐变：从一个方向到另一个方向的颜色值渐变

```
1、
/*值1表示方向，值2表示颜色值*/
background-image: linear-gradient(red, yellow);
2、
/*默认的方向就是从上往下*/
background-image: linear-gradient(to bottom, red, green);
3、
/*deg单位表示度数*/
background-image: linear-gradient(320deg, hotpink, green);
4、
/*值1表示方向或者角度 值2后面都是颜色值 注意点：可以在颜色值后面指定渐变的起始位置*/
background-image: linear-gradient(to right, red 0%, yellow 20%, green);
5、
/*重复性线性渐变*/
background-image: repeating-linear-gradient(-30deg, black 0%, black 5%, white 5%, white 10%);
```

### 	七、径向渐变

径向渐变：从圆心向四周进行颜色扩散（渐变）

```
1、
/*注意点：如果形状是矩形的，默认就是椭圆，就需要使用关键字circle来改变形状*/
width: 400px;
background-image: radial-gradient(circle, red, yellow, green);
2、
/*注意点：如果形状是正方形，默认就是圆，即使使用关键字ellipse也不会起作用*/
background-image: radial-gradient(ellipse, red, yellow, green);
```

### 八、过度属性

```
/*哪些属性需要过渡效果*/
/* transition-property: all; */
/*过渡属性*/
/* transition-duration: 1s; */
/*延迟时间*/
/* transition-delay: 3s; */
/*过渡动画类型*/
/* transition-timing-function: ease-in; */
/*简写形式*/
transition: all 1s ease-in;
```

### 九、2D属性

变形属性可以让咱们对元素进行位移、缩放、旋转操作
位移：元素的位置进行移动
      X轴：水平位置
      Y轴：垂直位置
	   Z轴：前后位置
注意点：transform属性相互之间会进行覆盖，后面的会覆盖前面的 

2D属性：平面空间、二维空间
3D属性：立体空间、三维空间		

	沿着X轴进行旋转操作
	位移：元素的位置进行移动
		X轴：水平位置
		Y轴：垂直位置
		Z轴：前后位置
	旋转：
		X轴：上下
		Y轴：左右
		Z轴：顺时针或者逆时针（绕圈圈）
透视（景深）属性：近大远小
perspective: 500px;

缩放：放大或者缩小
		scale取值：
			**1**表示不缩放（默认值），不能为0
			**大于1**表示放大
			**小于1**表示缩小
注意点：如果值是一样的，可以写一个。两个值的时候表示水平和垂直
				transform: scaleX(2);
				transform: scaleY(2); 

​                 transform: scale(.5, 2);

# 

### 一、变形原点属性transform-origin

变形原点 transform-origin 
属性值：left、right、center、top、bottom、百分比、像素
两个值的时候：值1表示水平 值2表示垂直

### 二、倾斜（斜切）属性

transform: skewY(-17deg);

### 三、元素垂直居中

可以为负值的属性有哪些：
	margin
	background-position
	position
	z-index
	text-indent
	letter-spacing
	transform:translate;

### 四、立方体

把2D空间转成3D空间
  transform-style: preserve-3d;

### 五、3D属性

1)什么是<span>3d</span>的场景呢？

<span>2d</span>场景，在屏幕上水平和垂直的交叉线x轴和y轴

<span>3d</span>场景，在垂直于屏幕的方法，相对于<span>2d</span>多出个z轴

Z轴：靠近屏幕的方向是正向，远离屏幕的方向是反向

下图为<span>3d</span>场景坐标图

<img src="F:\html5notes\week4\day18\day18\资料\img\3d.png"/>

2)transform-style属性

```css
ransform-style属性是3D空间一个重要属性，指定嵌套元素如何在3D空间中呈现。他主要有两个属性值：flat和preserve-3d
```

3) translate3d位移属性

```css
3D位移

CSS3中的3D位移主要包括:

translateZ()

translate3d(值1，值2，值3)两个功能函数；

值1：代表横向坐标位移向量的长度；

值2：代表纵向坐标位移向量的长度；

值3：代表Z轴位移向量的长度。此值不能是一个百分比值，如果取值为百分比值，将会认为无效值。
```

4)rotate3d旋转属性

```css
3D旋转

CSS3中的3D旋转主要包括:

rotateX()

rotateY()

rotateZ()

rotate3d(1,1,0,4deg)四个功能函数；

4个参数，前三个，对应x,y,z 轴，是标示你是否希望沿着该轴旋转，是为1，不是为0，最后一个标示旋转的角度。

```

5)scaleZ缩放属性:

```css
CSS3中的3D缩放主要包括:

scaleZ()；
```

6)景深属性：

```css
生活中的3d 区别于2d的地方

近大远小 景深 

程序中实现的方法 perspective 元素距离 视线的距离（物体和眼睛的距离越小，近大远小的效果越明显）

perspective: 1200px;(加在父元素上)

transform:perspective(1200px) （在子元素中使用）

注意点：

a、两个都设置会发生冲突，建议只设置父元素，通常的数值在900-1200之间

2、如果当你的视线距离物体足够远的时候，基本上就不会有近大远小的感觉

```



### 六、动画属性animation

```
1、动画名称
animation-name: ;
2、动画时间
animation-duration: 3s;
3、动画类型
animation-timing-function: linear;
4、动画执行次数
animation-iteration-count: infinite;
5、动画执行方向
animation-direction: reverse;
6、动画延迟时间
animation-delay: 3s;
7、暂停动画
ul:hover{
	animation-play-state: paused;
}
```

动画执行三要素：

```css
1.告诉系统需要执行那个动画 animation-name:动画名

2.告诉系统我们需要创建一个名称叫什么的动画
@keyframes mymove{
     from{初始状态属性}
     to{结束状态属性}
}

@keyframes mymove{
     0%{初始状态属性}
     100%{结束状态属性}
}（中间再可以添加关键帧）

3.告诉系统动画持续的时长
animation-duration:3s;
```

animation属性和语法：

```css
1.animation-name  检索或设置对象所应用的动画名称
说明：必须与规则@keyframes配合使用，
@keyframes mymove{}  animation-name:mymove;

2.animation-duration  检索或设置对象动画的持续时间
说明：animation-duration:3s;    动画完成使用的时间为3s

3.animation-timing-function  检索或设置对象动画的过渡类型
说明：
linear：线性过渡

ease：平滑过渡

ease-in：由慢到快

ease-out：由快到慢

ease-in-out：由慢到快再到慢

step-start:马上跳到动画每一结束桢的状态

4.animation-delay  检索或设置对象动画延迟的时间
说明：animation-delay:0.5s; 动画开始前延迟的时间为0.5s

5.animation-iteration-count  检索或设置对象动画的循环次数
说明：
animation-iteration-count: infinite | number;

infinite：无限循环

number: 循环的次数

6.animation-direction  检索或设置对象动画在循环中是否反向运动
说明：
normal：正常方向

reverse：反方向运行

alternate：动画先正常运行再反方向运行，并持续交替运行

alternate-reverse：动画先反运行再正方向运行，并持续交替运行

7.animation-play-state  检索或设置对象动画的状态
说明：
animation-play-state:running | paused;

running:运动

paused: 暂停

8、animation-play-state:paused; 当鼠标经过时动画停止，鼠标移开动画继续执行

```

**animation和transition的区别：**

相同点：都是随着时间改变元素的属性值。

不同点：
transition需要触发一个事件(hover事件或click事件等)才会随时间改变其css属性；

而animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果，css3的animation就需要明确的动画属性值。

**animation缩写形式：**

<img src="F:\html5notes\week4\day18\day18\资料\img\s.png"/>

### 七、translate3d

1、值1表示水平位置 值2表示的是垂直位置 值3表示的是前后位置
transform: translate3d(100px, 100px, 100px);

### 八、rotate3d

1、前面三个值都是1或者0，第四个值表示是否沿着该轴进行旋转操作
transform: rotate3d(1, 1, 1, 45deg);

### 九、大小写转换属性text-transform

```
1、首字母大写
text-transform: capitalize;
2、把大写转成小写字母
text-transform: lowercase;
3、把小写转成大写
text-transform: uppercase;
4、默认。定义带有小写字母和大写字母的标准的文本。
text-transform: none;
5、规定应该从父元素继承 text-transform 属性的值。
text-transform: inherit;
```

### 十、font-variant

1、把文本设置为小型大写字母字体

值：

1、normal	默认值。浏览器会显示一个标准的字体。

2、small-caps	浏览器会显示小型大写字母的字体。

### 十一、粘性定位

1、position: sticky; 粘性定位

2、粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

使用：吸顶效果

```css
position: sticky;
top: 0;
```

### 十二、多列布局

介绍：css3多列布局可以自动将内容按指定的列数排列，这种特性实现的效果和报纸、杂志类排版非常相似。

核心属性：

```css
columns：column-width 列宽   
column-count 列数

column-width：定义每列列宽； 类似于最小宽度min-width； auto 自适应；

column-count：定义分列列数；最多列数，auto自适应（由列宽、容器宽和列间距决定），也可固定

column-gap：定义列间距； 不能为负数；

column-rule：定义列边框；与定义边框一样：2px dashed #ccc;

column-span：定义多列布局中子元素的跨列效果；通常用于标题；

	none：不跨列；

	all：跨所有列
```

### 十三、背景属性

```
1、像素、百分比
background-size:50% 50%;
2、表示默认会把背景铺满整个容器，背景图的某些部分会显示不完整，拉伸
background-size: cover;
3、表示默认会把背景进行等比拉伸，可以保证图片完整性
background-size: contain;
4、表示背景区域，可以通过这个属性指定背景图的位置

background-origin: border-box;
5、默认值
background-origin: padding-box;
6、以内容区域进行显示
background-origin: content-box;

7、默认值，从边框区域开始裁剪
background-clip: border-box;
8、从padding区域开始裁剪
background-clip: padding-box;
9、从content区域开始裁剪，之前去掉了
background-clip: content-box;

10、多重背景属性，注意点：前面的会把后面的给覆盖掉。开发中不建议使用
background: url(img/dog.jpg) no-repeat center center, url(img/2.jpg) no-repeat center center;
```

### 十四、关于正式开发相关流程

taobao_project项目
			项目目录结构：
			1、src目录 指的是源文件（代码）目录 --- 开发时使用的目录
			   css
			   fonts
			   js
			   html
			   libs  引入外部使用的一些文件
			   images
			   sass css代码预处理语言，可以动态改变css
			2、dist目录 指的是项目上线之前压缩代码的目录，使用前端自动化构建工具可以通过代码帮助咱们自动打包 gulp
			   css
			   fonts
			   js
			   html
			   libs  引入外部使用的一些文件
			   images
			   sass css代码预处理语言，可以动态改变css

	网页中图片优化方式
	  1、css sprite
	  2、字体图标、svg格式
	  3、base64格式 --- 会把常用的一些小的图片转成编码格式进行使用
	  4、在使用图片标记的时候，尽量给设置title和alt属性，因为搜索引擎无法识别图片上面的文字
	  5、建议尽量不要在网页中使用flash，因为搜索引擎无法识别图片上面的文字
	  6、webp图像格式，浏览器支持性好，可以使用程序友好的控制好


​	
​	页面头部优化（meta---元信息，作用：做网页配置信息）
​	  <meta name="keywords"   content="" />向搜索引擎说明你的网页的关键词
​	  <meta name="description"    content=""/>告诉搜索引擎你的站点的主要内容


​	
​	logo区域优化：
​	  1、H1标签的使用，
​	  2、一个页面设置一个H1标签，有助于搜索引擎明白网站架构，因为H1标签的搜索权重比其他标签高，一般用于logo区域。


​		
​	超链接优化：
​	  1、在使用a标记的时候，建议设置title属性
​	  2、原因：其实咱们访问网站就是通过链接，链接有一个良好的“通道”有利于咱们访问网站
​		
​	命名规则化：建议使用英文，名称见名知意，不要使用拼音
​	使用公共代码 base.css公共样式文件
# 

### 一、内联框架标记，框架集

```html
<iframe src="http://www.baidu.com" width="600" height="500" scrolling="auto"></iframe>
```

### 二、BFC

FC表示的是格式上下文：
			1、格式上下文指的是网页布局规则，上下文理解为一个代码执行环境
			2、FC理解为代码执行环境，在这个环境里面要执行代码要遵循一些相应的规则，例如：生活中，不同的国家
			有不同的法律法规，本质上都是一个社会环境，都是人生存的产物

	css代码执行环境（规则）：
	1、标准流：正常网页排版顺序，块级元素、内联元素、内联块元素
	2、浮动流：文本环绕现象、可以让块级元素横向排列，还可以让元素脱离文档流
	3、定位流：脱离文档流、元素会进行叠加、包含块、不会随着滚动条滚动而滚动、层级关系
			
	BFC块级格式上下文：
	1、BFC也是css一个规则，内部的元素不会影响外部的元素，这种规则是一个独立的容器
	2、BFC也是对css常用的规则的总结
	3、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。它规定了元素与其他元素的关系和相互作用。


# 

### 1、web标准，html（结构）、css（表现）、js（行为）

### 2、w3c、ECMA、WHATWG知道它们是什么

```
w3c：万维网联盟，制定了结构和表现的标准
ECMA：欧洲电脑场商联合会，制定了js的标准
WHATWG：网页超文本应用技术工作小组，推动网络H5标准为目的而成立的组织。
```

### 3、alt和title的区别

```
alt：提示信息，当图片因为某种特殊原因（路径错误、网速慢、被和谐）而不能正常加载时给用户的提示
title：图片标题，当鼠标悬停到图片上面时显示标题
```

### 4、target属性的作用

```
指链接的页面以什么形式展现出来
_blank表示在新窗口打开
_self默认值，表示在当前窗口打开
```

### 5、相对路径

```
1）当当前文件与目标文件在同一目录下时，直接写目标文件名+扩展名
2）当当前文件与目标文件的文件夹在同一目录下时，先写目标文件文件夹名，再写目标文件名+扩展名
3）当当前文件的文件夹与目标文件的文件夹在同一目录下时，先写../再写目标文件名最后写目标文件名+扩展名
```

### 6、禁用和默认选中属性

```
禁用：disabled
默认选中：checked
```

### 7、get和post的区别

```
1）get是从浏览器获取数据，post是向浏览器传输数据
2）get数据能在地址栏看见，post在地址栏看不到，因为post是通过http机制加密的
3）get执行速度比post快
4）get传输数据量比较小，一般不能大于2kb，而post理论上是没有限制的
5）get不安全，post更安全
```

### 8、colspan、rowspan

```
colspan：合并列
rowspan：合并行
```

### 9、css层叠性是什么

```
一个元素可以同时被多个css选择器选中，每个人选择器都有一些css规则，这就是层叠。这些规则中有些是没有冲突可以同时其作用的，然而有些规则是相互冲突的，当发生冲突的时候就需要选出一条最高特殊性的规则来应用，以优先级高的权重为标准。
```

### 10、css优先级、css权重

```
css优先级：内联样式表优先级最高，内部样式表和外部样式表的优先级与书写顺序有关，后面的会把前面的覆盖掉
css权重：权重是css默认给每个选择器自带的一种特性，当样式发生冲突时，以权重高的覆盖权重低的，权重会遵循就近原则，权重覆盖的是相同的属性，权重一般是四位数表示，标签选择器：0001；class选择器：0010；id选择器：0100；内联选择器1000
```

### 11、内联样式表、外部样式表、内部样式表语法、type、rel属性的作用

```
内联样式表：
<p style="width:100px;height:100px;">内联样式表</p>
外部样式表：
<link rel="stylesheet" type="text/css" href="路径"/>
内部样式表：
<style>
div{
width:100px;
height:100px;
background-color:pink;
}
</style>
type:定义文档类型
rel：关联样式表，把html文件和css文件建立连接
```

### 12、link和import的区别

```
1）本质区别，link属于html标记，import是css提供的一种方式
2）加载顺序，link可以让html和css同时加载，import先加载结构后加载样式，网速较慢时会看到明显是闪烁现象
3）兼容问题，link没有兼容问题，import对老的版本的浏览器不支持
4）控制Dom，link可以被dom操作，import不能被操作
```

### 13、px、pt、em、rem、vw区别

```
px：像素，像素px是相对于显示器屏幕分辨率而言的
pt：点，其实更精确的翻译是磅，印刷行业常用单位，pt是固定不变的，9pt = 12px
em：em是一个相对于容器字体大小的单位，最大好处是会随着字体大小改变，2em == 32px
rem：是css3新增的一个相对单位，与em的区别在于，它是相对于html根元素的(在body标签里面设置字体大小不起作用)；
vm：视窗宽度，默认把屏幕宽度划分了100vw
```

### 14、边框的样式 solid、dashed、dotted、double

### 15、背景图显示规则

```
1）当背景图大于容器大小时，图片部分显示不完整
2）当背景图小于容器大小时，图片默认平铺
3）当背景图等于容器大小时，图片刚好完全显示
```

### 16、盒模型概念、盒模型组成

```
1）盒模型概念：css规定将所有html元素都看成一个盒子，在css中，盒模型是用来设计和布局时使用的，盒模型的本质是一个盒子，它的作用是封装周围的html元素的
2）盒模型组成：border（边框）、margin（外边距）、padding（内边距）、content（内容、width和height）
```

### 17、标准盒模型和怪异盒模型的区别、触发怪异盒模型

```
区别：
标准盒模型宽度=左右margin+左右padding+左右border+content（width）
怪异盒模型宽度=左右margin+content（width包含了padding和border，可以方便计算）
触发怪异盒模型：box-sizing：border-box
```

### 18、实现省略号

```
1）必须设置宽度width：100px；
2）必须强制不换行white-space：nowrap；
3）设置溢出隐藏：overflow：hidden；
4）text-overflow：ellipsis
html：
<div>实现省略号实现省略号实现省略号实现省略号实现省略号实现省略号实现省略号实现省略号实现省略号实现省略号</div>
css：
div{
width：100px；
height:40px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
}
```

### 19、元素类型分别有哪些：block、inline-block、inline

### 20、块级、内联、内联块元素有哪些？

```
块级元素：独占一行自上而下排列，可以设置宽和高，一般作为其他元素的容器使用h1~h6、div、p、ul、ol、li、form、table、hr
内联元素：横向排列，不可以设置宽和高span、a、em、i、u、b
内联块元素：横向排列，可以设置宽和高img、input、td
```

### 21、元素垂直居中方法

```
1）line-hight当行高等于容器高度时，可以实现文本垂直居中
2）transform：translate(-50%, -50%);
设置
position：absolute；
top：50%；
left：50%；
transform：translate(-50%, -50%);
3）设置
position：absolute；
top：0；
bottom：0；
left：0；
right：0；
margin：auto；
4)body{display:flex;align-items:center;}
```

### 22、定位的属性值有哪些

```
static静态定位
relative相对定位
absolute绝对定位
fixed固定定位

sticky粘性定位
```

### 23、定位的层叠属性、包含块

```
1）定位的层叠性：给所有的元素设置了绝对定位后，元素相互之间会进行层叠，默认最后一个定位的会排列在最上面。在实际的开发中层级会遇到冲突，可以使用z-index属性来解决
***2）包含块：包含快是绝对定位的基础，包含块就是为绝对定位元素提供坐标，偏移和显示内容的参照物
定义元素为包含块，给绝对定位的父级元素添加position：relative
```

### 24、透明属性兼容写法

```
filter：alpha（opacity=value）value为1-100
```

### 25、min-height、max-height、min-width、max-width

```
max-width：最大宽度，容器有一个最大宽度，如果宽度小于最大宽度，内容区域会自适应
min-width：最小宽度，元素一开始是自适应的，当宽度小于最小宽度，内容区域不会自适应
max-height；最大高度，一开始元素的高度是自适应的，当内容超出最大高度时会溢出
min-height：最小高度，元素一开始有一个固定高度，随着内容的增加会自适应
```

### 26、!important最高权重

### 27、伪对象选择器

```
p::first-letter给段落里面的第一个字设置样式
p::first-line给段落里面第一行设置样式
div::after给容器内容后面添加一个元素
div::before前面添加
```

### 28、浏览器五大内核分别代表作

```
1）Trident:代表作品是IE
2）Gecko：代表作品是Firefox
3）Webkit：代表作品是Safari、曾经的Chrome
4）Presto：表作品是Opera
5）Blink：由Google和Opera Software开发的浏览器排版引擎
```

### 29、为什么会出现兼容问题

```
1）由于各大浏览器厂家不同
2）各厂家所用的核心架构和代码不同
3）各厂家出于自身利益考虑而设置的种种技术壁垒
```

### 30、常见的兼容问题有哪些

```
1）margin-top问题，使用overflow：hidden；
2）图片蓝色边框：设置border：none；
3）cursor：hand；改为cursor：pointer
4）透明属性：filter：alpha（opacity=value）
5）最小高度min-height，
设置
min-height：100px；
_height:100px;
6）表单元素问题，元素与元素之间无法对顶部对齐，设置float：left；
7）图片间隙问题，设置高度，或者设置float，或者把图片转为块级元素，或者设置vertical-align：top；
8）不同浏览器中按钮样式不同，将button改为用a
9）IE块级元素问题，设置1px像素会有实际像素，设置overflow：hidden；
10）表单元素内容在低版本的浏览器中没有居中，设置行高line-height
```

### 31、兼容的解决方案：hack、filter

### 32、表单新增标记fieldset、lenged、label、file、image

### 33、常用的表格css属性

```
1）border-spacing：；表示单元格与单元格之间的间隙
2）border-collapse：collapse；合并单元格的边框
3）table-layout：fixed；表格固定
4）empty-cells：hide；单元格无内容时隐藏
```

### 34、行分组和列分组

```
行分组：
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>
列分组：colgroup，表格列分组 span属性 作用：用于把表格划分不同的区域
<colgroup span="2" style="background-color: red;"></colgroup>
```

### 35、常见的HTML5标记

```
<header></header>
<nav></nav>
<main>
<aside></aside>
<article></article>
</main>
<footer></footer>
<section></section>
<figure>
<figcaption></figcaption>
</figure>
<time></time>
<address></address>
<canvas></canvas>
<mark></mark>
<datalist></datalist>
```

### 36、智能表单、智能表单的属性

```
智能表单：有验证功能
属性：
新增表单属性：
1）placeholder属性：文本框为输入时的提示信息
2）require属性：内容不能为空
3）autofocus获取国际焦点，一个页面只能有一个
4）novalidate提交时不验证
5）autocomplete，关闭或打开自动提示
6）maxlength限定表单内容的字符长度
input表单的type新属性：
type="email"
type="url"
type="number"
type="date"
type="month"
type="week"
type="range"
type="search"
type="color"
```

### 37、css3新增的选择器

```
序列选择器、属性选择器、UI伪状态选择器、否定选择器、根选择器、交集选择器、层次选择器（后代选择器、子选择器、相邻兄弟选择器、通用兄弟选择器）
序列选择器：
1）:nth-child()
2）:first-child
3）:last-child
4）:nth-last-child()
5）:only-child
6）:first-of-type
8）:last-of-type
9）:nth-of-type
10）:nth-last-of-type
11）:only-of-type

属性选择器：
通过标记属性选中 input[name]
通过标记属性的属性值选中input[type="text"]
通过标记的属性的属性值开头的内容选择标记a[href^="h"]
通过标记的属性的属性值结尾的内容选择标记a[href$="com"]
通过标记的属性的属性值的任意内容选择标a[href*="S"]

UI元素状态伪类：
可以选中可用状态的标记input:enabled
可以选中禁用状态的标记input:disabled
可以选中默认选中的状态标记input:checked
改变默认选中文本的状态，注意点：只能改变文本颜色和背景颜色p::selection

否定和根选择器：
否定选择器：设置了样式只有自己没有，其他的标记有input:not([type="tel"])
根选择器:root

交集选择器：
表示只有div类型的标记它的class为pp的标记起作用 div.pp
表示当input标记获取焦点的时候改变样式input:focus

层次选择器：
包含（后代）选择器

子选择器：
表示只对子元素起作用.select>li

相邻兄弟选择器：
只能选中离我最近的兄弟元素 div+p

通用兄弟选择器：
只要你是我的兄弟元素都可以选中 div~p
```

### 38、css3新增属性

```
border-radius：CSS3圆角边框
border-shadow：CSS3边框阴影
text-shadow：文字阴影
box-shadow

background-size
1）background-size:50% 50%;像素、百分比
2）background-size: cover;表示默认会把背景铺满整个容器，背景图的某些部分会显示不完整，拉伸
3）background-size: contain;表示默认会把背景进行等比拉伸，可以保证图片完整性


background-origin
1）background-origin: border-box;表示背景区域，可以通过这个属性指定背景图的位置
2）background-origin: padding-box;默认值
3）background-origin: content-box;以内容区域进行显示

background-clip
1）background-clip: border-box;默认值，从边框区域开始裁剪
2）background-clip: padding-box;从padding区域开始裁剪
3）background-clip: content-box;从content区域开始裁剪，之前去掉了

多重背景属性，注意点：前面的会把后面的给覆盖掉。开发中不建议使用
background: url(img/dog.jpg) no-repeat center center, url(img/2.jpg) no-repeat center center;

position：sticky粘性定位

text-transform大小写转换属性
1）text-transform：capitalize首字母大写
2）text-transform：lowercase把大写字母转换成小写字母
3）text-transform：uppercase把小写字母转换成大写字母

font-variant：small-caps；浏览器会显示小型大写字母的字体。

```

### 39、优雅降级和渐进增强

```
渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
```

### 40、弹性盒常见属性

```
1）flex-direction:row/row-reverse/column/column-reverse
2）justify-content:flex-start/flex-end/center/space-between/space-around/space-evenly
3）align-items:flex-start/flex-end/center/baseline/stretch
4）flex:1;
5）flex-wrap:wrap换行/nowrap不换行/wrap-reverse换行反向
6）flex-flow:column wrap;
7）align-self:flex-start/flex-end/center/stretch加在子元素上
8）align-content：flex-start/flex-end/center/space-between/space-around堆栈伸缩行，要与换行同时应用
9）order显示顺序
10）flex-grow:0(默认值)/1/2
11）flex-shrink:1(默认)/0(表示不缩小)
12）flex-basis:auto(默认值)/300px/...  定义了在分配多余空间之前，项目占据的主轴空间
13）flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
```

### 41、三列布局

容器里面的两边的区域宽度是固定的，中间内容是自适应的

### 42、常见的布局方式 

弹性布局、固定布局、可切换的布局、混合布局、响应式布局

### 43、媒体查询

```
@media all and (min-width:320px){}
@media only screen and (min-width: 300px) and (max-width: 640px)
/* 竖屏 */
@media screen and (orientation:portrait) {对应样式}
/* 横屏 */
@media screen and (orientation:landscape){对应样式}
```

### 44、移动端单位和适配

rem、vw

vw适配rem单位：
			1、假如设计稿宽度是750px，以vw划分100vw
			2、100vw = 750px，1px = 0.1333333vw
			3、使用js动态改变rem时，html{font-size:100px;}
			4、100px等于多少vw呢？100 * 0.133333 = 13.3333vw；

### 45、线性渐变和径向渐变（重复性）

```
线性渐变：
background-image: linear-gradient(red, yellow);
background-image: linear-gradient(to bottom, red, green);
background-image: linear-gradient(320deg, hotpink, green);
重复性渐变：
background-image: repeating-linear-gradient(-30deg, black 0%, black 5%, white 5%, white 10%);
径向渐变：
background-image: radial-gradient(circle, red, yellow, green);

```

### 46、过渡属性

```
transition：
1）transition-property: all;哪些属性需要过渡效果
2）transition-duration: 1s;过度时间
3）transition-delay: 3s;延迟时间
4）transition-timing-function: ease-in;过度动画类型linear：线性过渡；ease：平滑过渡；ease-in：由慢到快；ease-out：由快到慢
5）transition: all 1s ease-in;简写
```

### 47、2D、3D属性、动画

```
1）2D：
transform：translate();位移
perspective: 500px;近大远小

1表示不缩放（默认值），不能为0
大于1表示放大
小于1表示缩小
transform: scaleX(2);
transform: scaleY(2); 

2）3D：
transform-style：preserve-3d；
transform：translate() rotate();位移 旋转

3）动画属性
①animation-name: ;动画名称
②animation-duration: 3s;动画时间
③animation-timing-function: linear;动画类型 linear：线性过渡；ease：平滑过渡；ease-in：由慢到快；ease-out：由快到慢；ease-in-out：由慢到快再到慢；step-start:马上跳到动画每一结束桢的状态
④animation-iteration-count: infinite;动画执行次数  infinite：无限循环；number: 循环的次数
⑤animation-direction: reverse;动画执行方向
⑥animation-delay: 3s;动画延迟时间
⑦animation-play-state: paused;暂停动画

动画执行三要素：
1.告诉系统需要执行那个动画 animation-name:动画名

2.告诉系统我们需要创建一个名称叫什么的动画
@keyframes mymove{
     from{初始状态属性}
     to{结束状态属性}
}

@keyframes mymove{
     0%{初始状态属性}
     100%{结束状态属性}
}（中间再可以添加关键帧）

3.告诉系统动画持续的时长
animation-duration:3s;
```

### 48、过渡属性和动画的区别

相同点：

都是随着时间改变元素的属性值。

不同点：
transition需要触发一个事件(hover事件或click事件等)才会随时间改变其css属性；

而animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果，css3的animation就需要明确的动画属性值。

### 49、网页优化，头部优化：关键字和描述信息

```
 头部优化：
 <meta name="keywords"   content="" />向搜索引擎说明你的网页的关键词
 <meta name="description"    content=""/>告诉搜索引擎你的站点的主要内容
```

```
网页中图片优化方式
  1、css sprite
  2、字体图标、svg格式
  3、base64格式 --- 会把常用的一些小的图片转成编码格式进行使用
  4、在使用图片标记的时候，尽量给设置title和alt属性，因为搜索引擎无法识别图片上面的文字
  5、建议尽量不要在网页中使用flash，因为搜索引擎无法识别图片上面的文字
  6、webp图像格式，浏览器支持性好，可以使用程序友好的控制好
```

```
logo区域优化：
  1、H1标签的使用，
  2、一个页面设置一个H1标签，有助于搜索引擎明白网站架构，因为H1标签的搜索权重比其他标签高，一般用于logo区域。
```

```
超链接优化：
  1、在使用a标记的时候，建议设置title属性
  2、原因：其实咱们访问网站就是通过链接，链接有一个良好的“通道”有利于咱们访问网站
```



### 50、BFC概念和触发条件

FC表示的是格式上下文：
			1、格式上下文指的是网页布局规则，上下文理解为一个代码执行环境
			2、FC理解为代码执行环境，在这个环境里面要执行代码要遵循一些相应的规则，例如：生活中，不同的国家
			有不同的法律法规，本质上都是一个社会环境，都是人生存的产物

BFC 块级格式上下文：
1、BFC也是css一个规则，内部的元素不会影响外部的元素，这种规则是一个独立的容器
2、BFC也是对css常用的规则的总结
3、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。它规定了元素与其他元素的关系和相互作用。

```
触发条件：
/*触发了一个规则*/
display: inline-block;
/*触发了另一个规则（BFC）*/
 float: left; 
 /*触发了另一个BFC*/
 overflow: hidden; 
```











