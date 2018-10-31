var timer;//定时器变量
//启动定时器时函数的定义--若在启动定时器时有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接调用window定时器
function startTimer(speed) {
    //定时器变量
    timer = window.setInterval(changeNum, speed);
}
startTimer(100);
//获取h2元素
var images1 = document.querySelector('#images');
var images2 = document.querySelector('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);
//设置当前变化的号码变量及初始值
var currentNo = 1;
//定义变化函数，1-->9，到达9后变化到0
// var flag=true;
function changeNum() {
    // h20dj.textContent=currentNo;
    if (currentNo < 8) currentNo++;
    else currentNo = 1;
    // h20dj.textContent ='<img src="images/0'+currentNo+'.jpg" alt=""></img>' ;
    // console.log(currentNo);
}
// console.log(timer);
//获取控制按钮
var btnObj = document.getElementById('btnObj')

// btnObj.addEventListener('mouseenter',stopChange);
//定义启动时定时器函数，函数功能为启动定时器同时改变按钮的显示文本
function startChange() {
    startTime(500);
    btnObj.textContent = "停止"
}
function stopChange() {
    window.clearInterval(timer);
    btnObj.textContent = "启动"
}
//为按钮添加鼠标移出移入事件
btnObj.addEventListener('mouseover', stopChange);
btnObj.addEventListener('mouseout', startChange);
