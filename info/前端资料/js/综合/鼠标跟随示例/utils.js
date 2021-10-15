/* 
    把一些可能会经常用到的函数放在这个文件里面
*/
/* 
    求范围之间的随机数
    @param {a} 范围下限
    @param {b} 范围上限
    @return 范围之间的随机数
*/
function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}
/* 
    求随机颜色字符串
    @return 随机颜色字符串
*/
function getColor(){
    return 'rgb(' + getRandom(0, 255) + ',' + getRandom(0, 255) + ',' + getRandom(0, 255) + ')'
}
/* 
    获取或者设置元素的样式
    @param {ele} 要获取或者设置的元素
    @param {attr} 要获取或者设置的属性
    @param {value} 要设置的属性值
    @return 获取到的元素的属性值
*/
function css(ele,attr,value){
    if(!value){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele)[attr]
        }else{
            return ele.currentStyle[attr]
        }
    }
    ele.style[attr] = value
}

/* 
    获取元素
    @param {selector} 选择器
    @param {context} 在某一个范围选择
    @return 选择的元素或者元素集合
*/
function my$(selector,context){
    context = context || document
    if(selector.indexOf('#') === 0){
        selector = selector.substr(1)
        return document.getElementById(selector)
    }else if(selector.indexOf('.') === 0){
        selector = selector.substr(1)
        return context.getElementsByClassName(selector)
    }else{
        return context.querySelectorAll(selector)
    }
}

/* 
    添加事件监听兼容处理
    @param {ele} 要绑定事件的元素
    @param {type} 事件类型
    @param {fn} 事件处理函数
*/
function on(ele,type,fn){
    if(ele.addEventListener){
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
/* 
    移除事件监听兼容处理
    @param {ele} 要移除事件的元素
    @param {type} 事件类型
    @param {fn} 事件处理函数
*/
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
/*
    多属性运动函数
*/
function animate(ele,options,duration,fn){
    clearInterval(ele.timer)
    const start = {} , range = {}
    for(let key  in options){
        start[key] = parseFloat(css(ele,key))
        range[key] = options[key] - start[key]
    }
    const startTime = new Date().getTime()
    ele.timer = setInterval(() => {
        let timeDiffrence = Math.min(new Date().getTime() - startTime,duration)
        for(let attr in options){
            let result = start[attr] + range[attr] / duration * timeDiffrence
            result = attr === 'opacity' ? result : result + 'px'
            ele.style[attr] = result 
        }
        if(timeDiffrence === duration){
            clearInterval(ele.timer)
            fn && fn()
        }
    },10)
}
/*
    淡入淡出函数
*/
function fadeIn(ele,duration,fn){
    css(ele,'display','block')
    css(ele,'opacity','0')
    animate(ele,{opacity:1},duration,fn)
}
function fadeOut(ele,duration,fn){
    css(ele,'display','block')
    css(ele,'opacity','1')
    animate(ele,{opacity:0},duration,fn)
}
/* 
    获取元素的 内容 + padding
*/
function inWidth(ele){
    return parseInt(css(ele,'width')) + parseInt(css(ele,'paddingLeft')) + parseInt(css(ele,'paddingRight'))
}
function inHeight(ele){
    return parseInt(css(ele,'height')) + parseInt(css(ele,'paddingTop')) + parseInt(css(ele,'paddingBottom'))
}
/* 
    获取元素的内容 + padding + border
*/
function outWidth(ele){
    return parseInt(css(ele,'width')) + parseInt(css(ele,'paddingLeft')) + parseInt(css(ele,'paddingRight')) + parseInt(css(ele,'borderLeftWidth')) + parseInt(css(ele,'borderRightWidth'))
}
function outHeight(ele){
    return parseInt(css(ele,'height')) + parseInt(css(ele,'paddingTop')) + parseInt(css(ele,'paddingBottom')) + parseInt(css(ele,'borderTopWidth')) + parseInt(css(ele,'borderBottomWidth'))
}