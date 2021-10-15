# 

### 一、什么是JavaScript

1、与页面进行交互的脚本语言,具有较强的逻辑性.

2、javascript 组成 
        DOM  文档对象模型
        BOM  浏览器对象模型
        ECMAScript 标准 规范

```
1. ECMASCRIPT: 定义了javascript的语法规范,描述了语言的基本语法和数据类型
2. BOM (Browser Object Model): 浏览器对象模型
  - 有一套成熟的可以操作浏览器的 API，通过 BOM 可以操作浏览器。比如： 弹出框、浏览器跳转、获取分辨率等
3. DOM (Document Object Model): 文档对象模型
  - 有一套成熟的可以操作页面元素的 API，通过 DOM 可以操作页面中的元素。比如： 增加个 div，减少个 div，给div 换个位置等
```

总结： **JS 就是通过固定的语法去操作 浏览器 和 标签结构 来实现网页上的各种效果**

3、学习手册

W3School离线手册 `http://www.w3school.com.cn/`    

 菜鸟教程`http://www.runoob.com/`      

 `https://developer.mozilla.org/zh-CN/`

### 二、JavaScript基本介绍和发展

1、1994年，网景公司(Netscape)发布了Navigator浏览器0.9版，这是世界上第一款比较成熟的网络浏览器。

2、 liveScript ==> javaScript ==> ECMAscript

3、Brendan Eich，他只用10天时间就把Javascript设计出来了。

### 三、JavaScript书写位置

```
1、行内
<!-- 可以直接点击的标签 -->
<a href="javascript:alert('你好鸭 今天在下雨');">弹出提醒</a>
<!-- 不能直接点击的标签 -->
<p onclick="alert('好粉')"></p>

2、内部
 <script>
    alert('123')
</script>

3、外部
<!-- script 用来引入了文件  标签中间不能再写 js 代码了  写了也白写 -->
<script src="./index.js">
    alert('456')
</script>
```

### 四、js注释

```
// 单行注释
/*
   多行注释
*/
```

### 五、js输出语句

```
1、alert('弹出框 alert')   只有确定按钮
2、console.log('控制台输出')
3、document.write('页面输出')
4、document.write('<b>测试一下</b>')   可以解析 Html 标签
5、prompt('今年你多大了')   带了 输入框
6、confirm('弹出框 confirm')  带确定和取消按钮
```

### 六、变量

1、变量，装东西、容器 ；有一个容器 使用 var 告诉浏览器我有一个容器

2、声明一个变量

```
var 变量的名称
var 和 名称之间必须有一个 空格
var zjhl
var a 
```

3、声明一个变量并且赋值(往容器里面装东西) 

```
赋值 把 = 右边的东西给左边 
var zjhl = '白骨精'
```

4、一个变量只能装一个东西，一直装 就是后面的把前面的覆盖了

```
var beizi = '水'
重新赋值
beizi = '可乐'
alert(beizi)
```

5、可以同时声明多个变量 不赋值 中间用 , 隔开

```
var a,b,c,d
```

6、同时声明多个变量 并且赋值 中间用 , 隔开

```
var a = 10 , b = 20 , c = 30
console.log(a,b,c)
```

7、变量的命名规则

```
1）只能由 数字 字母 下划线 $ 组成
2）不能以数字开头
3）不能使用关键字或者保留字
4）JS 严格区分大小写
5）不能使用 中文
6）不要超过 255 个字符
7）不能使用空格
var var1 = 123
var num = 123
var Num = 123
```

8、变量的命名规范

​    1）语义化

​    2）驼峰命名法

### 七、数据类型

1、数据类型 基本数据类型 复杂数据类型(先不说)

2、基本数据类型有五种

```
1）数值型 number
 - 数字 
 - 进制数
 var num = 123
 var num1 = 123.321
 var num2 = 0xf
 数值型里面有一个特殊的东西 叫做 NaN  (not a number)
  var n1 = NaN
  
2）字符型 string
凡是被 '' 或者 "" 包裹起来的都叫做字符型
字符串
var num = '123'

3）布尔型 true真 false假
var b1 = true
console.log(b1) 

4）未定义型 undefined
var u1 
console.log(u1)

5)空型  null 
null 一般用来清空容器(变量)
var n1 = null
console.log(n1)
```

### 八、检测数据类型

**1、检测数据类型(基本数据类型) typeof** 

```
1）typeof 你要检测的数据
2）typeof(你要检测的数据)
```

```
var num = 123
var res = typeof num
console.log(res)    // 'number'
console.log(typeof res)   // typeof 'number'  =>  string
```

```
var str = '123'
console.log(typeof str)
```

```
var b1 = false
console.log(typeof b1)     boolean
```

```
 var u1 
 console.log(typeof u1)    // undefiend
 console.log(typeof(typeof u1))    // typeof 'undefiend'
```

```
var n = null
console.log(typeof n)   // object
```

```
NaN (not a number)   属于 数值型  特殊的数值型
var n1 = NaN
console.log(typeof n1)
```

**2、isNaN 判断一个数据  是  不是数值 。得到的结果是一个布尔值**

```
var a = 123
console.log(isNaN(a))   // true false
```

```
var str = 'qwer'
console.log(isNaN(str))  =>true 不是数值
```

```
总结  isNaN  
是数值 =>  false 
不是数值  =>  true
```

### 九、操作符

1、 +  -  * / %(取余、取模)

2、\+ 数学运算 也可以是字符串拼接。\+ 两侧 有一个是字符串 那就是拼接的作用

3、一元运算符  ++ 和 -- 

   1） ++(--) 放在变量的前面或者后面 

   2）前面 先自己 +(-)1 再参与运算

   3）后面 先参与运算然后再 自己 +(-)1

# 

### 一、比较操作符

1、\>     <     >=     <=      ==     ===      !=     !==

2、比较操作符返回的都是布尔值

3、==  只比较值 不比较数据类型

4、 === 不仅比较值 也要比较数据类型

5、!= 只比较值 不比较数据类型

6、!== 不仅比较值 也要比较数据类型

```js
console.log(1 > 2)  		//false
console.log(1 == '1')  		// true
console.log(1 === '1')  	// false
console.log(1 != '1')  		//false
console.log(1 !== '1')		//true
```

### 二、赋值操作符

1、=    +=    -=     *=     /=     %=

```js
var a = 1
a += 10   // a = a + 10
console.log(a)  //11
```

### 三、逻辑操作符

1、&&(与、并且)  ||(或)     !(非)

2、&& 所有的为 true 结果就是 true

3、|| 只要有一个为 true 结果就是 true

4、! 非 取反

```js
var res = true && false
var res = 0 > 1 && 2 < 3
console.log(res)
```

```js
var res = true || false
console.log(res)
```

```js
var res = !false
console.log(!!!res)  // !!!true  =>  !!false  => !true => false
```

### 四、数据类型转换-转为数值型

1、Number() 

把一堆数据当成一个整体进行转换

```js
var str = '123'
var str = '123.321你好'
var str = '123.456.789'
var res = Number(str)
console.log(res)
```

2、parseInt()

从左到右开始转换 不认识小数点 只要发现非数字 停止转换

```js
var str = '123'
var str = '123.321'
var str = '123有需要请联系二楼人事部'
var str = '有需要请联系二楼人事部13909099090'
var res = parseInt(str)
console.log(res)
```

3、parseFloat()

从左到右开始转换 认识并且只认识一个小数点 只要发现非数字 停止转换

```js
var str = '13909099090'
var str = '139.09你好鸭099090'
var str = '139.09.099090'
var res = parseFloat(str)
console.log(res)
```

4、除了 + 以外的其他运算符 - * / % (隐式转换)

```js
var str = '123.321'
var res = str - 0
var res = str * 1
var res = str + 0
console.log(res)
```

### 五、数据类型转换-转成字符型

1、String(你要转换的数据)

```js
var num = 123.321
var b1 = false
var res = String(b1)
console.log(res)
```

2、toString()

你要转换的数据.toString()

```js
var num = 123.321
var b1 = false
var res = b1.toString()
console.log(res)
```

3、+ 拼接字符串

```js
var num = 123
var res = num + ''     // '' 里面没有任何数据的叫做空字符串
console.log(res)
```

### 六、数据类型转换-转为布尔型

1、Boolean()

只有五个数据转出来是 false    （**''     0    NaN     undefined     null**）

```js
var str = ''
var res = Boolean(str)
console.log(res)
```

2、!非  隐式转换

```js
var str = 'qwer'
var num = 0
var res = !str   // 回先把 str 转换成布尔值 然后再取反
console.log(res)
```

### 七、分支结构语句（if）

1、代码从上往下 从左往右

2、分支条件结构语句 有条件地去执行一段代码 

3、满足条件执行代码 

4、if(条件 最终会转成布尔值){ 满足条件执行的代码 }

5、if(条件){ 满足条件执行的代码 }else{ 不满足条件执行的代码 }

6、if(条件1){ 满足条件1执行的代码 }else if(条件2){满足条件2执行的代码}

7、if(条件1){ 满足条件1执行的代码 }else if(条件2){满足条件2执行的代码}else{ 上面的所有条件都不满足执行的代码 }

```js
if(!0){
alert('大于')
       }
```

8、if else 只要进入了一个条件 就不会再进入后面的了，第一个条件不满足的时候 才会判断第二个条件

```js
if(age > 25){
// age > 25
alert('可以做大保健付费项目了')
        }else if(age > 18){
// 第一个条件不满足的时候 才会判断第二个条件
// age <= 25 才会进入这个条件判断
            alert('可以做大保健免费项目了')
        }else if(age > 12){
            alert('可以做小保健了')
        }else{
            alert('洗洗睡吧')
        }
```

### 八、分支结构语句（switch）

1、switch case 判断一个数据 具体的一些值

2、switch 不写 break 叫做 switch 穿透

```js
var num = prompt('请输入0-6数字')
        // 判断 num 可能有的一些值 具体值  也会判断数据类型  === 
         switch (num) {
            case '0':
                 alert('周日')
                 break
             case '1':
                 alert('周1')
                 break
             case '2':
                 alert('周2')
                 break
            case '3':
                alert('周3')
                 break
             case '4':
                 alert('周4')
                 break
             case '5':
                 alert('周5')
               break
            case '6':
                alert('周6')
                break
             default:
                alert('输入错误')
         }
```

### 九、操作符优先级

<table>
<thead>
<tr>
<th>运算</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>.[ ] ( )</td>
<td>字段访问、数组索引、函数调用和表达式分组</td>
</tr>
<tr>
<td>++ -- - + !</td>
<td>一元运算符</td>
</tr>
<tr>
<td>* / %</td>
<td>相乘、相除、求余数</td>
</tr>
<tr>
<td>+ -</td>
<td>相加、相减、字符串串联</td>
</tr>
<tr>
<td>&lt; &lt;= &gt; &gt;=</td>
<td>小于、小于或等于、大于、大于或等于</td>
</tr>
<tr>
<td>== != === !==</td>
<td>相等、不相等、全等，不全等</td>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>逻辑“与”</td>
</tr>
<tr>
<td>\</td>
<td>\</td>
<td></td>
<td>逻辑“或”</td>
</tr>
<tr>
<td>= +=</td>
<td>赋值、赋值运算（如 += 和 &amp;=）</td>
</tr>
<tr>
<td>,</td>
<td>逗号运算符</td>
</tr>
</tbody>
</table>
# 

### 一、三元表达式

1、三元表达式 三目运算符 装逼运算符

2、就是对 if else 简写

3、由 ? 和 : 组成的一个表达式

4、条件 ? 满足条件执行的代码 : 不满足条件执行的代码

```js
2 > 1 ? alert('大于') : alert('桃谷')
```

```js
2 > 3 ? res = '大于' : res = '小于' 
或者
res = 2 > 3 ? '大于' : '小于'
console.log(res)
```

### 二、while和do ...while循环

while和do ...while

1、循环 重复执行一段代码

2、while(条件){ 满足条件执行的代码 } 改变条件里面变量值

3、do...while 不管是否满足条件先执行一次再去判断

```js
1）while
var num = 1
   while (num > 10) {
          alert(num)
          num++
        }

2）do...while 
var num = 1
do{
    alert(num)
   }while(num > 10)
```

### 三、for循环

1、for(声明一个变量并且赋初始值;条件;变量值变化){

​        重复执行的代码

​      }

```js
for(var num = 1 ; num < 5 ; num++){
            console.log(num)
        }
```

### 四、Math.pow(数字,几次方)

# 

### 一、break&continue

​    1、break 打断循环

​    2、 continue 跳出本次循环继续下一次循环

```js
// 找到 10 - 100 以内第一个 7 的倍数
 for(var i = 10 ;  i <= 100 ; i++){
    if(i % 7 !== 0){
                // 不是 7 的倍数
                continue
            }
            console.log(i)
        }
```

### 二、函数

 1、函数 盒子 

 2、告诉他 我有一个盒子 使用关键字 function 

 3、给这个盒子起个名字

```js
 function hz1() {
            // 把你要执行的代码放进去
            for (var k = 1; k < 6; k++) {
                // k 的值   1 2 3 4 5
                // 需要的值 5 4 3 2 1
                for (var i = 1; i <= 6 - k; i++) {
                    document.write('&nbsp;')
                }
                for (var j = 1; j <= k; j++) {
                    document.write('* ')
                }
                document.write('<br />')
            }
        }
        只是把代码放到盒子里面 并没有拿出来使用
        定义一个函数
```

### 三、函数定义

1、声明式函数

```js
 function fn(){
            console.log('fn 函数调用')
        }
```

2、函数表达式(赋值式函数)

```js
var fun = function(){
            console.log('fun 函数调用')
        }
```

3、定义函数的时候 里面的代码不会执行

```js
fn()  // 函数调用(把盒子里面的代码拿出来执行)
 fun()
```

### 四、函数调用上的区别

```js
// fn()
        // 声明式函数
        function fn(){
            console.log('fn函数调用')
        }

        // fn()
```

```js
 // fun()
        // 赋值式
        var fun = function(){
            console.log('fun 函数调用')
        }
        // fun()
```

1、声明式函数可以在声明之前和之后调用 

2、 函数表达式只能在声明之后调用

### 五、函数调用的时机

```js
// console.log('script start')
        // function fn(){
        //     console.log('fn 函数调用')
        // }
        // console.log('script end')
        // fn()
        // 定义的时候函数里面的代码不会执行
        // 只看在哪儿调用

        fn()  // 调用函数的时候 还没有 num 东西
        var num = 10 
        function fn(){
            console.log(num)
        }
```

### 六、函数的参数

1、 () 用来放参数的

