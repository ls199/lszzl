
// 获取购物车数据
var cart = new ShoppingCart();
var cartRoot = document.querySelector('#cartRoot');
const dataNameJson = {
    "price": "[data-name='price']",
    "qty": "[data-name='qty']",
    "imgSrc": '[data-name="imgSrc"]',
    "subPrice": '[data-name="subPrice"]',
    "selectedQty": '[data-name="selectedQty"]',
    "selectedAmount": '[data-name="selectedAmount"]',
    "units": '[data-name="units"]'
};

const operatorNameJson = {
    "checkItem": "[data-operator='checkItem']",
    "increase": "[data-operator='increase']",
    "decrease": "[data-operator='decrease']",
    "deleteItem": "[data-operator='deleteItem']"
};
const operatorNameJson = {
    "checkItem": "[data-operator='checkItem']",
    "increase": "[data-operator='increase']",
    "decrease": "[data-operator='decrease']",
    "deleteItem": "[data-operator='deleteItem']"
};

console.log(cart);

function displayOrderList() {
    let cartData = cart.getDataFromLocalStorage();
    let orderList = cartData.orderList;
    console.log(orderList);
    // 遍历订单列表｛
    // for (const i in orderList){
    //     let order=orderList[i];
    //     console.log(order);
    // }
    // 找订单列表父元素
    let cartList = document.querySelector('#cartList');
    let exmapleNode = document.querySelector('#orderExample');
// 遍历订单列表
    for (let i = 0; i < orderList.length; i++) {
        let order = orderList[i];
        console.log(order);
        // 克隆样本节点形成当前订单节点
        node = exmapleNode.cloneNode(true);
        // 挂接到父元素
        cartList.appendChild(node);
        // 设置数据
        // 节点id
        node.id = order.id;
        let element = node.querySelector(dataNameJson.imgSrc);
        element.src = 'images/' + order.imgSrc;
       
        // 设选中状态       
        element = node.querySelector(operatorNameJson.checkItem);
        element.checked = order.selectStatus;

        // 设置订单单价
        element = node.querySelector(dataNameJson.price);
        console.log(element);
        element.textContent = (order.price).toFixed(2);

        // 设置数量
        element = node.querySelector(dataNameJson.qty);
        element.textContent = (order.qty);

        //设置小计
        element = node.querySelector(dataNameJson.subPrice);
        element.textContent = (order.qty * order.price).toFixed(2);

       
        // console.log(imgNode);
        node.classList.remove('d-none');

        let selectNone=node.querySelector('[data-operator="checkItem"]');
        selectNone.checked=order.selectStatus;
        console.log(selectNone);
        console.log(node);
    }
    //克隆一个样本节点
    //设置一个新id
    //挂接到父元素
    // 获取所有数据节点data-name依次对应到数据送入节点对应属性
    // 移除新节点到影藏属性d-none
}
//显示商品总样本数
//显示已选中商品到总件数和总价格

function displaySelectedTotal() {

    //获取总数相关节点,并设置对应值
    
    let totalNode = cartRoot.querySelector(dataNameJson.units);
    totalNode.textContent = cart.getTotalUnits();


    totalNode = cartRoot.querySelector(dataNameJson.selectedQty);
    totalNode.textContent = cart.getSelectedQty();

    totalNode = cartRoot.querySelector(dataNameJson.selectedAmount);
    totalNode.textContent = (cart.getSelectedAmount()).toFixed(2);

}
displayOrderList();