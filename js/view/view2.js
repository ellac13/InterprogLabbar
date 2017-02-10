//View2 Object constructor
var View2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.confirmButton = container.find("#confirmationButton");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	//document.getElementById('numberOfGuests').innerHTML = "whatever liksom";


	this.noOfGuests = model.getNumberOfGuests();
	
	this.numberOfGuests.html(this.noOfGuests);

	var confirmButtonClick = function(event) {
		document.getElementById('view234').style.display= 'none';
		document.getElementById('view56').style.display= '';
	}
	this.confirmButton.click(confirmButtonClick);
	


	this.menu = model.getFullMenu(); //TODO:Implementera currently vald dish

	this.generateViewHTML = function(){
		var html = '<tr style="background: rgba(0,0,0,0.3)"><th>Dish</th><th class="rightAlignText">Cost</th></tr>';
		for (var i = 0; i < this.menu.length; i++) {
			html = html + generateRowHTML(this.menu[i]['name'],this.menu[i]['ingredients']);
		};
		return html + '<tr><td></td><td class="rightAlignText">Total cost: <span id="totalCost">' + model.getTotalMenuPrice() + '</span></td></tr>';
	}

	var generateRowHTML = function(name, ingredients){
		var price = 0;
		for (var i = 0; i < ingredients.length; i++) {
			price += ingredients[i]['quantity'] * ingredients[i]['price'];
		};
		price = price * model.getNumberOfGuests();
		return '<tr><td>' + name +'</td><td class="rightAlignText">' + price + '</td></tr>';
	}
	
	//Update the dish grid
	container.find("#selectedDishesTable").html(this.generateViewHTML());
}
 