2、参数分为 形参 : 在函数定义的时候书写的 形参只是函数内部能够使用的变量

 					 实参 : 在函数调用的时候给形参赋值的

3、当形参的个数比实参多的时候 多出来的就是 undefined

4、当实参个数比形参多的时候......

### 七、数组

1、数组 有序的数据集合每一个数据之间 , 隔开  可以存放任意的数据类型

```js
var arr = [123,'wqe',false,456,123,'wqe',false,123,'wqe',false,456,123,'wqe',false]
console.log(arr)
// 数组里面的顺序 索引(下标) 从 0 开始
// 数组还有一个属性叫做 length 就是数组里面装了多少个数据 
```

2、把数组里面的数据取出来

```js
 var data = arr[1]
 console.log(data)
```

3、要把 false 改为 true

```js
arr[2] = true
console.log(arr)
```

4、不知道数组里面有多少条数据 但是就想拿到最后一个

```js
var last = arr[arr.length - 1]
console.log(last)
```

5、拿到数组的每一项 循环

```js
for(var i = 0 ; i < arr.length ; i++){
      console.log(arr[i])
}
```

### 八、arguments

1、arguments 是每一个函数里面自带的东西 你不用任何操作就可以直接使用

2、arguments 就是实参的集合 是一个伪数组 有数组的下标和数组的length

3、有的时候 我不确定实参有多少个 使用 arguments

```js
function fn(){
            console.log(arguments)
            // 打印出每一个实参
            for(var i = 0 ; i < arguments.length ; i++){
                console.log(arguments[i])
            }
        }
        fn(1,2,3,4,5)
```

### 九、函数的定义阶段

1、数据类型 简单数据类型 和 复杂(引用数据类型)数据类型(function)

 函数的定义阶段

​    1、准备一个盒子 (在内存当中开辟一块空间)

​    2、给这个盒子起一个名字 (把这个空间的地址给到函数的名字)

​    3、把代码当成字符串(不解析变量) 放到盒子(空间)里面 

### 十、return

1、写一个函数 可能只是希望这个函数去帮我执行某些代码 是不需要他给我一个结果 可以不要 return 

2、如果我们执行完这个函数 我只希望他最后给我一个结果 这个时候就需要 return

\- 没有写 return 函数的返回值是 undefined

\- 写了 return return 后面没有写东西 函数的返回值也是 undefined

\- 写了 return return 后面跟了东西 那这个东西就是函数的返回值

```js
 function fn(a,b,c){
            var min = a 
            if(b < min){
                min = b
            }
            if(c < min){
                min = c
            }
            return min
        }
        // 执行完这个函数 希望你把最小的值返回给我
        var res = fn(1,2,3)
        console.log(res)
```

### 十一、预解析

1、看不到它的过程 预解析 预先提前 解释

2、 任何 js 代码 在执行之前 浏览器都会对它进行提前通读解释

3、 把一些声明提前 只会提前 var 声明的变量 和 声明式函数 

4、 预解析只是把声明提前不会赋值

# 

### 一、函数和事件的结合

1、定义一个函数

```js
function fn(){
            // console.log('点击了')
            // return 123
        }
// 函数名()  函数调用 =>  函数会立即执行
// 点击 div 执行这个函数
// dv.onclick = fn()   // dv.onclick = undefined
// = 是赋值 优先级最低  右边的东西给左边
// 右边 是 fn() 函数立即调用 

// dv.onclick = fn
// fn 是一个函数的名字 (地址)
// 点击 div 的时候 他自己通过给他的这个地址去找到这个函数  然后调用
```

### 二、作用域

1、作用域 变量起作用范围

2、作用域 分为 全局作用域 和 私有(局部)作用域

3、 私有作用域 目前就只有函数有私有作用域

```js
function fn(){
            var b = 100
            // 这个地方是函数的私有作用域 
            // b 变量只有在这个私有作用域生效
        }
        fn()
        // console.log(b)

        var fun = function(){
            // 这儿是 fun 的私有作用域
            var a = 10
        }
```

### 三、作用域查找规则

作用域访问规则

​    1、自己作用域里面有 就直接拿来用 没有就找到上一级作用域

​    2、上一级作用域有就拿来用 没有就继续往上 直到全局作用域 有就拿来用

​    3、全局作用域也没有 直接报错 ** is not defined

```js
// 全局作用域
        // var b = 10
        function fnn() {
            // 这儿是 fnn 的私有作用域
            // var b = 2
            function fun() {
                // 这儿是 fun 的私有作用域
                // var b = 1
                function fn() {
                    // var b = 10
                    console.log(b)
                }
                fn()
            }
            fun()
        }
        fnn()
```

### 四、作用域的赋值规则

作用域的赋值规则

​      1、自己作用域有 就直接赋值

​      2、自己作用域没有就去到上一级作用域 有就直接赋值 没有就继续往上

​      3、直到全局作用域 有就直接赋值 没有 那就在全局先声明一个然后赋值

```js
// var b = '全局作用域'
        function fnn() {
            // var b = 'fnn'
            function fun() {
                // var b = 1
                function fn() {
                    // var b = 10 
                    b = 2000000

                }
                fn()
            }
            fun()
        }
        fnn()
        console.log(b)
```

### 五、函数的执行阶段

函数执行阶段

​      1、通过函数的地址找到这个函数

​      2、形参赋值

​      3、函数内部预解析

​      4、函数内部代码执行

```js
/* fn(10)
            1、通过函数的地址找到这个函数
            2、形参赋值 在函数内部声明一个变量a值为 10
            3、函数内部预解析
                - var a
            4、函数内部代码执行
                - console.log(a)   // 10
                - a = 100
                - console.log(a)  // 100
*/
function fn(a){
            console.log(a)
            var a = 100
            console.log(a)
        }
        fn(10)
```

### 六、预解析的无节操性

预解析的无节操性

​      1、return 后面的代码不会执行 但是会进行预解析

​      2、if 条件不成立 里面的代码不会执行 但是会进行预解析 并且预解析是全局预解析

​          \- if(false){ 里面的代码不会执行但是会进行预解析 }

​         \- return 后面的代码不会执行但是会进行预解析

```js
if(false){
            // 这个地方不是函数 所以没有私有作用域 那就属于 全局作用域
            var a = 10
        }
        console.log(a)
```

### 七、递归

1、递归 就是函数自己调用自己

2、写递归 记住先写停

```js
var a = 0
        function fn() {
            if (a >= 4) {
                return
            }
            // console.log(fn)
            // fn 函数作用域内部没有 fn 变量 那就往上 去到全局作用域 
            // 全局作用域的 fn 是一个函数的地址 所以就直接拿来用
            console.log('fn 函数调用')
            a++
            fn()

        }
        fn()
```

### 八、对象

1、对象也是引用数据类型(对象、数组、function)

2、数组 是存储数据 有序的数据集合

3、对象 也是存储数据 无序的数据集合

4、对象 键值对 key:value

5、创建一个对象

```js
1、字面量
        var obj = {
            username:"小李",
            age:18
        }
2、内置构造函数
        var obj1 = new Object()

        // console.log(obj)
        // console.log(obj1)

        // 对象里面有一个特殊的语法 . 的
        // 也可以使用 [] 语法 [] 一般放一个字符串或者一个变量
        // 读取
        // console.log(obj.attr)  // 读取 obj 里面的 attr 这个属性
        // console.log(obj.username)
        // console.log(obj['username'])
        // console.log(obj[username])  // username is not defiend
        // var key = 'username'
        // console.log(obj[key])


修改
        // obj.username = '老王'
        // obj['username'] = '老王'
        // console.log(obj)


新增
        // obj.gender = '男'
        // obj1.username = '波多'
        // obj['gender'] = '男'
        // console.log(obj)
        
        
删除
        // 关键字 delete
        // delete obj.age
        // delete obj['age']
        // console.log(obj)
```

### 九、引用数据类型在内存当中的存储情况

1、基本数据类型保存的是值

2、引用数据类型保存的是地址

3、以后只要看到引用数据类型 赋值 复制的都是地址

# 

### 一、数组

1、数组 有序的数据集合

2、创建方式 

​    1）字面量

```js
var arr = [1,2,3]
```

​    2）内置构造函数

```js
// 传了一个参数 那就是数组的长度
var arr1 = new Array(10)
// 传 2 个及以上参数 那就是数组里面的数据
var arr1 = new Array(10,20,30,40)
```

3、length 数组的长度 数组里面有多少个数据

4、数组的第一个数据

```js
console.log(arr[0])
```

5、数组的最后一个数据

```
console.log(arr[arr.length -1 ])
```

### 二、操作数组的方法

操作 增删改查

1、push(你要追加的数据)

​     向数组的末尾追加一条数据

​     语法：arr.push()

​     返回值:改变后的数组的长度

​     直接改变原始数据

```js
var arr = ['a',false,'b',null]
var res = arr.push(123)
console.log(res)
console.log(arr)
```

2、pop() 

​      删除数组的最后一项

​      语法：arr.pop()

​      返回值：删除的那一项数据

​      直接改变原始数据

```js
var arr = ['a',false,'b',null]
var res = arr.pop(123)
console.log(res)
console.log(arr)
```

3、unshift(你要追加的数据)

​      向数组的最前面追加一条数据

​      语法：arr.unshift()

​      返回值：改变后的数组长度

​      直接改变原始数据

```js
var arr = ['a',false,'b',null]
var res = arr.unshift(123)
console.log(res)
console.log(arr)
```

4、shift() 

​      删除数组的第0项

​      语法：arr.shift()

​      返回值：删除的那一项数据

​      直接改变原始数据

```js
var arr = ['a',false,'b',null]
var res = arr.shift()
console.log(res)
console.log(arr)
```

5、concat() 拼接数据 

​     参数可以是一个数组或者一些数据

​     语法:数组.concat()

​     返回值:拼接好的新数组

​     不会改变原始数据

```js
var arr = ['a',false,'b',123]
var arr1 = [123,321,456]
var res = arr.concat(true,null,456)
//var res = arr.concat(arr1)
console.log(res)
console.log(arr)
```

6、join(字符)  以特定的字符把数组里面的每一项连接起来转为字符串

​     语法:数组.join()

​     返回值:拼接好的字符串

​     不会改变原始数据

```js
var arr = ['a',false,'b',123]
var res = arr.join('@_@')
console.log(res)
console.log(arr)
```

7、indexOf() 检测数组里面有没有某一项数据

​     语法:数组.indexOf()

​     返回值:有这个数据 返回下标

​                  没有这个数据 返回 -1

```js
var arr = ['a',false,'b',123]
var res = arr.indexOf('c')
console.log(res)
console.log(arr)
```

8、sort() 数组排序

​    语法:数组.sort(参数一个函数)

​    函数有两个参数 a, b 

​    return a - b 排序就是从小到大

​    return b - a 排序就是从大到小

​    返回值:改变后的原始数据

​    直接改变原始数据

```js
var arr = [32,54,123,514,23,541,57,576,34,76,734]
var res = arr.sort(function(a,b){
            return b - a
        })
console.log(res)
console.log(arr)
```

9、reverse()  把数组倒过来

​    语法:数组.reverse()

​    返回值:改变后的原始数据

​    直接改变原始数据

```js
var arr = ['b','c',123,false,null,'d']
var res = arr.reverse()
console.log(res)
console.log(arr)
console.log(res === arr)
```

**10、splice()  截取数据**  

​    语法:数组.splice(开始截取的位置(索引),截取的个数,你要插入的数据)

​    返回值:截取的数据组成的新的数组

​    会改变原始数据

```js
var arr = ['b','c',123,false,null,'d']
var res = arr.splice(2,3)
console.log(res)
console.log(arr)
```

### 三、冒泡排序

```js
for (var j = 0; j < arr.length; j++) {
            for (var i = 0; i < arr.length - j - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // 交换位置
                    var tmp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = tmp
                }
            }
        }
 console.log(arr)
```

### 四、选择排序

​    1、默认第 0 项是最小的 

​    2、 用这一项和每一项 进行比较 如果有比他小的 那就记录下他的索引

​    3、一轮下来就能知道最小那个数字的索引 

​    4、把第 0 项和最小索引的这一项交换位置

```js
var arr = [1, 3, 8, 5, 6, 4, 9, 7, 2]
for (var j = 0; j < arr.length; j++) {
            var minIndex = j
            for (var i = j + 1; i < arr.length; i++) {
                if (arr[i] < arr[minIndex]) {
                    // 记录下他的索引
                    minIndex = i
                }
            }
            // 交换位置
            if (minIndex !== j) {
                var tmp = arr[j]
                arr[j] = arr[minIndex]
                arr[minIndex] = tmp
            }
        }
console.log(arr)
```

### 五、遍历循环对象

1、for in 

```js
var obj = {
            name:'Jack',
            age:18,
            gender:'男'
        }
        for(var key in obj){
            // console.log(typeof a)
            // a 只是一个变量名
            // a 就是对象里面的每一个属性名
            // console.log(obj.a) // 你要去 obj 里面找 a 的这个属性
            console.log(obj[key])
        }
```

### 六、生成随机数

Math.random()

# 

### 一、数组塌陷

删除数据时，除了从最后一项开始，其他位置都要加一个例如i--

```js
// 数组塌陷
// var arr = [1,2,3,4,5]
// for(var i = 0 ; i < arr.length ; i++){
        //     arr.shift()
        //     i--//防止塌陷
// }
        /* 
            i = 0  arr.shift()  => [2,3,4,5]  => i-- i=-1 => i++ i=0
            i = 0  arr.shift()  => [3,4,5]  => i-- i=-1 => i++ i=0
            i = 0 arr.shift()  => [4,5] => i-- i=-1 => i++ i=0
            i = 0  arr.shift()  => [5] => i-- i=-1 => i++ i=0
            i = 0  arr.shift()  => []  => i-- i=-1 => i++ i=0
            i = 0   arr.length =0  跳出循环
        */
        /* 
            i = 0  arr.shift()  => [2,3,4,5] => i++
            i = 1  arr.shift()  => [3,4,5]  => i++
            i = 2  arr.shift()  => [4,5] => i++
            i = 3   arr.length = 2  跳出循环
        */
        // console.log(arr)
```

### 二、严格模式 

1、在你需要严格模式的地方 写一个字符串 'use strict' 开启严格模式

### 三、ASCII编码

 1、as key

 2、ASCII 只包含英文 &……&*%%#4

 3、Unicode 万国码 => utf-8 utf-16

### 四、字符串

创建字符串的方式

 1、字面量

```js
var str = '今天来了一个丁同学'
```

 因为字符串又叫做包装数据类型

