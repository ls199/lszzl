// //css选择器--document.querySelector（）
// var img4=document.querySelector('#images a:nth-child(4)');
// //idgetElementById('images')
// var img4=document.getElementById('images').children[4];
// //类名getElementsByClassName('hiddenImg')
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //标签名getElementsByTagName('a')
// var img4=document.getElementsByTagName('a')[4];
// console.log(img4);
// img4.style.display="block";

//获取一组带超链接的图像
var imagesA = document.getElementById('images').children;
console.log(imagesA)
// //行内样式实现显示样式

//显示26行
// imagesA[0].style.display="none";
// //显示30行
// imagesA[4].style.display="block";

//通过改类名
//显示26行
// imagesA[0].ClassName="hiddenImg";
// //显示30行
// imagesA[4].ClassName="displayImg";

//利用计时器间隔1s，只显示一张图像，其他图像隐藏。
var currentNo = 0;
function changeImg() {
    //排他原理，先去掉同类，
    for (var i = 0; i < imagesA.length; i++) {
        imagesA[i].className = "hiddenImg";
        console.log(i);
    }
    //  for(const item of imagesA){
    //      item.className="hiddenImg";
    //      console.log(item);

    //  }
    //在突出自己
    imagesA[currentNo].className = "displayImg";
    if (currentNo < 7) {
        currentNo++;
    }
    else {
        currentNo = 0;
    }

}

var timer = window.setInterval(changeImg, 1000)




//定义启动时定时器函数，函数功能为启动定时器同时改变按钮的显示文本
function startChange() {
    timer = window.setInterval(changeImg, 1000)
}
function stopChange() {
    window.clearInterval(timer);
}
var imagesDIV =document.getElementById('images');
console.log(imagesDIV);
// //为按钮添加鼠标移出移入事件
imagesDIV.addEventListener('mouseover', stopChange);
imagesDIV.addEventListener('mouseout', startChange);

