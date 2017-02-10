//view2Controller Object constructor
var View2Controller = function (view, model, stateController) {
	
	
	var plusButtonClick = function(event) {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	}
	view.plusButton.click(plusButtonClick);

	var minusButtonClick = function(event) {
		model.setNumberOfGuests(model.getNumberOfGuests() -1);
	}
	view.minusButton.click(minusButtonClick);

	var confirmButtonClick = function(event) {
		stateController.showView("view5");
	}
	view.confirmButton.click(confirmButtonClick);
}