//View3 Object constructor
var View3 = function (container, model) {
	model.addObserver(this);

	//Initially set to dummy values, will be overwritten by the controller
	this.currentDishType = 'main dish';
	this.currentDishSearch = '';
	this.dishes = model.getAllDishes(this.currentDishType,this.currentDishSearch);


	this.generateDishesHTML = function(){
		var html = "";
		for (var i = 0; i < this.dishes.length; i++) {
			html = html + generateThumbnailHTML(this.dishes[i]['name'],this.dishes[i]['image'],this.dishes[i]['description'],this.dishes[i]['id']);
		};
		return html;
	}


	var generateThumbnailHTML = function(name, image, description, id){
		return '<div class="col-sm-12 col-md-3"><div class="thumbnail" data_dishid="' + id + '"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><button class="btn btn-primary openDishButton" role="button">View</button> <button class="btn btn-default dishSelectionButton" role="button">Select</button></p></div></div></div>'; 
		//return '<div class="col-sm-12 col-md-3"><div class="thumbnail"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><a href="#" class="btn btn-primary" role="button">View</a> <a href="#" class="btn btn-default" role="button">Select</a></p></div></div></div>'; 
		//TODO: Lös knapparna
	}
	
	//Update the dish grid
	container.find("#selectDishGridRow").html(this.generateDishesHTML());

	
	this.update = function(object){
		//Look in search field and dropdown for search terms
		container.find("#selectDishGridRow")

		//Update dish selection to show
		this.dishes = model.getAllDishes(this.currentDishType,this.currentDishSearch);
		this.generateDishesHTML();

		//Update the dish grid
		container.find("#selectDishGridRow").html(this.generateDishesHTML());
	}

}
 
