//this will control our html file
//var myRandom = Math.floor(Math.random() *5) + 1;
var billboard = [
	"upload.wikimedia.org/wikipedia/commons/f/f3/Youngkitten.JPG",
	"upload.wikimedia.org/wikipedia/commons/0/00/Two_adult_Guinea_Pigs_%28Cavia_porcellus%29.jpg",
	"upload.wikimedia.org/wikipedia/commons/2/2e/Mario_the_Magnificent.jpg",
	"upload.wikimedia.org/wikipedia/commons/d/da/Shunsuke1_20080622.jpg",
	"upload.wikimedia.org/wikipedia/en/9/92/Wolleh_magritte.jpg",
	"upload.wikimedia.org/wikipedia/en/5/5d/Ad_apple_1984.jpg",
	"upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flasche_Coca-Cola_0%2C2_Liter.jpg/320px-Flasche_Coca-Cola_0%2C2_Liter.jpg",
	"upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mustanggelding.jpg/800px-Mustanggelding.jpg",
	"upload.wikimedia.org/wikipedia/commons/a/a7/Bott4.jpg",
	"upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shelby_GT500KR_at_NYIAS.jpg/1024px-Shelby_GT500KR_at_NYIAS.jpg",
	"upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mandel_zoom_00_mandelbrot_set.jpg/800px-Mandel_zoom_00_mandelbrot_set.jpg",
	"upload.wikimedia.org/wikipedia/commons/9/90/Novum_Eboracum.jpg",
	"upload.wikimedia.org/wikipedia/commons/thumb/1/12/We_Can_Do_It%21.jpg/800px-We_Can_Do_It%21.jpg",
	"s32.postimg.org/ck9doz2zp/Mc_Kinnon.jpg",
	"pbs.twimg.com/profile_images/1485070217/gdi_logo_square.png"

	
	];

var howManyRandomNumbers = billboard.length;	


var oldRandom = 0;

//Execute the following code ONLY once the HTML has loaded
$(document).ready(function() {
//$("#billboard").attr("src","http://placehold.it/200x200");
//Target an HTML element by ID
//add an event listener for when the button gets clicked
//execut code once the button is clicked
$("#thisbutton").click(function(){
	var newRandom = Math.floor(Math.random() *howManyRandomNumbers) ;
	//if (newRandom == oldRandom) {
	//	newRandom = Math.floor(Math.random() * 5) + 1;
	//}
	while (newRandom == oldRandom) {
		newRandom = Math.floor(Math.random() * howManyRandomNumbers) ;
	}

	$("#billboard").attr("src","http://" + billboard[newRandom]);
		
//while (myRandom == newRandom) {
		//myRandom = Math.floor(Math.random() *150) + 1;
	//}
	//var myCoin = myRandom < 0.5 ? "heads" : "tails";

	//Change what appears at the #code element to the result of myRandom
//	$("#code").html(newRandom);
	oldRandom = newRandom;
})

$("#thatbutton").click(function(){
	var newRandom = Math.floor(Math.random() *howManyRandomNumbers) ;
	//if (newRandom == oldRandom) {
	//	newRandom = Math.floor(Math.random() * 5) + 1;
	//}
	while (newRandom == oldRandom) {
		newRandom = Math.floor(Math.random() * howManyRandomNumbers) ;
	}

	$("#billboard").attr("src","http://" + billboard[newRandom]);
		
//while (myRandom == newRandom) {
		//myRandom = Math.floor(Math.random() *150) + 1;
	//}
	//var myCoin = myRandom < 0.5 ? "heads" : "tails";

	//Change what appears at the #code element to the result of myRandom
	//$("#code").html(newRandom);
	oldRandom = newRandom;
})





})

//When you click a button, flip a coin. 
// Change #code's html to result.