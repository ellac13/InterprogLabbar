//View6 Object constructor
var View6 = function (container, model) {

	//Subscribe to model.
	model.addObserver(this);

	var menu;
	var numberOfGuests;

	this.generateViewHTML = function(){
		var html = "";
		for (dish in menu){
			html = html + generateDishHTML(menu[dish]['name'],menu[dish]['image'],menu[dish]['description'], menu[dish]['ingredients']);
		};
		return html;
	}

	var generateIngredientTableHTML = function(ingredients){
		var ingredientsHTML = "";
		for (var i = 0; i < ingredients.length; i++) {
			ingredientsHTML = ingredientsHTML + '<tr><td class="printTableQuantity">' + parseFloat(ingredients[i]['quantity'] * numberOfGuests).toFixed(1) + ' ' + ingredients[i]['unit'] + '</td><td>' + ingredients[i]['name'] + '</td></tr>';
		};
		return '<div class="col-sm-12 col-md-6 col-lg-6"><h3>Ingredients</h3><hr><table id="printIngredientTable">'+ ingredientsHTML +'</table></div>'; 
	}

	var generateDishHTML = function(name, image, description, ingredients){
		return '<div class="row dishDescription"><div class="col-sm-12 col-md-6 col-lg-6"><img src="images/' + image + '" style="float:left"><h2>' + name + '</h2><p>' + description + '</p></div>' + generateIngredientTableHTML(ingredients) + '</div>';
	}

	this.update = function(object){
		menu = model.getFullMenu();
		numberOfGuests = model.getNumberOfGuests();
		//Update the dish grid
		container.find("#printView").html(this.generateViewHTML());
	}

	this.update();
}
 