你要用下标或者length的时候 我就把自己包装成内置构造函数创建的样子 

把下标和 length 给你用 你不用了我就没有这些属性了

2、内置构造函数

```js
var str1 = new String('丁同学喜欢 yellowgreen')
```

**内置构造函数 创建的字符串 有下标有 length**

```js
for(var i = 0 ; i < str1.length ; i++){
            console.log(str1[i])
        }
console.log(str.length)
console.log(str[3])
```

### 五、字符串的方法

1、toLowerCase() 转小写字母

返回值:改变后字符串

不会改变原始数据

```js
var str = 'DSAFDJDJKSFHdsadas'
var res = str.toLowerCase()
console.log(res)
console.log(str)
```

2、toUpperCase() 转大写字母

返回值:改变后字符串

不会改变原始数据

```js
var str = 'DSAFDJDJKSFHdsadas'
var res = str.toUpperCase()
console.log(res)
console.log(str)
```

3、charAt() 根据索引拿到对应的字符

返回值:获取到的数据

不会改变原始数据

```js
var str = 'DSAFDJDJKSFHdsadas'
var res = str.charAt(3)
console.log(res)
console.log(str)
```

4、charCodeAt() 根据索引拿到对应字符的编码

返回值:对应字符的编码

不会改变原始数据

```js
var res = str.charCodeAt(3)
console.log(res)
```

5、substr(开始截取的位置,截取的个数)

返回值:截取的字符

不会改变原始数据

参数1: 开始截取的位置 (负数 从后往前) 

参数2: 截取的个数

```js
var str = 'abcdefg'
var res = str.substr(-7,3)
console.log(res)
console.log(str)
```

6、substring(开始截取的位置,结束截取的位置) 包前不包后

返回值:截取的字符

不会改变原始数据

```js
var str = 'abcdefg'
var res = str.substring(2,3)
console.log(res)
console.log(str)
```

**7、split()  以特定的字符把字符串分割放到一个数组里面**  *****

返回值:分割的字符串组成的数组

不会改变原始数据

```js
var str = '2021-04-26 17-39'
var res = str.split('')
console.log(res)
console.log(str)
```

8、indexOf()       *** 

```js
var str = '2021-04-26 17-39'
var res = str.indexOf('104')
console.log(res)
console.log(str)
```

9、replace() 替换    ***

```js
var str = 'hgdsSMfhdsjfSMfjhdsjfSMfdghsSM'
var res = str.replace('SM','**')
console.log(res)
res = res.replace('SM','**')
console.log(res)
console.log(str)
```

# 

### 一、this

1、this 是一个关键字 存在于 作用域里面 

2、不同的作用域 this 代表的是什么东西  this 指向

3、全局作用域 局部作用域

console.log(this)

**this指向**

1、全局作用域 this => window

2、私有作用域 (不看定义在哪儿 只看函数怎么调用)

​       **\-函数名()   直接调用 this => window**

```js
function fn(){
            // fn 的私有作用域
            console.log(this)
        }
var fun = function(){
            console.log(this)
        }
fn()
fun()
```

​      **\- ***.函数名()  调用 this => . 前面的那个东西**

```js
var obj = {
            name:'OBJ',
            fn:function(){
                console.log(this)
            }
        }
obj.fn()
```

​      **\- 事件处理函数 this => 事件源**

```js
box.onclick = function(){
            //function 就是一个函数  这个函数什么时候调用
            //当某个事件触发的时候执行的函数 叫做事件处理函数
            //事件处理函数 this 指向
            //由那一个具体的元素触发的事件 我们管这个元素叫做事件源元素
            console.log(this)
        }
```

```js
var obj = {
            fn:function(){
                console.log(this)
            }
        }
        var a = obj.fn
        box.onclick = obj.fn  ==>div
```

**定时器**里面的this 指向window

### 二、ES5新增的数组的方法

1、forEach(function(item, index, source){})

​       item => 数组的每一项

​       index => 索引

​       source => 原始数组

返回值：undefined

可以改变原数组 但是也可以不改变

```js
var arr = ['a', 'b', false, 'c']
var res = arr.forEach(function (item, index, source) {
            item = item + 1
        })
console.log(res)
console.log(arr)
```

2、map(function(item, index, source){})

返回值:改变后的数据组成的新的数组

不会改变原数组

```js
var res = arr.map(function(item, index, source){
            return item+=1
        })
console.log(res)
console.log(arr)
```

3、filter(function(item, index, source){})

返回值:满足条件的数据组成的新的数组

不会改变原始数据

```js
var arr = [12,432,65,34,65,23,2,1]
var res = arr.filter(function(item, index, source){
            // return 条件
            return item % 2 === 0
        })
console.log(res)
console.log(arr)
```

4、some(function(item, index, source){})

返回值:布尔值 只要有满足条件的数据 true  所有的都不满足 false

不会改变原始数据

```js
var arr = [12,432,65,34,65,23,2,1]
var res = arr.some(function(item, index, source){
            // return 后面写的也是一个条件
            return item > 100
        })
console.log(res)
console.log(arr)
```

5、every(function(item, index, source){})

返回值:布尔值 每一项都满足条件  true 只要有一个不满足 false

不会改变原始数据

```js
var res = arr.every(function(item, index){
            return item > 0
        })
console.log(res)
console.log(arr)
```

### 三、Math

Math js 里面内置的一个对象 他给我们提供了一些 操作数字的方法

1、Math.pow(2,3) 求一个数的多少次方 

2、Math.random() 0 - 1 之间的随机数

3、Math.round()  四舍五入

4、Math.ceil()  向上取整

5、Math.floor() 向下取整

6、Math.PI  圆周率

7、Math.abs() 绝对值

8、Math.sqrt() 开平方

9、Math.min() 最小数

10、Math.max() 最大数

### 四、随机数

```js
0 - 1
Math.random()

0 - 10
Math.random() * (10 - 0) + 0

10 - 20
console.log(Math.random() * (20 - 10) + 10)

20 - 30
console.log(Math.random() * (30 - 20) + 20)

10 - 50
console.log(Math.random() * (50 - 10) + 10)

Math.floor(Math.random() * (b - a + 1) + a)
```

### 五、概率问题

```js
function getRandom(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        }
        var obj = {}
        for(var i = 0 ; i < 100000;i++){
            var res = getRandom(10,20)
            if(obj[res]){
                // 有
                obj[res]++
            }else{
                // 没有
                obj[res] = 1
            }
        }
console.log(obj)
```

# 

### 一、Date

1、 Date给我们提供了 操作时间的方法

2、 Date 内置构造函数

3、 创建了一个当前时间日期对象

```js
var date = new Date()
```

4、指定日期 创建一个时间日期对象

​    第一个年份 第二个是月份 第三个是多少号 第四个小时 第五个分钟 第六个是秒

```js
var date = new Date(2010,10,10,10,10,10)     // 月份数字  0 - 11 代表 1 - 12月
console.log(date)
```

```js
var date = new Date('2008-8-1 10:20:30')
console.log(date)
```

### 二、时间日期对象给我们提供的方法

1、getFullYear() 获取年份

```js
var year = date.getFullYear()
console.log(year)
```

2、getMonth() 获取月份

```js
var month = date.getMonth()  //月份数字  0 - 11 代表 1 - 12月
console.log(month) 
```

3、getDate() 获取多少号

```js
var day = date.getDate()
console.log(day)
```

getDay()   星期几

```js
var a = date.getDay()   // 星期几
console.log(a)
```

4、getHours() 获取小时 

```js
var hour = date.getHours()
console.log(hour)
```

5、getMinutes() 获取分钟

```js
var minute = date.getMinutes()
console.log(minute)
```

6、getSeconds() 获取秒

```js
var second = date.getSeconds()
console.log(second)
```

7、getMilliSeconds() 获取毫秒

```js
var ms = date.getMilliseconds()
console.log(ms)
```

8、getTime() 获取 当前时间戳 到 1970年 1 月 1 日 00:00:00 时间差的毫秒值

```js
var time = date.getTime()
console.log(time) 
```

 9、setTime()

```js
date.setTime(123456088144)
console.log(date)
```

### 三、BOM

1、BOM Browser Object Model 浏览器对象模型

2、顶级对象 window

```js
window.a = 123
console.log(a)
```

3、navigator 提供一些和用户相关的信息

```
- appName: "Netscape"网景
- appVersion 版本号
- userAgent 用户相关信息
```

4、location

```js
console.log(location)
```

**href 地址栏地址**

```js
console.log(location.href)
```

```html
<button id="btn">跳转</button>
```

```js
btn.onclick = function(){
     location.href = 'http://www.baidu.com'
}
```

**reload()  刷新**

```html
<button id="btn">跳转</button>
```

```
btn.onclick = function(){
      location.reload()
}
```

### 四、获取窗口的尺寸

1、window.innerWidth   window.innerHeight 浏览器窗口的宽高

```js
// 包含滚动条的宽高
console.log(window.innerWidth , window.innerHeight)
```

### 五、浏览器滚动事件

1、onscroll 浏览器滚动事件

2、获取页面卷曲出去的距离

scrollTop 

scrollLeft

document.documentElement => html => DOM 

```js
window.onscroll = function(){
// var scrollTop = document.documentElement.scrollTop
// console.log(scrollTop)
var scrollLeft = document.documentElement.scrollLeft
console.log(scrollLeft)
        }
```

兼容问题

```
<!DOCTYPE html>
```

使用document.body => body

```js
var scrollTop = document.body.scrollTop
console.log(scrollTop)
```

兼容写法

```js
window.onscroll = function(){
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
            }
```

### 六、history

1、前进 后退

forward() 前进

```html
<h1>首页</h1>
<button id="btn1">前进</button>
<a href="./list.html">列表页</a>
```

```js
btn1.onclick = function(){
            // forward() 前进
            history.forward()
        }
```

back() 后退

```html
<h1>列表页</h1>
<button id="btn">后退</button>
```

```js
btn.onclick = function(){
            // back() 后退
            history.back()
}
```

# 

### 一、定时器

1、定时器分为 间隔定时器 和 倒计时定时器

​      间隔 每隔一段时间就执行 setInterval()

​      倒计时定时器 只会执行一次 setTimeout()

2、定时器 是我们接触的第一个 异步 代码

​       同步 从上往下 从左往右 依次执行

​       异步 等所有的同步代码执行完毕以后再执行

3、定时器的返回值 就是这个定时器是页面的 第几个定时器

4、清除定时器（这两种方法可以混用）

​       clearInterval() 

​       clearTimeout() 

​       接收的参数 就是数字 代表你要清除页面的第几个定时器

```js
 btn.onclick = function(){
            clearInterval(2)
            // clearTimeout(1)
        }
```

5、定时器 this => window

### 二、DOM

1、DOM Document Object Model 文档对象模型

2、DOM 顶级对象 -> document

3、伪数组 和 数组的区别 伪数组不能使用数组的方法

**DOM 获取元素**

1、根据 ID 获取元素 document.getElementById(id名)

```js
// 在整个文档 通过 id 为 box 去获取元素
var box = document.getElementById('box')
```

2、根据 class 类名获取元素 document.getElementsByClassName('class名')

伪数组

```js
var boxs = document.getElementsByClassName('box')
```

```js
var dv = box.getElementsByClassName('dv')
console.log(dv)
```

3、根据 标签名 获取元素 document.getElementsByTagName('标签名')

伪数组

```js
var lis = document.getElementsByTagName('li')
console.log(lis[1])
```

4、根据 css 选择器获取元素 document.querySelector('css选择器')

只能获取所有满足条件当中的第一个

```js
var dvs = document.querySelector('ul .dv')
console.log(dvs)
```

5、根据 css 选择器获取元素 document.querySelectorAll('css 选择器')

通过 querySelectorAll 方法获取的也是一个伪数组 但是 可以使用数组的 forEach 方法

```js
var dvs = document.querySelectorAll('ul .dv')
        console.log(dvs);
        dvs.map(function(item){
            console.log(item)
        })
```

获取元素 不一定是 document.***

也可以在某一个具体的元素里面 获取别的元素 (但是 id 除外)

### 三、innerText&innerHTML

innerText 文本内容

innerHTML 带标签的文本内容

```js
// 1、获取元素
var box = document.querySelector('.box')
// console.log(box)
console.log(box.innerText)
console.log(box.innerHTML)
// 2、设置
box.innerText = '<b>清蒸肥肠</b>'
box.innerHTML = '<b>清蒸肥肠</b>'
```

共同点 都是完全覆盖

不同  innerText 不会解析标签 innerHTML 会解析标签

```js
//在原来的内容里面加入一个标签
box.innerHTML += '<b>清蒸肥肠</b>'
```

### 四、操作元素的属性

```js
// 通过类名获取元素
var dv = document.getElementsByClassName('dv')[0],
img = document.getElementsByTagName('img')[0],
inp = document.querySelector('input'),
btn = document.querySelector('button')
```

1、id

```js
dv.id = 'change'
```

2、className

```js
console.log(dv.className)
dv.className = dv.className + ' black'  
// dv.className += 'black'
```

3、src

```js
console.log(img.src)
img.src = './1.png'
```

4、style  只能获取或者设置元素的行内样式

```js
dv.style.width = '800px'
console.log(dv.style.width)
console.log(dv.style.height)
console.log(dv.style.border)
```

5、setAttribute(你要设置的属性名,属性值) 设置自定义属性

​     getAttribute(你要获取的属性名)  获取自定义属性

​     removeAttribute(你要移除的属性名) 移除自定义属性

```js
const attr = dv.getAttribute('attr')
console.log(attr)
dv.setAttribute('index',0)
dv.removeAttribute('attr')
```

6、value 主要用来获取和设置表单元素的内容

```js
 btn.onclick = function(){
//  console.log(inp.value)
inp.value = '设置的内容'
         }
```

### 五、tab

1、获取元素

2、给 ol 里面的 li 绑定点击事件，先拿到 ol 里面的 每一个 li

​     先给 ol 里面所有的 li 加上一个自定义属性

​     自定义属性的作用就是 为了后面点击的时候 知道点击的是第几个（当我点击的时候再去获取这个自定义属性 我就知道点击的是第几个了）

3、点击的 时候 给 所有的 li 先把类名移除 然后再给当前点击的这一个加类名 active

4、找到对应的索引 (ol 里面点击的是第几个  ul 里面就给第几个添加类名)

### 六、获取节点

**文本节点 元素节点 注释节点 属性节点**

获取节点的方式

```html
<div>文本
        <span>小潘潘同学</span>
        <!-- 注释 -->1
        <p>小屁屁同学</p>
        2<h1>老大哥同学</h1>最后一个文本节点
    </div>
```

