class Fire{
    constructor(options = {}){
        this.skyWidth = options.skyWidth || 600
        this.skyHeight = options.skyHeight || 600
        this.skyColor = options.skyColor || '#333'
        this.sky = null
        this.fireWidth = options.fireWidth || 20
        this.fireHeight = options.fireHeight || 20
        this.dvWidth = options.dvWidth || 5
        this.dvHeight = options.dvHeight || 5
        this.createSky()
    }
    //创建天空
    createSky(){
        const sky = document.createElement('div')
        css(sky,'width',this.skyWidth + 'px')
        css(sky,'height',this.skyHeight + 'px')
        css(sky,'background',this.skyColor)
        css(sky,'margin','20px auto')
        css(sky,'position','relative')
        this.sky = sky
        //将sky放入body
        document.body.appendChild(sky)
        //帮定事件
        this.bindEvent()
    }
    bindEvent(){
        on(this.sky,'click',e=>{
            //获取位置
            let _x = e.pageX - this.sky.offsetLeft,
                _y = e.pageY - this.sky.offsetTop
            //创建烟花
            this.createFire(_x,_y)
        })
    }
    //创建烟花
    createFire(x,y){
        const fire = document.createElement('p')
        css(fire,'width',this.fireWidth + 'px')
        css(fire,'height',this.fireHeight + 'px')
        css(fire,'background',getColor())
        css(fire,'position','absolute')
        css(fire,'left',x + 'px')
        css(fire,'top',this.skyWidth-this.fireWidth + 'px')
        //将烟花放入sky中
        this.sky.appendChild(fire)
        this.fireUp(x,y,fire)
    }
    //烟花升空
    fireUp(x,y,fire){
        animate(fire,{top:y},1000,()=>{
            this.sky.removeChild(fire)
            this.createEles(x,y)
        })
    }
    //创建炸开的烟花
    createEles(x,y){
        const num = getRandom(50,60)
        const arr=[]
        for(let i = 0 ; i < num ; i++){
            const dv = document.createElement('p')
            css(dv,'width',this.dvWidth + 'px')
            css(dv,'height',this.dvHeight + 'px')
            css(dv,'background',getColor())
            css(dv,'position','absolute')
            css(dv,'left',x + 'px')
            css(dv,'top',y + 'px')
            css(dv,'borderRadius','50%')
            //将元素放入sky
            this.sky.appendChild(dv)
            arr.push(dv)
        }
        this.boom(arr)
    }
    //炸开
    boom(arr){
        for(let j = 0 ; j < arr.length ; j++){
            animate(arr[j],{left:getRandom(0,this.skyWidth-this.dvWidth),top:getRandom(0,this.skyHeight-this.dvHeight)},500,()=>{
                this.sky.removeChild(arr[j])
            })
        }
    }
}