// 获取一组带图像的超链接
var imagesA = document.querySelector(".hm_category_right").children;
//获取一组li文本
var txtList = document.querySelector(".hm_category_left ul").children;

//初始化当前显示的图片/文本编号
var currentNo = 0;
const nodeLength = 11;

//计时器换片函数，间隔1S被调用,显示1张图像，其余图像隐藏。
function changeImg() {
    // 获取图片/文本总数量

    // 排他原理1 ，将同类设置为统一状态，
    for (var i = 0; i < nodeLength; i++) {
        // 同类li影藏
        imagesA[i].className = "hm_category_right_boxb";
        //同类文本设置正常非高亮
        txtList[i].className = ".hm_category_left ul li";
    }
    //排他原理2，突出自己
    imagesA[currentNo].className = "hm_category_right_box";
    // 排他原理2，文本高亮
    txtList[currentNo].className = "now";
    //    console.log(currentNo);
}
// 为所有文本Li注册鼠标移入事件
for (var i = 0; i < txtList.length; i++) {
    // txtList[i].addEventListener('click', gotoImg);
    txtList[i].addEventListener('mouseout', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;
    //    console.log( txtList[i].no);

}
//移入之后，当前li高亮,跳转到对div
function gotoImg() {
    currentNo = this.no;
    //调用更换图片/文本函数
    changeImg();
}

// var other = document.querySelector(".other").children;
// // console.log(other);
// for (var i = 0; i < txtList.length; i++) {
//     other[i].addEventListener('click', gotoImg);
//     //添加自定义属性no 记录当前li的编号
//     other[i].no = i;
//     console.log(othert[i].no);
// }
// function gotoImg() {
//     currentNo = this.no;
//     //调用更换图片/文本函数
//     changeImg();
// }