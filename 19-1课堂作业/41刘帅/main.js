var galleryInfo = {
	"imageList": [
		{ "name": "Kindle书阅读器", "textContent": "阅读风尚", "src": "01.jpg","href":"#"},
		{ "name": "畅销书", "textContent": "定价49折封顶", "src": "02.jpg" ,"href":"#"},
		{ "name": "Polo Ralph Lauren", "textContent": "239元起", "src": "03.jpg" ,"href":"#"},
		{ "name": "超级电脑节", "textContent": "大牌PK", "src": "04.jpg" ,"href":"#"},
		{ "name": "畅销书", "textContent": "定价49折封顶", "src": "05.jpg" ,"href":"#"},
		{ "name": "个护健康", "textContent": "239起", "src": "06.jpg" ,"href":"#"},
		{ "name": "大牌鞋", "textContent": "245起", "src": "07.jpg" ,"href":"#"},
		{ "name": "厨卫下单", "textContent": "8折起", "src": "08.jpg" ,"href":"#"}
	],
	"imgPath": "images/"
}
var imgItems = document.getElementById("imgItems");
var ixtItems = document.getElementById("txtItems");
var imgs = imgItems.getElementsByTagName("img");
for (var i = 0; i < galleryInfo.imageList.length; i++) {
	var nodeImg = document.createElement("img");
	nodeImg.className = "pic opacity0";
	nodeImg.src = galleryInfo.imgPath + galleryInfo.imageList[i].src;
	var nodeA = document.createElement("a");
	nodeA.href = galleryInfo.imageList[i].href;
	nodeA.appendChild(nodeImg);
	var nodeLiImg = document.createElement("li");
	// nodeLiImg.style.display="none";
	nodeLiImg.appendChild(nodeA);
	imgItems.appendChild(nodeLiImg);
	nodeLiImg.no = i;
	var nodeLiTxt = document.createElement("li");
	nodeLiTxt.className = "txtItemsLi";
	nodeLiTxt.title = "[" + galleryInfo.imageList[i].name + "]" + galleryInfo.imageList[i].textContent;
	nodeLiTxt.no = i;
	var imageName = document.createElement("span");
	imageName.textContent = galleryInfo.imageList[i].name;
	var imageTxt= document.createElement("span");
	imageTxt.textContent = galleryInfo.imageList[i].textContent;
	nodeLiTxt.appendChild(imageName);
	nodeLiTxt.appendChild(imageTxt);
	txtItems.appendChild(nodeLiTxt);
}
function clearAllStyle() {
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].className = "pic opacity0";
		txtItems.children[i].className = "txtItemsLi";
	}
}function setCurrentStyle(currentNo) {
	imgs[currentNo].className = "pic opacity1";
	txtItems.children[currentNo].className = "txtItemsLi currentTxt";
}
var currentNo = 0;
setCurrentStyle(currentNo);
var t = setInterval(timer, 3000);

function timer() {
	clearAllStyle();
	currentNo++;
	if (currentNo >= imgItems.children.length) currentNo = 0;
	setCurrentStyle(currentNo);
}