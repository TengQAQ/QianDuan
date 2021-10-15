class CheckAll{
    constructor(){
        this.tbody = document.querySelector('tbody')
        this.checkAllBtn = document.querySelector('.checkAllBtn')
        this.data = [
            {
                isChecked:true,
                name:'Jack',
                age:18,
                gender:'男'
            },{
                isChecked:true,
                name:'Rose',
                age:18,
                gender:'男'
            },{
                isChecked:true,
                name:'老王',
                age:18,
                gender:'男'
            },{
                isChecked:true,
                name:'小丁',
                age:18,
                gender:'男'
            }
        ]
        this.init()
        this.addData()
    }
    //创建tr td并且添加数据，渲染页面
    init(){
        let str = ''
        for(let i = 0 ; i < this.data.length ; i++){
            const obj = this.data[i]
            str += `<tr>
                    <td><span class="${obj.isChecked?'active':''}"></span></td>
                    <td>${obj.name}</td>
                    <td>${obj.age}</td>
                    <td>${obj.gender}</td>
                    <td class="del">删除</td>
                   </tr>`
        }
        //把str放到tbody里面去
        this.tbody.innerHTML = str
        //判断全选状态
        const flag = this.data.every(item=>{
            return item.isChecked
        })
        if(flag){
            this.checkAllBtn.classList.add('active')
        }else{
            this.checkAllBtn.classList.remove('active')
        }
        this.bindEvent()
        this.delData()
    }
    //点击事件
    bindEvent(){
        const that = this
        //给checkAllBtn点击事件
        on(this.checkAllBtn,'click',function(){
            //点击的时候，在元素中切类名
            this.classList.toggle('active')
            //将td下的span的状态设置和这个一样
            const flag = this.classList.contains('active')
            that.data.forEach(item => {
                item.isChecked = flag
                 //重新渲染页面
                that.init()
            })
           
        })
        //操作td下的span
        const btns = document.querySelectorAll('td span')
        for(let i = 0 ; i < btns.length ; i++){
           on(btns[i],'click',function(){
               that.data[i].isChecked = !that.data[i].isChecked
               that.init()
           })
        }
    }
    //添加数据
    addData(){
        const inps = document.querySelectorAll('p input')
        const btn = document.querySelector('button')
        on(btn,'click',()=>{
            //获取input里面的值
            const username = inps[0].value
            const age = inps[1].value
            const gender = inps[2].value
            //将值放到data里面
            this.data.push({
                isChecked:false,
                name:username,
                age,
                gender
            })
            //渲染页面
            this.init()
        })
    }
    //删除数据
    delData(){
        //拿到类名为del的元素
        const btns = document.querySelectorAll('.del')
        //拿到每一个
        for(let j = 0 ; j < btns.length ; j++){
            on(btns[j],'click',()=>{
                this.data.splice(j,1)
                this.init()
            })
        }
    }
}