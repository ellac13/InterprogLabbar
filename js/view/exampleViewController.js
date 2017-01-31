//ExampleViewController Object constructor
var ExampleViewController = function (view, model) {
	
	
	var plusButtonClick = function(event) {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		alert("pluspress");
	}
	view.plusButton.click(plusButtonClick);

}
 