```js
 var dv = document.querySelector('div'),
            p = dv.querySelector('p')
```

1、childNodes 获取所有的子节点

```js
console.log(dv.childNodes)
```

**2、children  获取所有的子元素节点**

```js
console.log(dv.children)
```

3、firstChild 第一个子节点

```js
console.log(dv.firstChild)
```

4、lastChild  最后一个子节点

```js
console.log(dv.lastChild)
```

**5、firstElementChild 第一个元素节点**

```js
console.log(dv.firstElementChild)
```

**6、lastElementChild  最后一个元素节点**

```js
console.log(dv.lastElementChild)
```

7、previousSibling  前一个兄弟节点

```js
console.log(p.previousSibling)
```

8、nextSibling  后一个兄弟节点

```js
console.log(p.nextSibling)
```

**9、previousElementSibling 前一个兄弟元素节点**

```js
console.log(p.previousElementSibling)
```

**10、nextElementSibling 后一个兄弟元素节点**

```js
console.log(p.nextElementSibling)
```

11、parentNode  只能是元素

```js
console.log(p.parentNode)
```

### 七、节点的属性

文本节点 元素节点 注释节点 属性节点

获取所有的 属性节点 attributes

```js
var h1 = dv.lastElementChild
var txt = dv.lastChild
var attr = dv.attributes[0]
var com = dv.childNodes[3]
 console.log(h1)
 console.log(txt)
 console.log(attr)
 console.log(com)
```

1、nodeType 节点的类型（为数字）

```js
console.log(h1.nodeType)     // 1    元素
console.log(attr.nodeType)   // 2    属性
console.log(txt.nodeType)    // 3    文本
console.log(com.nodeType)    // 8    注释
```

2、nodeName 节点的名称

```js
console.log(h1.nodeName)     // 大写的标签名
console.log(attr.nodeName)   // 属性名
console.log(txt.nodeName)    // #text
console.log(com.nodeName)    // #comment
```

3、nodeValue 节点的内容

```js
console.log(h1.nodeValue)     // 元素节点没有  nodeValue
console.log(attr.nodeValue)   // 属性值
console.log(txt.nodeValue)    // 文本内容
console.log(com.nodeValue)    // 注释内容
```

# 

### 一、操作DOM元素

```css
.box{
            width: 300px;
            height: 300px;
            background-color: #ccc;
            margin:20px;
        }
```



```html
<div class="box">
        <span>小潘潘</span>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
```



```js
var box = document.querySelector('.box'),
            ul = box.querySelector('ul'),
            body = document.querySelector('body')
```

1、创建一个元素createElement

```js
var p = document.createElement('p')
p.innerText = '123'
```

创建一个文本节点 createTextNode

```js
var str = document.createTextNode('内容')
console.log(str)
```

 2、扔到另一个元素里面

语法:父元素.appendChild(你要追加的元素)

```js
box.appendChild(p)
```

3、把一个元素插入到另一个元素的前面

语法 : 父元素.insertBefore(要用来插入的元素,插入到哪一个页面元素前面)

```js
box.insertBefore(p,ul)
```

4、替换元素

语法:父元素.replaceChild(要用来替换的元素,被替换的页面元素)

```js
box.replaceChild(p,ul)
```

5、移除元素

语法:父元素.removeChild(被移除的元素)

```js
box.removeChild(ul)
```

6、克隆元素

语法:页面元素.cloneNode()

参数接收一个 布尔值 默认是 false 代表不克隆子元素

把 box 复制 扔到 body 里面

```js
var copy = box.cloneNode(true)
body.appendChild(copy)
```

### 二、获取页面特殊元素的方式

 1、document.documentElement  html 标签

```js
console.log(document.documentElement)
```

2、document.body  body标签

```js
console.log(document.body)
```

3、document.title  title 标签里面的内容

```js
console.log(document.title)
```

4、document.getElementsByName()  通过表单元素的 name 属性获取元素

```js
var inps = document.getElementsByName('username')
console.log(inps)
```

# 

### 一、获取元素的非行内样式

```html
<div style="border-radius:50%;"></div>
```

```css
<style>
        div{
            width: 200px;
            height: 200px;
            background-color: hotpink;
        }
</style>
```

```js
 var dv = document.querySelector('div')
```

1、getComputedStyle()

在IE里面不能获取行内样式

```js
var width =  window.getComputedStyle(dv).width 
console.log(parseFloat(width))
var borderRadius =  window.getComputedStyle(dv).borderRadius
console.log(borderRadius)
```

2、currentStyle

在谷歌里面不能获取行内样式

```js
var width = dv.currentStyle.width
console.log(width)
```

兼容写法

```js
function css(ele,attr,value){
            // 根据第三个参数判断 获取还是设置
            // 传了 第三个参数 就是设置 
            if(!value){
                // 获取
                if(window.getComputedStyle){
                    // 支持
                    return window.getComputedStyle(ele)[attr]
                }else{
                    return ele.currentStyle[attr]
                }
            }
            // 如果代码执行到这个地方  没有进入  if(!value)  => 设置
            ele.style[attr] = value
        }
        // var width = css(dv,'width')
        // console.log(width)
        css(dv,'width','800px')
        console.dir(dv)
```

### 二、三大系列

1、client

​      clientWidth  clientHeight       //元素的内容+padding

​      clientLeft  clientTop               //元素左边框和上边框的宽度

​      clientX clientY                        //光标到可视窗口左边和上边的距离

2、offset

​      offsetWidth offsetHeight    //元素的内容+padding+border

​      offsetLeft  offsetTop            //元素到有定位的父元素的左边和上边的距离

​      offsetParent                          //有定位的父元素 如果父元素都没有定位 获取的就是body值

​      offsetX offsetY                      //光标到当前元素左边和上边的距离

3、page

​       pageX pageY                       //光标到页面左边和上边的距离

### 三、数组和字符串都能使用的方法

1、indexOf()

2、concat()

3、slice()

​      第一个参数是开始截取的位置 第二个参数是结束截取的位置（包前不包后）

​      只写一个参数是从这个位置到最后

返回值：截取的数据

不会改变原始数据

### 四、事件

事件的组成

​    \- 绑定事件的方式 on

​    \- 事件类型 click 

​    \- 事件处理函数

常见的事件

1、鼠标事件

```
click         点击事件
dblclick      双击事件
mousedown     鼠标按下
mouseup       鼠标抬起
contextmenu   右键菜单
mousemove     鼠标移动
mouseover     鼠标进入
mouseout      鼠标离开
mouseenter    鼠标进入
mouseleave    鼠标离开
```

2、浏览器事件

```
scroll        
load          页面资源加载完毕后执行
resize        窗口改变事件
```

3、表单事件

```
change        失去焦点的时候，内容发生改变时触发
input         输入内容时触发
focus         获取焦点
blur          失去焦点
```

4、键盘事件

```
keydown       键盘按下
keyup         键盘抬起
keypress      键盘输入
```

5、移动端事件

```
touchStart
touchMove
touchEnd
```

### 五、事件对象

window.event

```css
*{
            margin: 0;
            padding: 0;
        }
```

```html
<body style="width:2000px;">
    <div class="box" style="width:200px;height:200px;background-color:deeppink;margin-left:100px;">
    </div>
```

```js
var box = document.querySelector('.box')
        box.onclick = function(e){
            // window.event
            // console.log(window.event)
            // console.log(e)
            e = e || window.event

            // client
            // clientX  clientY   光标到可视窗口左边和上边的距离
            // offsetX  offsetY   光标到当前元素左边和上边的距离
            // pageX  pageY       光标到页面左边和上边的距离
            console.log(e.pageX,e.pageY)
        }
```

# 

### 一、获取页面不包含滚动条的宽高

```js
//包含滚动条宽高
window.innerWidth window.innerHeight
//不包含滚动条宽高
document.documentElement.clientWidth
document.documentElement.clientHeight
```

### 二、事件对象里面的其他信息

1、点击的是鼠标的哪一个键

```
button  0 鼠标左键
which   1 鼠标左键（不仅可以表示鼠标也可以表示键盘按键）

button  2  鼠标右键
which   3  鼠标右键
```

### 三、事件对象里面的键盘信息

1、keyCode 数字编码 键盘上面每一个键 都对应一个数字编码

​     \- 回车 13

2、ctrlKey      是否按下 ctrl 键（true 或者false）

3、altKey       是否按下 alt 键（true 或者false）

4、shiftKey   是否按下 shift 键（true 或者false）

### 四、绑定事件的方式

1、on 同一个事件只能绑定一次

事件监听 

addEventListener（在IE中有兼容问题）

​      语法:元素.addEventListener(事件类型,事件处理函数)

```js
dv.addEventListener('click', function(){
            console.log(123)
        })
```

attachEvent（在谷歌中有兼容问题）

​      语法:元素.attachEvent('on'+事件类型,事件处理函数)

```js
dv.attachEvent('onclick',function(){
            console.log(123)
        })
```

回调函数 :把一个函数当成参数传入

处理兼容问题

```js
// 回调函数 :把一个函数当成参数传入
        function on(ele,type,fn){
            // 判断浏览器是否支持 addEventListener
            if(ele.addEventListener){
                // 支持
                if(type.indexOf('on') === 0){
                    type = type.slice(2)
                }
                ele.addEventListener(type,fn)
            }else{
                if(type.indexOf('on') !== 0){
                    type = 'on' + type
                }
                ele.attachEvent(type,fn)
            }
        }
        on(dv,'click', function(){
            console.log(123)
        })
        on(dv,'click', function(){
            console.log(456)
        })
```

### 五、解绑事件的方式

ele.removeEventListener(事件类型,事件处理函数必须和绑定的时候是同一个函数)

ele.detachEvent('on' + 事件类型,事件处理函数必须和绑定的时候是同一个函数)

```js
dv.addEventListener('click', fn)
dv.attachEvent('onclick',fn)
```

兼容写法

```js
function off(ele,type,fn){
    if(ele.removeEventListener){
        if(type.indexOf('on') === 0){
            type = type.slice(2)
        }
        ele.removeEventListener(type,fn)
    }else{
        if(type.indexOf('on') !== 0){
            type = 'on' + type
        }
        ele.detachEvent(type,fn)
    }
}
```

### 六、事件委派

事件委派 是把事件绑定给页面上任意一个 父级元素(一直存在于页面上)

当页面上元素需要动态追加的时候 并且都需要绑定事件的时候 就使用事件委派

```js
var lis = document.querySelectorAll('li'),
    ul = document.querySelector('ul')
ul.onclick = function(e){
            // console.log(e)
            // target || srcElement  目标源元素(实际触发事件的元素)
            // 判断 是 li 首先确定点击的是 元素节点  然后确定点击的是 li
            var target = e.target || e.srcElement
            if(target.nodeType === 1 && target.nodeName === 'LI'){
                // 点击的就是  li 
                var copy = target.cloneNode()
                // 追加到 ul 里面
                ul.appendChild(copy)
            }
        }
```

### 七、事件的执行机制

由内到外的触发顺序 冒泡

由外到内的触发顺序 捕获

addEventListener 第三个参数是用来指定冒泡还是捕获 默认值是 false 代表冒泡

当我们不需要冒泡的时候 有方法可以帮助我们阻止冒泡

#### **阻止冒泡**

```js
e.stopPropagation()
e.cancelBubble = true
```

### 八、鼠标进入事件的区别

mouseover mouseout  冒泡行为

mouseenter mouseleave 没有冒泡

# 

### 一、阻止默认事件

1、return false 写在最后面 因为 return 后面的代码不再执行

2、e.preventDefault()

3、e.returnValue = false

### 二、正则表达式

规则表达式 用来检测字符串是否符合规则

正则 是所有的语言通用的

创建方式 

1、字面量

```js
var reg = /abc/
```

2、内置构造函数 

```js
var reg1 = new RegExp('abc')
```

test()

语法:正则.test(字符串)

返回值:布尔值

#### 一、元字符

1、\d 有一个数字

2、\D 有一个非数字

3、\s 有一个空格

4、\S 有一个非空格

5、\w 有一个数字或者字母或者下划线

6、\W 有一个非数字或者字母或者下划线

7、. 有一个除了换行以外的其他字符

​        \n换行

#### 二、限定符

限定符 限定元字符出现的次数

1、*  0 - 正无穷次

2、+ 1 - 正无穷

3、?    0 - 1 次

4、{n} 出现 n 次

5、{n,} 出现 n - 正无穷次

6、{n,m} 出现 n - m 次

#### 三、边界符

^ 以 ... 开头

$ 以 ... 结尾

只写了元字符 每一个元字符都代表一个

```js
var reg = /^\d$/  // 以这个数字开头 并且以这个数字结尾
var reg = /^\d{4}$/  // 以数字开头 并且以数字结尾  总共出现 4 次
var reg = /^\w+$/  // 以数字或者字母或者下划线开头 并且以以数字或者字母或者下划线结尾 总共出现  1- 正无穷次
var reg = /^\d.\s$/  //以数字开头  除了换行以外的其他字符  以空格结尾   总共 3 位
```

#### 四、特殊符号

1、() 把一堆东西当成一个整体

2、| 或者 占位或 

```js
var reg = /^(\d|\s)$/
var str = ' '
var res = reg.test(str)
console.log(res)
```

3、\ 转义符  本身有特殊含义的加上\就没有特殊含义 本身没有特殊含义的东西 加上 \ 就有了特殊含义

```js
var reg = /^\.$/
var str = '.'
var res = reg.test(str)
console.log(res)
```

4、- 至、到

5、[] 里面的东西任选一个

```js
var reg = /^[0-9a-zA-Z_]$/   // \w
var str = '4'
var res = reg.test(str)
console.log(res)
```

6、[^]  非

```js
var reg = /^[^\d]$/
var str = 'a'
var res = reg.test(str)
console.log(res)
```

#### 五、验证邮箱

```js
var reg = /^\w{6,20}@(qq|163|126|gmail)\.(com|cn)$/
var str = 'eryege_ifds1212@163#com'
var res = reg.test(str)
console.log(res)
```

#### 六、验证0-255数字

```js
/*
1位数 0-9
2位数 1-9 0-9
3位数
  1开头 0-9 0-9
  2开头 
    0-4 0-9
      5 0-5
*/
var reg = /^(\d|[1-9][0-9]|1\d{2}|2[0-4]\d|25[0-5])$/
var str = '256'
var res = reg.test(str)
console.log(res)
```

### 三、正则的方法

1、test() 布尔值

2、exec() 匹配符合条件的字符

返回的是一个数组，index为索引

