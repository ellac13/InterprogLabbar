//View4 Object constructor
var View4 = function (container, model) {
	model.addObserver(this);//subscribe to changes.
	this.backButton = container.find("#backToSelectDishButton");

	this.dish = model.getDish(model.getCurrentlyViewedDishID());
	var numberOfGuests = model.getNumberOfGuests();

	this.generateViewHTML = function(){
		return generatePictureThumbnailHTML(this.dish['name'], this.dish['image'], this.dish['description']) + 
				generateIngredientThumbnailHTML(this.dish['ingredients']) + 
				generatePreparationThumbnailHTML(this.dish['description']);
	}


	var generatePictureThumbnailHTML = function(name, image, description){
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><h2>' + name + '</h2><img src="images/' + image + '"><div class="caption"><p>' + description + '</p><button class="btn btn-default" id="backToSelectDishButton" type="button"><span class="glyphicon glyphicon-chevron-left"></span> Back</button></div></div></div>'; 
		//TODO: Lös knapparna
	}

	var generateIngredientThumbnailHTML = function(ingredients){
		var ingredientsHTML = "";
		var ingredientsPrice = 0;
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsHTML = ingredientsHTML + '<tr><td>' + ingredients[i]['quantity'] + ' ' + ingredients[i]['unit'] + '</td><td>' + ingredients[i]['name'] + '</td><td>SEK</td><td>' + ingredients[i]['price'] + '</td></tr>';
			ingredientsPrice += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><h2>Ingredients for ' + numberOfGuests +'people</h2><hr><table id="dishIngredientTable">'+ ingredientsHTML +'</table><hr><div><button class="btn btn-default" id="confirmDishButton" type="button">Confirm Dish</button><p style="float:right">Total cost: <span id="dishCost">' + ingredientsPrice * numberOfGuests +'</span> SEK</p></div></div></div>'; 
		//TODO: Lös knapparna
	}

	var generatePreparationThumbnailHTML = function(description){
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><h2>Preparations</h2><p>' + description +'</p></div></div>'; 
	}

	this.update = function(object){
		this.dish = model.getDish(model.getCurrentlyViewedDishID());
		numberOfGuests = model.getNumberOfGuests();
		//Update the dish grid
		container.find("#view4Row").html(this.generateViewHTML());
	}
	
	//Update the dish grid
	container.find("#view4Row").html(this.generateViewHTML());
}
 
