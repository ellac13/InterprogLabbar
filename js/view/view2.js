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
	
}
 
