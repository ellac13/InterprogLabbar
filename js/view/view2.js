//View2 Object constructor
var View2 = function (container, model) {
	
	//Subscribe to model changes.
	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.confirmButton = container.find("#confirmationButton");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	var noOfGuests;
	var menu;

	this.generateViewHTML = function(){
		var html = '<tr style="background: rgba(0,0,0,0.3)"><th>Dish</th><th class="rightAlignText">Cost</th><th></th></tr>';
		//for(dish in menu){
		for (var dish = 0; dish < menu.length; dish++){
			html = html + generateRowHTML(menu[dish]['title'],menu[dish]['ingredients'], menu[dish]['id']);
		};
		return html + '<tr><td></td><td class="rightAlignText" colspan="2">Total cost: <span id="totalCost">' + model.getTotalMenuPrice() + '</span></td></tr>';
	}

	var generateRowHTML = function(name, ingredients, id){
		var price = 0;
		for (var i = 0; i < ingredients.length; i++) {
			price += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		price = parseInt(price * model.getNumberOfGuests());
		return '<tr><td>' + name +'</td><td class="rightAlignText">' + price + '</td><td><button class="btn btn-default dishRemovalButton" data_dishID="' + id + '"role="button"><span class="glyphicon glyphicon-remove"></span></button></td></tr>';
	}

	this.update = function(object){
		if(object == model.dishAdded || object == model.dishRemoved){
			menu = model.getFullMenu(); 
			//Update the dish grid
			container.find("#selectedDishesTable").html(this.generateViewHTML());
		}else if(object === model.numGuestsChanged){
			noOfGuests = model.getNumberOfGuests();
			this.numberOfGuests.html(noOfGuests);	

			menu = model.getFullMenu(); 
			//Update the dish grid
			container.find("#selectedDishesTable").html(this.generateViewHTML());
		}
	}
	//Update everything
	this.update(model.numGuestsChanged);
}
 
