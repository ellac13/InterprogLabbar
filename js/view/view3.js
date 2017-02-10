//View3 Object constructor
var View3 = function (container, model) {
	model.addObserver(this);

	this.dishes = model.getAllDishes('main dish');
	this.openDishButton = container.find(".openDishButton");

	this.generateDishesHTML = function(){
		var html = "";
		for (var i = 0; i < this.dishes.length; i++) {
			html = html + generateThumbnailHTML(this.dishes[i]['name'],this.dishes[i]['image'],this.dishes[i]['description'],this.dishes[i]['id']);
		};
		return html;
	}


	var generateThumbnailHTML = function(name, image, description, id){
		return '<div class="col-sm-12 col-md-3"><div class="thumbnail"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><button class="btn btn-primary openDishButton" role="button" data_dishid="' + id + '">View</button> <button class="btn btn-default" role="button">Select</button></p></div></div></div>'; 
		//return '<div class="col-sm-12 col-md-3"><div class="thumbnail"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><a href="#" class="btn btn-primary" role="button">View</a> <a href="#" class="btn btn-default" role="button">Select</a></p></div></div></div>'; 
		//TODO: Lös knapparna
	}
	
	//Update the dish grid
	container.find("#selectDishGridRow").html(this.generateDishesHTML());

	


}
 
