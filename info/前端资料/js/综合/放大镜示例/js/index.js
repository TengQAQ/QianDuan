class Magnifier{
    constructor(options = {}){
       this.box = options.box || document.querySelector('.box')
       this.show = this.box.querySelector('.show')
       this.showInfo = {
           width:this.show.offsetWidth,
           height:this.show.offsetHeight
       }
       this.mask = this.show.querySelector('.mask')
       this.maskInfo = {
           width:inWidth(this.mask),
           height:inHeight(this.mask)
       }
       this.bigbox = this.box.querySelector('.bigbox')
       this.bigboxInfo = {}
       this.bigImg = this.bigbox.querySelector('.bigImg')
       this.bigImgInfo = {
           width:inWidth(this.bigImg),
           height:inHeight(this.bigImg)
       }
       this.resetBigBox()
    }
    //重置大盒子大小
    resetBigBox(){
        /*
        mask 大小    bigbox 大小
        -------- = ---------------
        show 大小    bigImg 大小
        */
       const _width = this.maskInfo.width * this.bigImgInfo.width / this.showInfo.width
       const _height = this.maskInfo.height * this.bigImgInfo.height / this.showInfo.height
       this.bigbox.width = _width + 'px'
       this.bigbox.height = _height + 'px'
       this.bigboxInfo.width = _width
       this.bigboxInfo.height = _height
       this.bindEvent()
    }
    bindEvent(){

        this.show.onmouseenter = ()=>{
            
            css(this.mask,'display','block')
            css(this.bigbox,'display','block')
        }
        this.show.onmousemove =e=>{
            let _left = e.pageX - this.box.offsetLeft - this.maskInfo.width/2
            let _top = e.pageY - this.box.offsetTop - this.maskInfo.height/2
            if(_left <= 0){
                _left = 0
            }else if(_left >= this.showInfo.width - this.maskInfo.width){
                _left = this.showInfo.width - this.maskInfo.width
            }
            if(_top <= 0){
                _top = 0
            }else if(_top >= this.showInfo.height - this.maskInfo.height){
                _top = this.showInfo.height - this.maskInfo.height
            }

            //计算大盒子移动的距离
            /*
             mask 移动的距离        bigimg移动的距离
             --------------- =  ---------------------
             mask 移动的最大距离  bigimg移动的最大距离
            */
           let _bigLeft = _left * (this.bigImgInfo.width - this.bigboxInfo.width) / (this.showInfo.width - this.maskInfo.width)
           let _bigTop = _top * (this.bigImgInfo.height - this.bigboxInfo.height) / (this.showInfo.height - this.maskInfo.height)
            css(this.mask,'left',_left + 'px')
            css(this.mask,'top',_top + 'px')
            css(this.bigImg,'left',-_bigLeft + 'px' )
            css(this.bigImg,'top',-_bigTop + 'px' )
        }
        this.show.onmouseleave = ()=>{
            css(this.mask,'display','none')
            css(this.bigbox,'display','none')
        }
    }
}