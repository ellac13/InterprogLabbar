//View56header Object constructor
var View56header = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests = model.getNumberOfGuests();
	//Update the dish grid
	container.find("#finalHeaderNumberOfGuests").html(numberOfGuests);
}
 
