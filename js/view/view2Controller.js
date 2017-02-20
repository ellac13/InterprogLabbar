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

	//Dish removal
	var dishRemoveClick = function(event) {
		model.removeDishFromMenu(event.target.parentElement.attributes['data_dishid']['nodeValue']);
	}

	$("#selectedDishesTable").on("click", "button.dishRemovalButton", dishRemoveClick);

}