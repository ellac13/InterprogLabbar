//view3Controller Object constructor
var View3Controller = function (view, model, stateController) {
	window.onload = function(){
		alert("onload");
		var openDishClick = function(event) {
			alert("opendishclick");
			model.setCurrentlyViewedDishID(event.target.attributes['data_dishid'].nodeValue);
			stateController.showView("view4");
		}
		view.openDishButton.click(openDishClick);
	}
}