//View5 Object constructor
var View5 = function (container, model) {

	this.menu = model.getFullMenu();
	var numberOfGuests = model.getNumberOfGuests();

	this.generateViewHTML = function(){
		var html = "";
		for (var i = 0; i < this.menu.length; i++) {
			html = html + generateDishThumbnailHTML(this.menu[i]['name'],this.menu[i]['image'],this.menu[i]['ingredients'])
		};
		return html + generateTotalPriceThumbnailHTML(model.getTotalMenuPrice());
	}

	var generateDishThumbnailHTML = function(name, image, ingredients){
		var price = 0;
		for (var i = 0; i < ingredients.length; i++) {
			price += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		price = price * numberOfGuests;
		return '<div class="col-sm-12 col-md-4 col-lg-3"><a href="#" class="thumbnail"><img src="images/' + image + '"><h3>' + name + '</h3><p>Price: <span id="dishPrice">' + price + ' SEK</span></p></a></div>'; 
	}

	var generateTotalPriceThumbnailHTML = function(price){
		return '<div class="col-sm-12 col-md-4 col-lg-3"><div class="badge"><p>Total:</p><p>' + price + ' SEK</p></div></div>';
	}
	
	//Update the dish grid
	container.find("#finalDishSelection").html(this.generateViewHTML());

	this.printButton = container.find("#printRecipeButton");

	var printButtonClick = function(event) {
		document.getElementById('view5').style.display= 'none';
		document.getElementById('view6').style.display= '';
	}
	this.printButton.click(printButtonClick);
}
 
