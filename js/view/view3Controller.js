//view3Controller Object constructor
var View3Controller = function (view, model, stateController) {
	
	var openDishClick = function(event) {
		model.setCurrentlyViewedDishID(event.target.attributes['data_dishid'].nodeValue);
		stateController.showView("view4");
	}

	$("#selectDishGridRow").on("click", "button.openDishButton", openDishClick);
}