```js
var reg = /\d{3}/g
var str = 'fdf234dsd23sadsd233sd123'
var res = reg.exec(str)
var arr = []
        while(res != null){
            arr.push(res[0])
            res = reg.exec(str)
        }
        console.log(arr)
```

3、标识符 写在正则的外边 

​       i 忽略大小写

```js
var reg = /^abc$/i
var str = 'ABC'
var res = reg.test(str)
console.log(res)
```

​       g 全局匹配

### 四、配合正则使用的字符串的方法

1、search()

返回值：索引

```js
var str = 'abc123'
var reg = /\d{3}/
var res = str.search(reg)
console.log(res)
```

2、replace()

返回值：替换后的新字符串

不改变原始字符串

```js
var str = 'dsadSMdjshfSMfjdhsSMfhdjSMdsa'
var reg = /SM/g
var res = str.replace(reg,'**')
console.log(res)
```

3、match() 直接把符合规则的字符放到一个数组里面返回

```js
var reg = /\d{3}/g
var str = 'fdf234dsd23sadsd233sd123'
var res = str.match(reg)
console.log(res)
```

### 五、ES6 里面使用 let const 声明变量

**和 var 区别**

1、不能再声明之前使用 (let 和 const 声明的变量没有预解析)

2、let 和 const 声明的变量受所有的 {} 所限制使用范围

3、let和const不允许重复声明

**let 和 const 区别**

1、let 声明的叫做变量 可以重新赋值

​      const 声明的叫做常量 不能重新赋值

2、let 声明的变量可以先声明不赋值

​      const 声明的常量在声明的时候就必须赋值

页面中 常量多

### 六、箭头函数

箭头函数就是对函数表达式的简写

把 function 关键字省略了

声明式函数不能用

```js
const fun = () => {
            console.log(456)
        }
fun()
```

### 七、箭头函数的书写规则

书写规则：

1、箭头函数 参数只有一个的时候 () 可以省略不写 但是如果没有参数或者两个及以上的参数 () 必须书写

```js
 const fun = a => {
            console.log(a)
        }
fun(20)
```

2、箭头函数内部只有一句代码 并且这一句代码就是函数的返回值 {} 和 return 可以省略不写

```js
const fun = a => a*10
const res1 = fun(123)
console.log(res1)
```



### 一、箭头函数的注意事项

1、 this

\-箭头函数本身没有 this 如果你要用 this 就和定义时候上一行有 this 的地方保持一致 this 上下文

\-箭头函数 this 不要看调用 只看定义

2、箭头函数里面没有 arguments

### 二、解构赋值-对象

1、解构赋值 要注意 = 两侧的数据类型必须相等

```js
const obj = {
            username: 'Jack',
            age: 18
        }
const { username } = obj
```

2、一次解构多个属性 多个属性之间用 , 隔开

```js
const {username,age} = obj
//改变名字写法
const { username:uname } = obj
```

3、多级解构

```js
const obj = {
            name: 'Rose',
            age: 18,
            info: {
                number: 9527
            }
        }
 const { info: { number:num } } = obj
```

```js
const result_body = {
            list: {
                page: {
                    index: 1
                }
            }
        }
        const { list: { page: { index } } } = result_body
        console.log(index)
```

### 三、解构赋值-数组

1、解构赋值

```js
const arr = [43,76,23,71,345]
const [a,b,c,d,e] = arr
```

2、多级解构

```js
const arr = [
            1,2,[3,4,[5]]
        ]
// 多级解构
const [a,b,[c,d,[e]]] = arr
console.log(e)
```

### 四、模板字符串

模板字符串 就是用 `` 包裹起来的

 1、可以换行

2、支持变量 变量用 ${} 包裹起来

```js
const tbody = document.querySelector('tbody')
        for(let i = 0 ; i < data.length ; i++){
            // 创建 tr 
            const obj = data[i]
            let str = `<tr>
                <td>${obj.number}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.gender}</td>
            </tr>`
            tbody.innerHTML += str
        }
```

### 五、展开运算符

... 展开运算符

```js
const obj1 = {
            a:100,
            b:200
        }
 const obj2 = {
            ...obj1,
            c:300
        }
```

字符串拼接

```js
const arr1 = ['a','b','c'],
              arr2 = [1,2,3]
const res = [...arr1,...arr2]
        console.log(res)
```

### 六、合并运算符

合并运算符 ...

只有在形参的位置 叫做合并运算符

```js
const fn = (...a) => {
            // console.log(arguments)
            // 箭头函数里面没有 arguments
            console.log(...a)
        }
        fn(1,2,3,4)
```

复制数组 有哪些方法

```js
1、
const  arr = [1,2,3]
const arr1 = [...arr]
console.log(arr1 === arr) ==>false
```

```js
2、遍历
const  arr = [1,2,3]
const arr1 = []
arr.forEach(item => {
    arr1.push(item)
})
```

```js
3、转字符串
const  arr = [1,2,3]
const arr1 = arr.join(',').split(',')
for(let i = 0 ; i < arr1.length ; i++){
    arr1[i] -= 0
}
console.log(arr1)
console.log(arr1 === arr) ==>false
```

```js
4、concat()
const  arr = [1,2,3]
const arr1 = arr.concat([])
```

### 七、函数参数的默认值

```js
function fn(a=10){
            console.log(a)
        }
fn()
```

### 八、对象的简写形式

对象里面属性如果是一个函数 普通函数可以省略 :function 箭头函数不能简写

```js
const obj = {
            a:10,
            fn(){
                console.log(this)
            }
        }
obj.fn()
```

### 九、json格式字符串

json 格式字符串

翻译机

1、转为 json 格式字符串 

语法：JSON.stringify()

```js
const obj = {name:'Rose',age:21}
JSON.stringify()
const res = JSON.stringify(obj)
console.log(res)
```

2、把 json 格式字符串专为我们需要的数据 

语法：JSON.parse()

```js
const str = '{"name":"Rose","age":21}'
const str = '[{"name":"Rose","age":21},{"name":"Rose","age":21}]'
const res = JSON.parse(str)
console.log(res)
```

### 十、准确检测数据类型

Object.prototype.toString.call()

### 十一、一些问题

1、const 声明的常量不能被更改

2、

```js
const btns = document.querySelectorAll('button')
for(var i = 0 ; i < btns.length ; i++){
    btns[i].onclick = function(){
    console.log(i)
  }
}
console.log(i)
/* 
for 循环没有 局部作用域  => 全局
i = 0   btns[0].onclick = function(){ console.log(i) }  此时是定义函数 所以不会解析变量
i = 1   btns[1].onclick = function(){ console.log(i) }  此时是定义函数 所以不会解析变量
 ...
i = 5 跳出循环
点击按钮的时候 函数执行  但是函数内部 没有 i 那就往外去到全局作用域 全局 i = 5   就直接拿来用
*/
```

```js
const btns = document.querySelectorAll('button')
        for(let i = 0 ; i < btns.length ; i++){
            // i = 0 、 1 、 2 ...
            btns[i].onclick = function(){
                console.log(i)
            }
        }
/* 
let  const  声明的变量和常量 受所有 {} 限制使用范围
i = 0 
 for(){ 
 // let i = 0
 btns[0].onclick = function(){ console.log(i) }
            }
            i = 1 
            for(){ 
                // let i = 1
                btns[1].onclick = function(){ console.log(i) }
            }
    当你点击按钮的时候 函数执行 开始解析变量
    函数内部  没有 i 那就往上 去到了 for {} 里面  , {} 里面  有 i 变量 就不会继续往上
*/
```

### 十二、改变this指向的方式

this 指向 不看函数定义 只看怎么调用

​      1、函数名() this => window

​      2、***.函数名() this => .前面的东西

​      3、事件处理函数 this => 事件源

​      4、定时器 this => window

 改变**普通函数** this 指向

1、call()

第一个参数 就是 this 指向

第二个参数开始 就是依次给函数传参

会立即调用函数

```js
function fn(arg,arg1){
            console.log(this)
            console.log(arg,arg1)
        }
fn.call(obj,123,456)
```

2、apply()

第一个参数 是 this 指向

第二个参数 是一个数组 数组里面的每一项就是依次给函数传参

 会立即调用函数

```js
fn.apply(dv,[1,2])
```

3、bind()

第一个参数 是 this 指向

不会立即调用函数 返回的是一个已经改变了 this 指向的新的函数

```js
const res = fn.bind(dv)
// console.log(res === fn)
res(100,200)
//fn.bind(dv)(100,200)
```

函数自调用 this => window

```js
(function(){
            console.log(this)
        })()

!function fn(){
            console.log(this)
        }()

~function fun(){
            console.log(this)
        }()
```

# 

### 一、把伪数组变成真数组 Array.from()

# 

### 一、swiper

### 二、面向对象

面向对象 OOP 

不是一个具体的技术 只是一种编程思想

核心: 高内聚 低耦合

#### 一、工厂函数创建对象

```js
//调用这个函数希望得到一个对象
function createPerson(name,age){
                const obj = {}
                obj.name = name 
                obj.age = age
                return obj
            }
const p1 = createPerson('Jack',18)
const p2 = createPerson('Rose',12)
const p3 = createPerson('Laowang',81)
console.log(p1)
console.log(p2)
console.log(p3)
```

#### 二、自定义构造函数创建对象

```js
/* 
new Swiper()
new Array()
new Date()
new Object()
new String()
new RegExp()
使用构造函数创建对象  先看 JS 有没有给我提供这个 构造函数  如果没有  那就自己造一个
*/
```

 new 作用 

​      1、创造一个对象

​      2、让构造函数内部的 this 指向实例化对象

​      3、使用 new 关键字创造出来的对象 叫做 **实例化对象**

```js
function createPerson(name,age){
            // console.log(this)
            // const obj = {}
            this.name = name
            this.age = age
            // return obj
            this.sayHi = function(){
                console.log('你好鸭')
            }
        }
// 使用 new 关键字创造出来的对象  叫做  实例化对象
const p1 = new createPerson('Jack',13)
const p2 = new createPerson('Rose',31)
console.log(p1)
console.log(p2)
p1.sayHi()
p2.sayHi()
console.log(p1.sayHi === p2.sayHi)
```

#### 三、原型对象

原型对象 每一个函数天生自带一个成员 叫做 prototype 是一个对象空间

构造函数也是函数 所以也有 prototype 

把构造函数的方法放到 这个 prototype 对象空间里面去

```js
function CreatePerson(name,age){
            this.name = name 
            this.age = age
        }

CreatePerson.prototype.sayHi = function(){
            console.log('你好');
        }
const p1 = new CreatePerson('Jack',18)
```

#### 四、原型属性

原型属性 : 每一个对象天生自带一个属性 叫做  _ proto_  指向所属构造函数的 prototype

```js
 function CreatePerson(name,age){
            this.name = name 
            this.age = age
        }
CreatePerson.prototype.sayHi = function(){
            console.log('你好');
        }
CreatePerson.prototype.abc = 123
p1.sayHi()

//p1 身上本身没有 sayHi
// 就去到  __proto__ 里面找  实际上就是去到 CreatePerson.prototype 里面找

// 实例化对象  也是对象  所以他也有 __proto__  属性
// p1.__proto__ => CreatePerson.prototype  
```

访问对象的某一个属性 

1、如果有就直接拿来用 

2、如果对象身上没有 就去到 _ proto_  里面去找 找到了直接拿来用

3、如果找不到 继续往上 去到 所属构造函数.prototype._ proto_  里面找 找到直接拿来用

4、如果找不到继续往上 直到找到 Object.prototype 有就拿来用 没有就是 undefined

#### 五、所属构造函数

每一个**没有明确所属构造函数**的对象 所属构造函数都是 **Object**

 constructor 出厂证明 代表着一个对象 是由那一个构造函数创建的

#### 六、原型链

原型链_ proto_  就是由和 prototype 组成的链状结构

**原型链的终点**   null

每一个对象 都有_ proto_   属性

给对象添加一个属性 添加只能添加给对象本身

# 

### 一、ES6类

1、 ES6 类 class 关键字

constructor(){}

this 指向实例化对象

```js
class CreatePerson{
            constructor(name,age){
                // this 指向实例化对象
                this.name = name 
                this.age = age
                // console.log(this)
                this.sayHi()
            }
            sayHi(){
                console.log(this.name )
            }
        }
        // 类 只能和 new 连用
        const p1 = new CreatePerson('Jack',18)
        console.log(p1)
        // p1.sayHi()
```

### 二、classList

classList 属性返回元素的类名

方法：

1、add(*class1, class2, ...*)

在元素中添加一个或多个类名。

如果指定的类名已存在，则不会添加

2、contains(*class*)

返回布尔值，判断指定的类名是否存在。

3、remove(*class1, class2, ...*)

移除元素中一个或多个类名。

**注意：** 移除不存在的类名，不会报错。

4、toggle(*class,* true|false)

在元素中切换类名。

第一个参数为要在元素中移除的类名，并返回 false。

如果该类名不存在则会在元素中添加类名，并返回 true。

第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在

# 

### 一、Http

