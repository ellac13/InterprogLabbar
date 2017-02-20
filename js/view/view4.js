//View4 Object constructor
var View4 = function (container, model) {
	model.addObserver(this);//subscribe to changes.
	this.backButton = container.find("#backToSelectDishButton");
	var view4Row = container.find("#view4Row");

	var view4 = this;

	var dish = [];
	var numberOfGuests;

	this.generateViewHTML = function(){
		return generatePictureThumbnailHTML(dish['title'], dish['image']) + 
				generateIngredientThumbnailHTML(dish['ingredients']) + 
				generatePreparationThumbnailHTML(dish['description']);
	}

	var generatePictureThumbnailHTML = function(name, image){
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><h2>' + name + '</h2><img src="' + image + '"><div class="caption"><button class="btn btn-default" id="backToSelectDishButton" type="button"><span class="glyphicon glyphicon-chevron-left"></span> Back</button></div></div></div>'; 
	}

	var generateIngredientThumbnailHTML = function(ingredients){
		return '<div class="col-sm-12 col-md-6" id=view4IngredientThumbnail>' + generateIngredientsTable(ingredients) + '</div>'; 
	}

	var generateIngredientsTable = function(ingredients){
		var ingredientsHTML = "";
		var ingredientsPrice = 0;
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsHTML = ingredientsHTML + '<tr><td>' + parseFloat(ingredients[i]['quantity'] * numberOfGuests).toFixed(1) + ' ' + ingredients[i]['unit'] + '</td><td>' + ingredients[i]['name'] + '</td><td>SEK</td><td>' + ingredients[i]['price'] * numberOfGuests + '</td></tr>';
			ingredientsPrice += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		ingredientsPrice = parseInt(ingredientsPrice);
		return '<div class="thumbnail"><h2>Ingredients for ' + numberOfGuests +' people</h2><hr><table id="dishIngredientTable">'+ ingredientsHTML +'</table><hr><div><button class="btn btn-default" id="confirmDishButton" type="button">Confirm Dish</button><p style="float:right">Total cost: <span id="dishCost">' + ingredientsPrice * numberOfGuests +'</span> SEK</p></div></div>'; 
	}


	var generatePreparationThumbnailHTML = function(description){
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><h2>Preparations</h2><p>' + description +'</p></div></div>'; 
	}

	var generateTextPrint = function(text){
		return '<div class="col-sm-12 col-md-6"><div class="thumbnail"><p>' + text + '</p><div class="caption"><button class="btn btn-default" id="backToSelectDishButton" type="button"><span class="glyphicon glyphicon-chevron-left"></span> Back</button></div></div></div>'; 
	}

	var cb = function(data){
		dish = data;
		numberOfGuests = model.getNumberOfGuests();
		//Update the dish grid
		view4Row.html(view4.generateViewHTML());
	}

	var cbError = function(data){
		view4Row.html(generateTextPrint("Failed to load dish..."));
	}

	this.update = function(object){
		if(object == model.currentlyViewedDishIDChanged){
			view4Row.html(generateTextPrint("Loading dish..."));
			model.getDish(model.getCurrentlyViewedDishID(), cb, cbError);
		} else if(object == model.numGuestsChanged){
			numberOfGuests = model.getNumberOfGuests();
			console.log("trying to update ingredients table view4");
			document.getElementById("view4IngredientThumbnail").innerHTML = generateIngredientsTable(dish['ingredients']);
		}
	}
}
 
