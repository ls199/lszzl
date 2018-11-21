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

// $(document).ready(function () {
//     $("button").click(function () {
//         $("#cartContent").empty();
//     });
// });

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// })

var imgSrca=document.querySelectorAll('.card-img-top');
var titlea=document.querySelectorAll('.card-text');
var pricea=document.getElementsByClassName('text-muted text-danger');
var a=document.getElementsByClassName('btn btn-sm btn-outline-danger disabled');
// var id=document.getElementById('01');

// console.log(a);
// console.log(id);


class product {
    constructor(id, title, price, imgSrc) {
      // 商品类成员  
      this.id = id;
      this.title = title;
      this.a = a;
      this.imgSrc = imgSrc;
    }
  }
  // 订单类2
  class Order {
    constructor(product, qty) {
      // 订单类成员
      this.id = product.id;
      this.title = product.title;
      this.a = product.a;
      this.imgSrc = product.imgSrc
      this.qty = qty;
    }
  }

  // 购物车数据类
  class CartData {
    constructor() {
      this.orderList = new Array();
      this.units = 0;
      this.totalQty = 0;
      this.totalAmount = 0;
    }
  }
// 函数定义--将某个订单order，加入购物车
function addtoCart(order) {
    var flag = true;//将假设flag是假，代表当前状态是新商品
    for (const i in MyCart.orderList) {
      if (order.id == MyCart.orderList[i].id) {
        flag = false;//修改状态，是老商品
        //新增对于的qty
        MyCart.orderList[i].qty += order.qty;
        break;
      }
    }
    if (flag) {
      //order是购物车中的新样品，给样品数++
      MyCart.orderList.push(order);
      MyCart.units++;
    }
    MyCart.totalQty += order.qty;
    MyCart.totalAmount += order.price * order.qty;
  }

  var product1 = new product('01', '30片巨补水 秋冬新款面膜', 99.90, 'images/01.jpg');
  var product2 = new product('02', '新西兰进口白金版婴幼儿奶粉', 99.90, 'images/02.jpg');
  var product3 = new product('03', '卡耐基经典 人性的弱点', 99.90, 'images/03.jpg');

  
  var MyCart = new CartData();
//   var order = new Order(product1, 2);
//   MyCart.orderList.push(order);
//   MyCart.units = 1;
//   MyCart.totalQty = order.qty;
//   MyCart.totalAmount = order.price * order.qty;
 
  // 进入购物车mycart
  var order = new Order(product1, a);
  addtoCart(order);//调用加入购物车

  order = new Order(product2, a);
  addtoCart(order);//调用加入购物车

  order = new Order(product1, a);
  addtoCart(order);//调用加入购物车

  order = new Order(product3, a);
  addtoCart(order);//调用加入购物车

  console.log(MyCart);