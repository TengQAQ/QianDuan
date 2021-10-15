// 设置画布

const canvas = document.getElementById('mycanvas');
console.log(canvas);
// const ctx = canvas.getContext('2d');

// const width = canvas.width = window.innerWidth;
// const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

//随机小球大小
function sizesphere(){
  var sphere=document.getElementsByClassName("sphere")
  console.log(sphere);
}
//测试
console.log("running");