// var btnList=document.querySelectorAll('.btn-group .btn');


// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
var totalQty = document.getElementsByName('totalQty')[0];
var increase = document.getElementsByName('increase');
// console.log(increaseValue);
// 为所有文本注册事件
for (var i = 0; i < increase.length; i++) {
    increase[i].addEventListener('click', increaseValue);
}
var decrease = document.getElementsByName('decrease');
// console.log(decreaseValue);
for (var i = 0; i < decrease.length; i++) {
    decrease[i].addEventListener('click', decreaseValue);
}
var addToCar = document.getElementsByName('addToCart');
// console.log(addToCart);
for (var i = 0; i < addToCar.length; i++) {
    addToCar[i].addEventListener('click', addToCart);
}




function increaseValue(e) {
    var qtyObj = e.target.nextElementSibling;
    var qty = parseInt(qtyObj.innerText);
    qty++;
    qtyObj.innerText = qty;
    console.log(qty);
}
function decreaseValue(e) {
    var qtyObj = e.target.previousElementSibling;
    var qty = parseInt(qtyObj.innerText);
    if (qty > 1) qty--;
    else qty = 0;
    qtyObj.innerText = qty;
    console.log(qty);
}

function addToCart(e) {
    var qtyObj = e.target.previousElementSibling.previousElementSibling;
    var qty = parseInt(qtyObj.innerText);
    var total = parseInt(totalQty.innerText);
    total += qty;
    totalQty.innerText = total;
}

