var pageHeader = document.getElementById("mainHeader");
pageHeader.textContent = "javascript sports water";

var sandwichImagesElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichImagesElems);


var myButtons = document.getElementsByTagName("button");
console.log(myButtons);

myButtons[0].addEventListener("click", function () {
	// alert("You clicked Me!! 
	sandwichImagesElems[0].src = "https://wswdelivery.com/wp-content/uploads/2015/05/gatorade-variety-550x515.jpg";
});
