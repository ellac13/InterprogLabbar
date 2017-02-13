//View56header Object constructor
var View56header = function (container, model) {
	
	//Subscribe to changes in the model
	model.addObserver(this);

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests;

	this.backButton = container.find("#finalHeaderBackButton");

	var backButtonClick = function(event) {
		document.getElementById('view56').style.display= 'none';
		document.getElementById('view234').style.display= '';
	}
	this.backButton.click(backButtonClick);

	this.update = function(object){
		if(object === model.numGuestsChanged){
			numberOfGuests = model.getNumberOfGuests();
			container.find("#finalHeaderNumberOfGuests").html(numberOfGuests);
		}
	}
	//initialize the page
	this.update(model.numGuestsChanged);
}
 
