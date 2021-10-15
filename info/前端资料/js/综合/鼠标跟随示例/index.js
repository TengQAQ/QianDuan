class Follow{
    constructor(options = {}){
        this.canvasWidth = options.canvasWidth || 600
        this.canvasHeight = options.canvasHeight || 600
        this.canvasColor = options.canvasColor || '#333'
        this.canvas = null
        this.count = 0
        this.starWidth = options.starWidth || 20
        this.starHeight = options.starHeight || 20
        this.createCanvas()
    }
    //创建画布
    createCanvas(){
        const canvas = document.createElement('div')
        css(canvas,'width',this.canvasWidth + 'px')
        css(canvas,'height',this.canvasHeight + 'px')
        css(canvas,'background',this.canvasColor)
        css(canvas,'position','relative')
        css(canvas,'margin','20px auto')
        this.canvas = canvas
        document.body.appendChild(canvas)
        this.bindEvent()
    }
    //鼠标移动
    bindEvent(){
        on(this.canvas,'mousemove',e=>{
            this.count++
            //获取坐标
            let x = e.pageX - this.canvas.offsetLeft,
                y = e.pageY - this.canvas.offsetTop
            if(this.count % 4 === 0){
                this.createStar(x,y)
            }
        })
    }
    //创建星星
    createStar(x,y){
        const star = document.createElement('p')
        css(star,'width',this.starWidth + 'px')
        css(star,'height',this.starHeight + 'px')
        css(star,'background',`url(./images/${getRandom(1,10)}.png) no-repeat`)
        css(star,'backgroundSize','100% 100%')
        css(star,'position','absolute')
        css(star,'left',x + 'px')
        css(star,'top',y + 'px')
        this.canvas.appendChild(star)
        this.go(x,y,star)
    }
    //移动
    go(x,y,star){
        animate(star,{top:y + getRandom(20,40)},500,()=>{
            this.canvas.removeChild(star)
        })
    }
}