[文档](https://www.runoob.com/http/http-tutorial.html)

HTTP协议（HyperText Transfer Protocol，超文本传输协议）是因特网上应用最为广泛的一种网络传输协议，所有的WWW文件都必须遵守这个标准。

#### 一、http 请求方法

1、GET

2、POST

3、PUT

4、DELETE

5、HEAD

6、PATCH

[GET 与 POST 区别](https://www.runoob.com/tags/html-httpmethods.html)

#### 二、[http 消息结构](https://www.runoob.com/http/http-messages.html)

1、请求结构

```js
// 第一行：请求行
// 第二行开始：请求头信息
// 空行
// 请求主体
```

2、响应结构

```js
// 第一行：响应状态行
// 第二行开始：响应头信息
// 空行
// 响应主体
```

#### 三、http 状态码

1xx：消息，服务器收到请求，需要请求者继续执行操作

2xx：成功，操作被成功接收并处理

3xx：重定向，需要进一步的操作以完成请求

4xx：通常是**客户端**错误，请求包含语法错误或无法完成请求

5xx/6xx：通常是**服务端**错误，服务器在处理请求的过程中发生了错误

常见状态码：

- 200：OK 请求成功。一般用于GET与POST请求
- 304：Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 403：Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
- 404：Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
- 500：Internal Server Error 服务器内部错误，无法完成请求
- 502：Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应

#### 四、Content-Type

```
multipart/form-data
application/x-www-form-urlencoded
```

```html
<form method="POST" action="/do" enctype="application/x-www-form-urlencoded">
    <input type="text" name="username" />
    <button>提交</button>
</form>

<form method="POST" action="/do" enctype="multipart/form-data">
    <input type="file" name="header" />
    <button>上传</button>
</form>
```

### 二、NodeJS

运行服务器端的 JavaScript。主要用于开发服务端应用。

基于 Google 的 V8 引擎。

#### 一、安装

window 系统下，直接使用 *.msi 安装文件安装即可。

在命令提示符(win + r运行cmd)下：

```bash
$ node -v
```

如果能够看到安装的 Node 版本，则说明成功。

#### 二、npm

node package manager（Node包资源管理器）

可用于从 Node 平台上安装项目中使用到的工具（库），在命令行中输入：

```bash
$ npm install <package-name>
```

在安装包之后，会在项目目录下生成 `node_modules` 目录。

#### 三、package.json

是项目的配置文件

可使用如下命令生成该文件：

```bash
$ npm init -y
```

#### 四、dependencies

保存了项目生产环境（项目发布部署时环境）下依赖的包资源信息。

#### 五、devDependencies

保存的是项目开发环境下依赖的包资源

在 `npm install <package-name>` 安装包资源时，会向 `package.json` 文件中添加相关的包信息，方便在项目移植时，不需要拷贝 `node_modules` 文件夹。

#### 六、nodemon

nodemon 可监视文件的修改，当文件修改后，能够自动重启 NodeJS 应用程序。

全局安装：

```bash
$ npm install nodemon -g
```

#### 七、Express

基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架

#### 八、创建 Web 服务器

1. 创建项目目录
2. 在项目根目录中生成 package.json 文件：

```bash
$ npm init -y
```

3. 在项目根目录中打开 cmd，安装 express 包：

```bash
$ npm i express
```

4. 在项目根目录下创建 index.js 文件：

```js
// 1. 引入 express
const express = require('express')

// 2. 创建 Express 对象实例
const app = express()

// 用于处理请求主体的数据
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 托管静态资源，即首先在 public 目录下查找所访问的静态资源
app.use(express.static('public'))

// 3. 监听端口，等待客户端连接
app.listen(9527, () => {
  console.log('Server running at http://localhost:9527')
})
```

5. 运行服务器：

```bash
$ nodemon index.js
```

6. 处理 GET/POST 请求：

```js
// 处理 GET 请求：处理用户登录
app.get('/login.do', (request, response) => {
  // 从请求中获取参数（GET）--查询字符串参数
  const { username, password } = request.query
  // 处理用户名与密码
  // TODO......
  if (username === 'test' && password === 'abc') {
    response.send('用户登录成功')
  } else {
    response.send('用户名或密码错误')
  }
})

// 处理 POST 请求：处理用户登录
app.post('/login.do', (request, response) => {
  // 从请求中获取参数（POST）-- 从请求主体中解析
  const { username, password } = request.body
  // 处理用户名与密码
  // TODO......
  if (username === 'test' && password === 'abc') {
    response.send('用户登录成功')
  } else {
    response.send('用户名或密码错误')
  }
})
```

### 三、[MDN](https://developer.mozilla.org/)

### 四、将地址栏中查询字符串转换为对象：

```js
location.search.slice(1).split('&').reduce((result, curr) => { const [name, value] = curr.split('='); result[name] = value; return result; }, {})
```

# 

### 一、MySQL

数据库 -- 存储数据的仓库

关系型数据库 -- 使用表格来描述关系（用表格存储数据）

#### 一、数据类型

- 数字：INT，DECIMAL, NUMERIC......
- 文本：CHAR, VARCHAR, TEXT......
- 日期时间：DATE, TIME, DATETIME, TIMESTAMP......

#### 二、主键

作用：唯一标识表中的数据记录

#### 三、安装

#### 四、使用

1. 使用 Navicat for MySQL 创建连接
2. 创建数据库：在打开的连接上右键->新建数据库->取数据库名称，选择字符集（utf8 -- UTF-8 Unicode），排序规则（utf8_unicode_ci）
3. 进入数据库，创建表格（用于保存数据）：定义列名、数据类型、长度、是否自增、是否为主键
4. 表格创建，可实现数据的添加、查询、修改、删除操作 (CRUD)

#### 五、SQL 语句

SQL -- 结构化查询语言，如：`INSERT INTO `students` (`name`, `sex`, `birthday`, `address`, `phone`) VALUES ('张三', '男', '2004-06-23', '成都', '13100998877')`

##### 插入数据

```sql
-- 语法
INSERT INTO 表名 (列名1, 列名2, ...) VALUES (列值1, 列值2, ...)

-- 示例
INSERT INTO `students` (`name`, `sex`, `birthday`, `address`, `phone`) VALUES ('张三', '男', '2004-06-23', '成都', '13100998877')
```

##### 修改数据

```sql
-- 语法
UPDATE 表名 SET 列名1=列值1, 列名2=列值2 WHERE 条件

-- 示例：
UPDATE `students` SET `birthday`='2010-01-01' WHERE (`id`='2')
```

##### 删除数据

```sql
-- 语法
DELETE FROM 表名 WHERE 条件

-- 示例：
DELETE FROM `students` WHERE (`id`='3')
```

##### 查询数据

```sql
-- 语法
SELECT 列名1, 列名2, ...
FROM 表名
WHERE 条件
LIMIT 起始索引,限定记录条数
ORDER BY 排序列 ASC(升序)|DESC(降序)

-- 模糊查询
-- LIKE
-- 示例：SELECT * FROM students WHERE name LIKE '张%'
-- % 表示匹配任意长度的字符串
-- _下划线 表示替代一个字符
-- 聚合函数
-- COUNT()、MAX()、MIN()
-- 示例：SELECT COUNT(*) FROM students

-- 分页查询
LIMIT 起始索引,限定记录条数
```

### 二、NodeJS 连接 MySQL 数据库

#### 安装驱动

```bash
$ npm install mysql
```

#### 连接数据库

```js
/* 连接数据库 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost', // 数据库服务器
  user: 'root', // 登录数据库的用户名
  password: '123456', // 登录密码
  database: 'h52103' // 连接的数据库名称
})
connection.connect()
```

#### CRUD

```js
/* 数据库 CRUD */
// 添加数据
app.get('/add', (req, res) => {
  // 定义 SQL 语句
  const sql = 'INSERT INTO students (name, sex, birthday, phone, address) VALUES (?, ?, ?, ?, ?)'
  // 各列参数数据
  const params = ['老刘', '男', '1965-09-23', '13455667788', '广东深圳']
  // 执行 SQL 语句
  connection.query(sql, params, (error, result) => {
    if (error) {
      res.send('添加学生信息出错：' + error.message)
      return
    }

    console.log('添加成功：', result)
    res.send('添加成功')
  })
})
```

### 三、JSON

**JavaScript Object Notation**

**JSON 是存储和交换文本信息的语法**

本质上 JSON 是一个字符串，在这个字符串中可以表示出 JavaScript 中的各种数据值（数字、字符串、对象、数组等等），如：

```json
"3"

"true"

'{"name": "张三", "age": 18}'

'[{"province": "四川"}, {"province": "广东"}]'
```

注意：

- JSON 中表示的字符串内容**必须**使用双引号包含
- JSON 中表示的对象属性名称**必须**使用双引号包含
- JSON 中表示的对象或数组末尾**不能**出现多余的尾逗号
- JSON 是在前后端通信时经常使用到的数据格式

#### 内置对象 JSON

1、JSON.parse()

parse() 方法是用于将JSON字符串解析为 JS 表示的数据值（反序列化）

如：

```js
JSON.parse('[{"province": "四川"}, {"province": "广东"}]')
```

2、JSON.stringify()

stringify() 方法是用于将 JS 的值转换为 JSON 字符串内容（序列化）

如：

```js
JSON.stringify({name: 'abc'})
```

# 

### AJAX

[W3School教程](https://www.w3school.com.cn/ajax/index.asp)

Asynchronous JavaScript and XML （异步 JavaScript 和 XML 技术）

AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。

无刷新技术

好处：实现页面局部更新，有效利用网络带宽，提升用户体验

缺点：不利于SEO

**A**synchronous：异步

**J**avaScript：核心对象 **XMLHttpRequest** (xhr)，这个核心对象提供了浏览器中连接服务器的能力

**X**ML：可扩展标记语言，主要用于数据的传递（JSON）

### 使用

步骤（类比打电话）：

1. 创建核心对象（掏出手机）

   ```js
   const xhr = new XMLHttpRequest()
   ```

2. 准备建立连接（按电话号码）

   ```js
   // xhr.open(method, url, async)
   // method: 请求方法-GET/POST
   // url：请求资源的地址
   // async：是否异步 true-异步 false-同步
   xhr.open('GET', `/login.do?username=${username}&password=${password}`, true)
   ```

   GET 请求方法，是将向后端传递的数据使用 `?` 号拼接在 url 后;

   POST 请求方法，要向后端传递数据，需要在 `send()` 方法的参数中传递，并且要在调用 `send()` 方法前，设置请求头：

   ```js
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
   ```

3. 发送请求（拨号）

   ```js
   // 发送请求
   // xhr.send(params)
   // params：可选，是需要向后端发送的数据，POST 请求时传递参数
   xhr.send()
   ```

4. 等待，准备处理响应（等待对方接通电话）

   **readyState:**

   0: 请求未初始化

   1: 服务器连接已建立

   2: 请求已接收

   3: 请求处理中

   4:请求已完成，且响应已就绪

   **status：HTTP 状态码**

   200: OK，成功

   404: 未找到页面

   **responseText**

    获得字符串形式的响应数据

   **responseXML**

   获得 XML 形式的响应数据。

   res.json()：传送JSON响应

   ```js
    xhr.onreadystatechange = () => {
           // readyState：就绪状态码，表示的是请求到达哪个阶段
           // 4: 请求处理完毕，响应就绪
           if (xhr.readyState === 4) {
             // status：HTTP 状态码
             // 200: OK，成功
             if (xhr.status === 200) {
               console.log('可以获取到服务端响应的数据')
               // 获取响应数据
               const data = JSON.parse(xhr.responseText)
               console.log('数据：', typeof data)
   
               // 后续数据处理逻辑
               if (data.code === 200) { // 登录成功
                 $('.container').innerHTML = `用户昵称：${data.data.userInfo.nickName}`
               } else { // 登录失败
                 $('.container').innerHTML = '用户名或密码错误'
               }
             } else {
               console.log('请求异常...')
             }
           }
         }
   ```

   #### 跨域访问

   ```js
   Access to XMLHttpRequest at 'http://localhost:3000/login.do?username=abc&password=test' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
   ```

   通常公司前后端分离的项目中，后端有后端的开发环境，前端会有前端的开发环境，如果前端需要访问获取到后端接口的数据，则很大概率会跨域。

   ##### 同源策略

   同源策略是浏览器的安全策略。

   URL格式:
   
   ```bash
   协议://域名:端口/资源路径?查询字符串#hash
   ```

   同源：

   协议、域名、端口 完全一致表示的是同源资源。

   如：
   
   ```html
   // 同源，如：
   http://localhost:3000/login.html
   http://localhost:3000/login.do
   
   // 非同源，如：
   http://localhost:3000/login.html
   https://localhost:3000/register.html
   http://127.0.0.1:3000/register.html
   ```

   只要 协议、域名、端口 有任何一个不同，都是非同源的资源，非同源资源间的访问就叫作跨域。

   默认情况下，浏览器是禁止跨域访问的。

   ### 解决跨域问题
   
   - CORS （跨域资源共享）
   
     - 这是需要在服务端设置，可允许 GET/POST/PUT 等多种请求跨域。
     - Cross-origin resource sharing
     - 校验浏览器跨域发起 ajax 请求
     - 实现CORS通信的关键是服务器，只要服务器实现了CORS接口，就可以跨源通信。（前端与同源ajax请求代码写法一致）
     - 在服务端设置响应头信息中的 `'Access-Control-Allow-Origin': *`，该字段是必须的，`*`表示接受任意域名的请求。
     - `**Access-Control-Request-Method**` 字段可设置允许跨域请求的方法：GET/POST/PUT/DELETE/OPTIONS...
   
     - 在服务端设置响应头信息中的 `'Access-Control-Allow-Origin': *`
   
       ```js
       // 解决跨域：CORS
       app.use((req, res, next) => {
         res.set('Access-Control-Allow-Origin', '*')
         next()
       })
       xhr.open('GET',`http:localhost:4444/login.do?username=${username}&password=${password}`,true)
       ```
   
   - JSONP（JavaScript Object Notation Padding）
   
     - 原理：前端利用 `<script src="外部JS资源">` 不受同源策略限制的特点，来实现跨域访问服务端资源。
     - 注意：JSONP 只能解决 **GET** 方法的跨域
     - 前端：
       - 定义一个全局函数，用于处理从服务端获取到的数据，函数参数即为获取的数据内容
       - 动态创建 `<script>` 元素，设置 `src` 属性为服务端接口的 URL，并传递一个 `callback` 的参数（callback 参数值为刚才定义的全局函数名字符串）
       - 将动态创建的 `<script>` 添加到页面中（`document.body.appendChild(_script)`）。当节点添加到页面后，浏览器会自动发起对 `src` 指定资源的网络请求。
       - 响应返回会自动执行全局函数调用，可将添加到页面中的 `<script>` 节点删除。
     - 后端：
       - 后端需要向前端返回一段 JavaScript 脚本的文本信息，该文本内容为函数调用的结构，函数名由前端动态传递（callback参数），函数参数是前端需要跨域获取到的数据
   
   百度搜索建议：
   
   https://www.baidu.com/sugrec?prod=pc&wd=关键字&cb=回调函数名

# 

### HTTP 回顾：

HTTP 默认端口：80

HTTPS 默认端口：443

**HTTP三点注意事项：**

- HTTP是无连接
- HTTP是媒体独立的
- HTTP是无状态

### Cookie

[MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

作用：用于在浏览器本地保存文本数据

特点：

- 保存的是文本数据
- 有容量限制：最大保存 4KB
- 受同源策略限制
- 请求服务端资源时，cookie 会被自动携带在请求头中发送到服务端（即 cookie 会占用网络上传带宽）
- 有时效性

### 保存 cookie

```js
document.cookie = 'key=value; expires=过期时间; path=保存路径; domain=域; secure'
```

- key：保存的cookie 名
- value：保存的 cookie 值
- expires：失效时间，如果未设置，则会话结束（关闭浏览器）失效
- path：保存路径，未设置则默认为当前文档的路径，通常该值设置为 '/'
- domain：域设置
- secure：安全，需要使用 `https` 才能访问传输

### 修改 cookie

同路径下覆盖保存已有 cookie 即可实现修改 cookie

### 删除 cookie

同路径下覆盖保存已有 cookie，设置失效时间为当前时间之前任何一刻即可实现删除 cookie

### 查询 cookie

```js
const allCookies = document.cookie
```

allCookies 中包含了所有的 cookie 信息，各条 cookie (key=value) 是以 `; ` (分号+空格) 分隔开

保存或哈汉字数据时，编码与解码操作：

- encodeURIComponent(str) - 编码
- decodeURIComponent(str) - 解码

# 

### Bootstrap

[文档](https://v3.bootcss.com/)

Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

Bootstrap 是利用 media query (媒体查询) 来实现响应式原理的。

### 下载

- 生产环境
- 源码
- 基于 sass 的源码

### 使用

- 引入 bootstrap.css
- 引入 jquery.js
- 引入 bootstrap.js

### 全局CSS样式

Bootstrap 将设置全局的 CSS 样式。HTML 的基本元素均可以**通过 class 设置样式**并得到增强效果。还有先进的栅格系统。

### 布局容器

- .container：用于固定宽度并支持响应式布局
- .container-fluid：100%宽度

### 栅格系统

系统会自动将一行分为最多12列

- .row：行
- .col-xs-*
- .col-sm-*
- .col-md-*
- .col-lg-*

### 组件

Bootstrap 自带了大量可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。

### JS 插件

jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。

### 案例

错题集

- 错题 CRUD
- 用户登录-记住用户名与密码

技术栈：

- 后端
  - NodeJS + MySQL
- 前端
  - Bootstrap + ES6 + ajax + cookie

# 

### 一、作用域

通俗来讲，就是变量定义后起作用的范围

- 全局作用域
- 局部作用域或函数作用域
- 块级作用域

#### 全局作用域

定义在函数外部，能够在全局范围内使用到的变量，拥有全局作用域

#### 局部作用域（函数级作用域）

在函数体内部使用 var 定义的变量，仅在函数体内部可引用，在函数外部不能直接调用。

#### 块级作用域

- ES6 中使用 let/const 定义在一对花括号内部的变量，其作用域仅在最近的花括号内部有用，在花括号外部不能直接调用。

- IIFE （立即调用函数表达式）
  - (function() {})()
  - !function fn(){console.log(this) }()
  - ~function fun(){console.log(this)}()

#### 声明提升

是使用 var 定义变量，或使用 function 声明式定义函数时，存在的现象。

声明提升，是会将变量名或函数主体（如 function test() {} 这种方式）提升到对应其作用域的最顶部。

let/const 不存在声明提升，但存在“暂存死区”（就是在变量定义前使用变量会报错，如：`Uncaught ReferenceError: Cannot access 'greeting' before initialization`）

#### 作用域链

即在查找变量时的查找路径。

首先在变量当前的作用域下进行查找，如果能够找到，则直接使用，如果不能找到，则到外层作用域中之前查找，如果外部也找不到，则继续再到外层的外层查找，直到全局作用域，如果全局作用域中也找不到，则可能会在全局作用域中创建该变量或报错。

#### 闭包 （closure）

作用：

- 闭包让你可以在一个内层函数中访问到其外层函数的作用域。
- 可以延长外层函数中局部变量的生命周期

特点：

- 函数嵌套函数
- 在内层函数中有引用到外层函数中的局部变量（内嵌函数功能的实现依赖于外层函数中的局部变量）
- 在外层函数中返回了内嵌函数的引用

#### 使用闭包模拟私有属性

```js
// 构造函数
function Student(name, age) {
    this.name = name

    var _age
    if (age >= 18 && age <= 36) {
        _age = age
    } else {
        throw new Error('年龄非法，合法范围：18-36')
    }

    this.getAge = function() {
        return _age
    }
    this.setAge = function(age) {
        if (age >= 18 && age <= 36) {
            _age = age
        } else {
            throw new Error('年龄非法，合法范围：18-36')
        }
    }
}

const stu = new Student('小明', 18)
console.log(stu)
console.log('年龄：', stu.getAge())
stu.setAge(8)
console.log('年龄：', stu.getAge())
```

### 二、原型、原型链

- 每个对象都有 `__proto__` 隐式属性（原型属性）
- 每个函数对象都有 `prototype` 显式属性（原型对象）
- 对象中的 `__proto__` 指向的是其构造函数的 `prototype`（关联关系）

由对象属性 `__proto__` 与其构造函数 `prototype` 串联的关系就叫作原型链。

对象属性查找：首先在自身名字中查找，如果能够查找到，则返回查找到的值，如果不能找到，则到原型中查找，如果原型中也找不到，则继续到原型的原型中继续查找，直接找到为止。如果一直到达原型链终点（`Object.prototype`）都找不到，则返回 `undefined`

**原型链的终点**   null

### 三、继承

- 原型链继承：``` Student.prototype = Object.create(Person.prototype) ```

```js
function Person(name, age, sex) {
      this.name = name
      this.age = age
      this.sex = sex
    }
    Person.prototype.eat = function() {
      console.log('吃饭')
    }
    Person.prototype.sleep = function() {
      console.log('睡觉')
    }

    function Student() {}
    // 继承 Person 原型中的方法

    // 这种方式：当 Student.prototype 中添加属性时，Person.prototype 会受影响
    // Student.prototype = Person.prototype

    // 这种方式，在向 Student.prototype 中添加属性时，不会影响 Person.prototype，
    // 但创建出来的对象中可能存在冗余的属性
    // Student.prototype = new Person()

    // 原型链继承的标准书写：
    // Object.create(arg) 所创建出来的对象以参数 arg 作为其原型
    Student.prototype = Object.create(Person.prototype)

    Student.prototype.study = function() {
      console.log('学习')
    }
    const stu = new Student()
    console.log(stu)
    stu.eat()
```

- 构造函数继承：
  - 改变函数体内的 this 指向：fn.call()、fn.apply()、fn.bind()
- 组合继承
  - 构造函数继承 + 原型链继承
- ES6 class
  - 本质上是 原型链继承的**语法糖**

### 四、改变this指向

- Function.prototype.call(thisArg, arg1, arg2, arg3, ...)
- Function.prototype.apply(thisArg, arrayLike)
  - call() 与 apply() 都是立即调用函数执行，在执行过程中，将函数体中的 this 改为指向第一个参数表示的对象。如果第一个参数为 null，则表示指向全局对象（在浏览器中是 window）
  - call() 与 apply() 不同之处在于第二个参数。call() 的第二个参数是可变参数列表，是调用的函数所需要的实参列表。apply() 的第二个参数是一个数组或类(似于)数组对象。
  - call() 与 apply() 调用后的返回值是实际调用函数的返回值。
- Function.prototype.bind(thisArg, arg1, arg2, ...)
  - bind() 会返回一个新的函数（不是立即调用函数执行），新函数主体与原函数主体是一致的，当新函数被调用执行时，函数体中的 this 指向 thisArg 所表示的对象。

### 五、请快速找出数组中的最大值：

const array = [1, 5, 9, 2, -3, 4, 7]

`Math.max.apply(null, array)`

`Math.max(...array)`

# 

### 一、设计模式

设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

#### 单例设计模式

单实例，只有一个对象。提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。

```js
// 利用对象直接量来创建单例对象
const Player = {
    play() {
        console.log('播放')
    },
    stop() {
        console.log('停止')
    },
    pause() {
        console.log('暂停')
    }
}
```

```js
// ‘饿汉式’ 单例
const Player = (function() {
    function Player(list) {
        this.list = list
    }
    Player.prototype = {
        constructor: Player,
        play() {
            console.log('播放：列表')
        },
        stop() {
            console.log('停止')
        },
        pause() {
            console.log('暂停')
        }
    }

    return new Player()
}())
```

```js
// ‘懒汉式’ 单例
const Player = (function() {
    function Player(list) {
        this.list = list
    }
    Player.prototype = {
        constructor: Player,
        play() {
            console.log('播放：列表')
        },
        stop() {
            console.log('停止')
        },
        pause() {
            console.log('暂停')
        }
    }

    // 定义 instance 用于保存 Player 对象实例
    var instance = undefined
    return {
        // 获取实例
        getInstance() {
            if (!instance) {
                console.log('创建对象实例...')
                instance = new Player()
            }
            return instance
        }
    }
}())
```

#### 工厂模式

是一种创建对象的解决方案，不需要知道创建对象的具体细节。

```js
// 汽车构造函数
function Car(brand, color) {
    this.brand = brand
    this.color = color
}

// 宝马
function BMW(brand, color) {
    Car.apply(this, arguments)
}

// 奥迪
function Audi(brand, color) {
    Car.apply(this, arguments)
}

// 定义工厂函数，用于创建汽车对象
function createCar(type) {
    switch(type) {
        case 'bmw':
            return new BMW('宝马001', '白色')
        case 'audi':
            return new Audi('奥迪005', '黑色')
    }
}

// 使用者，需要从工厂中获取对象来使用
var car1 = createCar('bmw')
var car2 = createCar('audi')
```

# 

# jQuery

[官网](https://jquery.com/)

write less, do more

jQuery 是一个 JS 库，对常用的 JS 操作（DOM操作、事件、运动、ajax......）作了封装

原理

[在线中文文档](https://jquery.cuishifeng.cn/)



DOM 对象   --------   jQuery 对象

jQuery 对象中包装了 DOM 对象的内容，即 jQuery 对象是一个类数组对象，每个索引处的元素是对应包装 DOM 元素。

使用 $(arg) 来创建 jQuery 对象实例。参数可以是选择器、DOM对象、HTML文本

#### 一、使用

下载

引入使用

- ready(callback) -- callback 回调函数会在页面 DOM 结构加载结束时执行。window.onload 是在页面内容加载完毕后才执行。ready() 方法有简写形式：$(function() {}) （完整写法：$(document).ready(function(){})）

#### 二、选择器

主要使用选择器在文档中查找元素节点

#### 核心

- jQuery()/$()
- each()
- index()
- data()
- $.fn.extend()
- $.extend()

#### 三、文档处理（DOM增删改）

- append()
- remove()

#### 四、筛选（DOM查找）

#### 五、属性

- attr() - getAttribute()/setAttribute()
- prop()：通常 checked、disabled、selected 使用这个方法获取/设置
- html()
- text()
- val()

#### 六、CSS

#### 七、效果（运动）

- animate()
- fadeIn()
- fadeOut()

#### 八、事件

- on()
- hover()

#### 九、ajax

- $.ajax()

# 

### window.requestAnimationFrame

**`window.requestAnimationFrame()`** 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

# 

### 模板引擎

利用模板，在传递不同数据时，能够快速渲染布局结构的内容。

- [art-template](http://aui.github.io/art-template/zh-cn/)
- [handlebars](https://www.handlebarsjs.cn/)
- [ejs](https://ejs.bootcss.com/)
- ......

### art-template

art-template 是一个简约、超快的模板引擎

下载

[template-web.js](https://unpkg.com/art-template/lib/template-web.js)

### 浏览器中模板框架

```html
<script type="text/html" id="my-template">

</script>
```

### 模板语法

### 标准语法（简洁语法）

输出：

```html
{{ value }}
{{ a ? b : c }}
```

条件：

```html
{{if 条件1}}

{{else if 条件2}}

{{else}}

{{/if}}
```

循环：

```html
{{each target value index}}

{{/each}}
```

### 原始语法

输出：

```html
<%= value %>
<%= a ? b : c %>
```

条件：

```html
<% if (条件1) { %>

<% } else if(条件2) { %>
    
<% } else { %>
    
<% } %>
```

```html
<% switch(表达式) {
   	case '常量1'
%>
    
<%
   		break;
   case '常量2':
%>
             
<% } %>
```

循环：

```html
<% for (表达式1; 表达式2; 表达式3) { %>
    
<% } %>
```

### API

template() 语法：

```js
const html = template('模板id', 模板中渲染使用到的数据对象)
```

### jQuery 插件机制

$.fn.extend()

$.extend()

# 

版本控制系统

- SVN
- Git

管理着随时间改变的数据，数据放置在一个中央资料档案库（版本库），它会记住每一次文件的变动。 这样你就可以把档案恢复到旧的版本, 或是浏览文件的变动历史。

### Git

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

分布式指的是不必服务器端软件支持，在客户端可直接维护版本库的方式。

#### 安装

安装后测试：

```bash
$ git --version
```

如果能够看到有版本信息，则说明安装成功。

#### 全局配置

```bash
$ git config --global user.name 用户名称
$ git config --global user.email 用户email地址
```

#### 概念

- **工作区：**就是你在电脑里能看到的目录。
- **暂存区：**英文叫 stage 或 index。一般存放在 **.git** 目录下的 index 文件（.git/index）中
- **版本库：**工作区有一个隐藏目录 **.git**

#### 使用

- 初始化版本仓库

在项目目录中使用右键打开 `git bash here`，在弹出的命令行窗口中输入：

```bash
$ git init
```

初始化版本库后，在项目根目录中生成 `.git` 的隐藏目录。

- 基本操作：

  - 查看版本库状态：

  ```bash
  $ git status
  ```

  红色提示的文件表示未被跟踪处理的资源，绿色提示的文件表示添加到暂存区中的资源

  - 添加暂存区

  ```bash
  $ git add <file>...
  ```

  如果是使用文件名添加到暂存区，则在 `git add` 后直接跟文件名即可，如果需要添加多个文件到暂存区，则使用空格将文件名隔开。

  如果需要将所有文件的更新添加到暂存区，可使用 `git add .` 或 `git add -A` 

  - 提交本地版本库

  ```bash
  $ git commit -m 'flag: message'
  ```

  flag 表示当前提交版本库的操作类型，通常可以有：

  feat: 添加的新特性

  fix：修复 bug

  chore：项目架构搭建

  refactor：重构

  test：测试

  doc：文档

  ......

  **注意：**如果提示在提交版本库时未发现用户名等信息，则需要全局配置：

  ```bash
  $ git config --global user.name 用户名称
  $ git config --global user.email 用户email地址
  ```

  - 查看版本提交日志

  ```bash
  $ git log
  ```

  - 克隆远程中央仓库

  ```bash
  $ git clone <远程中央仓库的地址>
  ```

  将指定远程中央仓库中的源代码下载到本地

  - 与远程仓库关联

  ```bash
  $ git remote add <name> <url>
  $ git remote remove <name>
  ```

  - 推送本地仓库到远程中央仓库：

  ```bash
  $ git push origin master
  ```

  - 拉取远程中央仓库中最新的代码到本地：

  ```bash
  $ git pull origin master
  ```

#### 分支管理

- 创建分支：

```bash
$ git branch <name>
```

- 查看所有分支

```bash
$ git branch
```

- 切换分支

```bash
$ git checkout <branch-name>
```

- 创建并切换到新分支：

```bash
$ git checkout -b <branch-name>
```

- 删除分支

```bash
$ git branch -d <branch-name>
```

### 远程仓库

- [github](https://github.com/)：https://github.com/
- 码云（[gitee](https://gitee.com/)）：https://gitee.com/
- [coding](https://coding.net/)：https://coding.net/
- gitlab：公司自建 git 服务器时可能使用

#### 使用

##### 注册账号

##### 创建远程中央仓库

##### 关联远程中央仓库与本地仓库

```bash
$ git remote add origin <仓库地址>
$ git push origin master
```

#### SSH key 配置

- 在本地生成用于 ssh 认证的 rsa 公私钥对：

```bash
$ ssh-keygen
```

在生成过程中有输入文件保存位置与私钥文件保护密码，先不用输入，直接回车。

在操作系统的用户目录中，会生 `.ssh` 目录，进入该目录中，可以看到两个文件：`id_rsa` 与 `id_rsa.pub` ，`id_rsa.pub` 是公钥文件。

- 进入码云用户设置页面，添加 安全设置中的 `SSH 公钥` 设置：

将 `id_rsa.pub` 公钥文件中的文本内容全选复制后，粘贴到 码云的 `SSH公钥` 设置的文本框中。然后确认添加。

- 测试是否配置成功：

```bash
$ ssh -T git@gitee.com
```

如果看到提示：

```bash
The authenticity of host 'gitee.com (180.97.125.228)' can't be established.
ECDSA key fingerprint is SHA256:FQGC9Kn/eye1W8icdBgrQp+KkGYoFgbVr17bmjey0Wc.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

输入 `yes`，然后可连接远程服务器验证配置。 

如果可以看到类似如下提示，则说明配置成功：

```bash
Hi 小明! You've successfully authenticated, but GITEE.COM does not provide shell access.
```

**注意：**SSH-key 配置一次即可，以后本地电脑使用 ssh 协议，可以在提交版本库时不需要输入用户名与密码登录。

### 使用 Git 流程

#### 安装/配置环境

到公司分配计算机后，安装开发环境，安装 git。

安装 git 后先配置全局的 `user.name` 与 `user.email`。

然后可以生成 `ssh key`，并与远程中央仓库配置关联（将本地生成的 ssh key 公钥粘贴到远程中央仓库的个人设置中）。

#### 项目中

- 如果本地没有源代码，则克隆项目源代码到本地

```bash
$ git clone <仓库地址>
```

如果本地已经有项目的源代码，则直接更新最新代码到本地即可

```bash
$ git pull origin master
```

- 在本地工作空间中实现编码（添加或更新代码）
- 在完成一个任务并通过测试后，提交本地版本库

```bash
$ git add -A
$ git commit -m 'message'
```

- 将本地版本库推送到远程中央仓库中（上传代码）：

```bash
$ git push origin master
```

# 

## require.js

[技术文章](https://www.runoob.com/w3cnote/requirejs-tutorial-1.html)

[官网](https://requirejs.org/)

require.js 是一个模块装载器，可以使用 require.js 来帮助我们管理有依赖关系的资源，优点：

- 防止js加载阻塞页面渲染
- 防止页面加载时过多的引入外部 js 资源（在引入外部 js 资源时，需要注意引入的先后顺序，因为可能引入的 js 资源间有相互依赖关系）

### 模块化规范

- AMD - 异步模块定义 - require.js
  - define() - 定义模块
  - require() - 引入依赖模块
- CMD - 通用模块定义 - sea.js
- CommonJS - NodeJS
  - require() - 引入依赖模块
  - module.exports 或 exports
- ES6 Modules
  - import - 引入模块
  - export - 定义模块

### 使用

#### 下载

[requirejs.min.js](https://requirejs.org/docs/release/2.3.6/minified/require.js)

#### 基本 API

三个全局变量：

- require：函数，可以调用该函数来加载依赖模块，并执行加载模块后的回调函数
- requirejs
- define：函数，可以调用该函数来定义模块

require 与 requirejs 是等价的。

##### require

```js
require(array, callback)
```

- array：数组，元素是依赖模块的路径或短名称
- callback：回调函数，是在引入依赖模块后执行到的回调函数

##### define

```js
define(name, array, callback)
```

- name：可选，字符串，是定义模块的名称
- array：可选，数组，是定义当前模块时所依赖的其它模块
- callback：函数，是当前定义模块所要执行的任务

##### require.config()

用于对 require 进行相关配置

```js
require.config({
    baseUrl: './libs', // 基础路径
    paths: { // 各模块的短名称
        jquery: 'jquery.1.12.4.min',
        artTemplate: 'template-web',
        'jquery.elevatezoom': 'jquery.elevatezoom.min'
    },
    shim: { // 垫片
        'jquery.elevatezoom': ['jquery']
    }
})
```

## Gulp

自动化构建工具，可用于做代码压缩、编译、性能优化等。

### 使用

#### 安装

全局安装命令行工具

```bash
$ npm i gulp-cli -g
```

全局安装 gulp 命令行工具

安装成功后，在命令行中可以使用 `gulp` 命令执行任务。

```bash
$ gulp --version
```

如果能够查看到版本信息，则说明安装成功。

如果安装过程报错，可尝试先删除已安装资源：

```bash
$ npm rm --global gulp
```

再重新安装。

##### 创建项目目录，生成 package.json

```bash
$ npm init -y
```

##### 项目下本地安装 gulp

```bash
$ npm i gulp
```

#### 创建 gulpfile 文件

在项目根目录下，创建名为 `gulpfile.js` 的文件，文件内容如下：

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

#### 测试

```bash
$ gulp
```

在项目根目录下执行 gulp 任务。由于默认任务为空，所以没有任何的操作。



JS数据类型：

- Number
- String
- Boolean
- Object
- Undefined
- Null
- Symbol ( ES 2015)
- Bigint (ES 2020)

typeof 计算的结果值的数据类型为字符串，该字符串中可能取值有：

- 'number'
- 'string'
- 'boolean'
- 'object'
- 'undefined'
- 'function'
- 'symbol'
- 'bigint'

# 

在 npm 安装资源包时，可先全局更改 npm 镜像源（原始资源包下载是从 npmjs.org 下载的，由于是国外服务器，所以速度有时会比较慢）：

```bash
$ npm config set registry https://registry.npm.taobao.org/
```

如果要编译 sass，设置 node-sass 安装镜像源：

```bash
$ npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
```

## Gulp

[官网](https://gulpjs.com/)

[中文网](https://gulpjs.com.cn/)

#### 全局安装 gulp 命令行工具(gulp-cli)

只需要安装一次，如果已经安装过，可不用再次执行：

```bash
$ npm install gulp-cli -g
```

当全局安装成功后，可在命令行中使用 `gulp` 命令执行任务。

#### 在项目中使用 gulp 实现自动化构建

- 创建项目，在项目根目录下生成 `package.json`：

```bash
$ npm init -y
```

- 在项目中安装 gulp （本地安装）：

```bash
$ npm install gulp
```

- 在项目根目录下（与 `package.json` 同目录下）创建 `gulpfile.js` 文件：

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

- 可以在命令行中使用 `gulp` 命令执行任务：

```bash
$ gulp <任务名称>
```

当 `gulp` 命令后未跟任务名称时，执行的是默认任务（default）

- 安装 `gulp` 插件实现相关操作：

  - [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)：压缩 JavaScript 代码

    - 安装 gulp-uglify：`npm i gulp-uglify -D`
    - 修改 `gulpfile.js` 文件内容：

    ```js
    // 引入依赖模块
    const gulp = require('gulp')
    const uglify = require('gulp-uglify')
    
    // 定义路径，将需要处理文件的路径添加到对应属性中保存
    const paths = {
      js: { // js 文件路径
        src: 'src/js/**/*.js', // 源代码路径 
        dest: 'dist/js', // 压缩后的目标位置
      }
    }
    
    // 定义函数，用于处理 js 压缩任务
    function scripts() {
      return gulp.src(paths.js.src, { sourcemaps: true })
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest))
    }
    
    // 定义私有任务
    const build = gulp.series(gulp.parallel(scripts))
    
    // 作为默认任务导出
    exports.default = build
    ```

    - 在命令行中执行 `gulp` 命令

  - [gulp-babel](https://www.npmjs.com/package/gulp-babel)：实现 ES6+ 代码的转译

    - 安装：`npm install --save-dev gulp-babel @babel/core @babel/preset-env` - 不考虑老版本浏览器兼容。如果考虑老版本浏览器兼容问题，将 ES6 要转换为 ES5 的代码，则`npm install --save-dev gulp-babel@7 babel-core babel-preset-env`

  - gulp-concat：连接，合并文件，可将多个独立文件合并为一个文件

  - gulp-rename：重命名

  - gulp-clean-css：压缩 css

  - gulp-sass：编译 scss 文件

    - node-sass 源配置：`npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass`

  - gulp-htmlmin：压缩html文件

## CSS 预处理器

以类似于 JavaScript 的编程式思维来实现 CSS 开发，比如定义变量，使用流程控制语句，定义函数等。

- [sass](https://www.sass.hk/)
- less
- stylus

### SASS

`sass`基于`Ruby`语言开发而成。

文件后缀：`*.sass`、`*.scss`（推荐），两种后缀的文件在语法格式上不同

#### 变量

使用 $ 作为前缀，定义变量，如：

```scss
$color: #fff;
```

#### 嵌套

```scss
.container {    width: 100px;        .content {        height: 200px;                .box {            background: #ccc;        }                &:hover {            background: #ccc;            color: #f00;        }    }}
```

#### 其它语法

......

#  PC 项目案例

-   创建远程中央仓库源代码库
-   将远程中央仓库克隆到本地

```bash
$ git clone <repo.url>
```

-   在工作空间中，创建 src 目录，用于放置项目中自己书写的源代码
-   在工作空间根目录下，创建 package.json 文件：

```bash
$ npm init -y
```

-   在 package.json 文件添加依赖项：

```json
{
    "devDependencies": {
        "del": "^6.0.0",
        "gulp": "^4.0.2",
        "gulp-htmlmin": "^5.0.1",
        "gulp-uglify": "^3.0.2",
        "babel-core": "^6.26.3",
        "babel-preset-env": "^1.7.0",
        "gulp-babel": "^7.0.1",
        "gulp-sass": "^4.1.0",
        "node-sass": "^6.0.0",
        "gulp-clean-css": "^4.3.0"
    }
}
```

-   根据 package.json 文件中的依赖安装依赖包资源：

```bash
$ npm i
```

-   在工作空间根目录下，创建 gulpfile.js 文件：

```js
// 引入依赖模块
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const html = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const del = require('del')

// 定义路径，将需要处理文件的路径添加到对应属性中保存
const paths = {
    html: {
        src: 'src/**/*.html',
        dest: 'dist',
    },
    css: {
        src: 'src/css/**/*.css',
        dest: 'dist/css',
    },
    scss: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css',
    },
    js: {
        // js 文件路径
        src: 'src/js/**/*.js', // 源代码路径
        dest: 'dist/js', // 压缩后的目标位置
    },
    libs: {
        src: 'src/libs/**/*.*',
        dest: 'dist/libs',
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dist/images',
    },
}

// 定义函数，用于处理 js 压缩任务
function scripts() {
    return gulp
        .src(paths.js.src, { sourcemaps: true })
        .pipe(
            babel({
                // 转译
                presets: ['env'],
            })
        )
        .pipe(uglify()) // 压缩
        .pipe(gulp.dest(paths.js.dest))
}

// 定义函数，用于处理 css 资源
function styles() {
    return gulp
        .src(paths.css.src)
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.css.dest))
}

// 定义函数，用于处理 scss 编译
function sasses() {
    return gulp
        .src(paths.scss.src)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest(paths.scss.dest))
}

// 定义函数，用于压缩 html 文件
function htmls() {
    return gulp
        .src(paths.html.src)
        .pipe(
            html({ collapseWhitespace: true, minifyCSS: true, minifyJS: true })
        )
        .pipe(gulp.dest(paths.html.dest))
}

// 定义函数，复制 libs 目录
function copyLibs() {
    return gulp.src(paths.libs.src).pipe(gulp.dest(paths.libs.dest))
}

// 定义函数，复制 images 目录
function copyImages() {
    return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest))
}

// 定义函数，清理 dist 目标目录
function clean() {
    return del(['dist'])
}

// 定制 watch 监视任务
function watch() {
    // 监视到 js 文件的修改，则自动执行 js 处理任务
    gulp.watch(paths.js.src, scripts)
    // 监视到 scss 变化，则重新编译 scss
    gulp.watch(paths.scss.src, sasses)
    // 监视到 css 变化，压缩 css
    gulp.watch(paths.css.src, styles)
    // 监视到 html 文件变化，则重新压缩 html
    gulp.watch(paths.html.src, htmls)
}

// 定义私有任务，完成一套工作流程中的所有任务
const build = gulp.series(
    clean,
    gulp.parallel(scripts, styles, sasses, htmls, copyLibs, copyImages)
)

// 导出监视任务
// exports.任务名称，如果需要执行指定名称的任务，
// 在命令行中使用 `gulp 任务名称` 来执行。
// 如果不跟任务名称直接执行 `gulp`，则表示执行默认任务
exports.watch = watch

// 作为默认任务导出
exports.default = build
```

-   将项目中依赖的三方库文件复制到 libs 目录中，如 jquery、requirejs、art-template.........
    -

#  本地数据存储

## cookie

特点：

- 保存文本数据
- 有时效性
- 最大存储容量 4KB
- 会占用网络上传带宽
- 没有很方便的API来实现CRUD
- 受同源策略限制
- ......

## WebStorage

### localStorage

特征：

- 保存文本数据
- 本地永久存储
- 最大存储容量 5MB
- 是真正的本地存储，不会主动占用网络上传带宽
- 有非常方便的 API：
  - localStorage.setItem(key, value)：保存
  - localStorage.getItem(key)：获取
  - localStorage.removeItem(key)：删除
  - localStorage.clear()：清空
  - .......
- 会同域限制

### sessionStorage

特征：

- 保存文本数据
- 本地会话存储（浏览器关闭则自动删除）
- 最大存储容量 5MB
- 是真正的本地存储，不会主动占用网络上传带宽
- 有非常方便的 API：
  - sessionStorage.setItem(key, value)：保存
  - sessionStorage.getItem(key)：获取
  - sessionStorage.removeItem(key)：删除
  - sessionStorage.clear()：清空
  - .......
- 会同域限制