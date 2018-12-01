let ru = navigator.language.substr(0, 2).toLowerCase() == "ru";
var WOPPPallete = [];
var PObj = function(clr){
	return "<button style='background-color:"+clr+"' onclick='MPP.addons.draw.customColor=`"+clr+"`'><p style='opacity:0'>#</p> <button onclick='removePObject(`"+clr+"`)'>X</button>";
};
var addPObj = function(clr){
	WOPPPallete[PObj(clr)]="clr";
};
var removePObj = function(clr){
	delete WOPPPallete[PObj(clr)];
};
var addPObject = function(clr){
	addPObj(clr);
	document.getElementById('WOPP-Pallete').innerHTML = Object.keys(WOPPPallete);
};
var removePObject = function(clr){
	removePObj(clr);
	document.getElementById('WOPP-Pallete').innerHTML = Object.keys(WOPPPallete);
};

$("body #bottom .relative").append(`<div id="WOPPPallete" class="ugly-button 2_btn" style="position: fixed;bottom: 8px;right: 220px;width: 180px;">${ru ? "Палитра" : "Pallete"}</div>`);

$("#WOPPPallete").click(function(){
	MPP.client.emit("notification", {
		title: ru ? "Палитра" : "Pallete",
		html:`${ru ? "Укажите цвет" : "Choose color"}: <input type='color' id='WOPPdrawclr'> <button id='theclrbtn' onclick='addPObject(document.getElementById(\`WOPPdrawclr\`).value), MPP.addons.draw.customColor=document.getElementById(\`WOPPdrawclr\`).value'>${ru ? "Добавить цвет" : "Add Color"}</button></br></input> <p id='WOPP-Pallete'></p>`,
		duration:-1,
		target:"#WOPPPallete"
	}); 
	document.getElementById('WOPP-Pallete').innerHTML = Object.keys(WOPPPallete);
});