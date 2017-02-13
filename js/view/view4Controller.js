//view4Controller Object constructor
var View4Controller = function (view, model, stateController) {
	var backButtonClick = function(event) {
		stateController.showView("view3");
	}
	$("#view4").on("click", "button#backToSelectDishButton", backButtonClick);

	var confirmButtonClick = function(event) {
		model.addDishToMenu(model.getCurrentlyViewedDishID());
	}
	$("#view4").on("click", "button#confirmDishButton", confirmButtonClick);
}