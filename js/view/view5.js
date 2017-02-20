//View5 Object constructor
var View5 = function (container, model) {

	//Subscribe to model
	model.addObserver(this);

	this.printButton = container.find("#printRecipeButton");
	var menu;
	var numberOfGuests;

	this.generateViewHTML = function(){
		var html = "";
		for (dish in menu){
			html = html + generateDishThumbnailHTML(menu[dish]['name'],menu[dish]['image'],menu[dish]['ingredients'])
		};
		return html + generateTotalPriceThumbnailHTML(model.getTotalMenuPrice());
	}

	var generateDishThumbnailHTML = function(name, image, ingredients){
		var price = 0;
		for (var i = 0; i < ingredients.length; i++) {
			price += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		price = parseInt(price * numberOfGuests);
		return '<div class="col-sm-12 col-md-4 col-lg-3"><div class="thumbnail"><img src="' + (model.baseImageURL + image) + '"><h3>' + name + '</h3><p>Price: <span id="dishPrice">' + price + ' SEK</span></p></div></div>'; 
	}

	var generateTotalPriceThumbnailHTML = function(price){
		return '<div class="col-sm-12 col-md-4 col-lg-3"><div class="badge"><p>Total:</p><p>' + price + ' SEK</p></div></div>';
	}

	this.update = function(object){
		/*menu = model.getFullMenu();
		numberOfGuests = model.getNumberOfGuests();
		//Update the dish grid
		container.find("#finalDishSelection").html(this.generateViewHTML());*/
	}
	this.update();
}
 
