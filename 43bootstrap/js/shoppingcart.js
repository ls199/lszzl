localStorage.setItem("key", "value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量
class product {
    constructor(id, title, price, imgSrc) {
        // 商品类成员  
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
    }
}
// 订单类Order
class Order {
    constructor(product, qty) {
        // 订单类成员
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.imgSrc = product.imgSrc
        this.qty = qty;
    }
}
// class Order{
//     constructor(product,qty,selectStatus){
//         this.product=product;
//         this.qty=qty;
//         this.selectStatus=selectStatus;
//     }
// }
// 购物车数据类
class CartData {
    constructor() {
        this.orderList = new Array();
        this.units = 0;
        this.totalQty = 0;
        this.totalAmount = 0;
    }
}

//   购物车操作
class ShoppingCart {
    // 从本地存储中获取购物车数据
    getDataFromLocalStorage() {
       let file=localStorage.getItem('file');
       if(file==null||file==''){
           return new CartData();
       }
       else{
           return JSON.parse(file);
       }
    }
    // 将购物车数据写入本地存储
    setDataTolocalSatorge(cartData) {
        localStorage.removeItem('file');
    //    写入本地存储
        localStorage.setItem('file',JSON.stringify(cartData));
    }
    // 获取选中对象的订单列表
    getSelectedList() {

    }
    // 获取选中对象的列表总数量
    getSelectedQty() {

    }
    // 获取选中对象的列表总价格
    getSelectedAmount() {

    }
    addtoCart(order) {
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
}

// 函数定义--将某个订单order，加入购物车
// function addtoCart(order) {
//     var flag = true;//将假设flag是假，代表当前状态是新商品
//     for (const i in MyCart.orderList) {
//         if (order.id == MyCart.orderList[i].id) {
//             flag = false;//修改状态，是老商品
//             //新增对于的qty
//             MyCart.orderList[i].qty += order.qty;
//             break;
//         }
//     }
//     if (flag) {
//         //order是购物车中的新样品，给样品数++
//         MyCart.orderList.push(order);
//         MyCart.units++;
//     }
//     MyCart.totalQty += order.qty;
//     MyCart.totalAmount += order.price * order.qty;
// }
//  商品对象实例
// var product1 = new product('01', '30片巨补水 秋冬新款面膜', 99.90, 'images/01.jpg');
// var product2 = new product('02', '新西兰进口白金版婴幼儿奶粉', 99.90, 'images/02.jpg');
// var product3 = new product('03', '卡耐基经典 人性的弱点', 99.90, 'images/03.jpg');

// var MyCart = new CartData();

// // 进入购物车mycart
// var order = new Order(product1, 10);
// addtoCart(order);//调用加入购物车

// order = new Order(product2, 10);
// addtoCart(order);//调用加入购物车

// order = new Order(product3, 10);
// addtoCart(order);//调用加入购物车

// console.log(MyCart);
