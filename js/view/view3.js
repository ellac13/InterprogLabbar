//View3 Object constructor
var View3 = function (container, model) {
	model.addObserver(this);

	//Initially set to dummy values, will be overwritten by the controller
	this.currentDishType;
	this.currentDishSearch;
	var dishes;


	this.generateDishesHTML = function(){
		var html = "";
		for (var i = 0; i < dishes.length; i++) {
			html = html + generateThumbnailHTML(dishes[i]['name'],dishes[i]['image'],dishes[i]['description'],dishes[i]['id']);
		};
		return html;
	}


	var generateThumbnailHTML = function(name, image, description, id){
		return '<div class="col-sm-12 col-md-3"><div class="thumbnail" data_dishid="' + id + '"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><button class="btn btn-primary openDishButton" role="button">View</button> <button class="btn btn-default dishSelectionButton" role="button">Select</button></p></div></div></div>'; 
	}
	
	this.update = function(object){
		//Look in search field and dropdown for search terms
		container.find("#selectDishGridRow")

		//Update dish selection to show
		dishes = model.getAllDishes(this.currentDishType,this.currentDishSearch);
		this.generateDishesHTML();

		//Update the dish grid
		container.find("#selectDishGridRow").html(this.generateDishesHTML());
	}
	this.update();
}
 
