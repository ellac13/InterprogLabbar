//view6Controller Object constructor
var View6Controller = function (view, model, stateController) {
	
	//View dish
	var openDishClick = function(event) {
		model.setCurrentlyViewedDishID(event.target.parentElement.parentElement.parentElement.attributes['data_dishid'].nodeValue);
		stateController.showView("view4");
	}

	$("#selectDishGridRow").on("click", "button.openDishButton", openDishClick);

	//Dish type selection
	var dishTypeClick = function(event) {
		//model.setCurrentlyViewedDishID(event.target.attributes['data_dishtype'].nodeValue);
		$("#dropdownMenu1").html(event.target.innerHTML + ' <span class="caret"></span>');
		view.currentDishType = event.target.attributes['data_dishtype'].nodeValue;
		view.update();
	}

	$(".dishTypeSelector").click(dishTypeClick);

	//Dish search
	var dishSearchClick = function(event) {
		view.currentDishSearch = document.getElementsByClassName('dishSearchField')[0].value;
		view.update();
	}

	//In case of search button uncommented, add listener to button as well
	$(".dishSearchButton").click(dishSearchClick);

	$(".dishSearchField").keyup(dishSearchClick);

	//Dish selection
	var dishSelectClick = function(event) {
		model.addDishToMenu(event.target.parentElement.parentElement.parentElement.attributes['data_dishid'].nodeValue);
	}

	$("#selectDishGridRow").on("click", "button.dishSelectionButton", dishSelectClick);



	//Initially select the first dish type in the list
	$(".dishTypeSelector")[0].click();
}