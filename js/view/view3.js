//View3 Object constructor
var View3 = function (container, model) {
	model.addObserver(this);

	var selectDishGridRow = container.find("#selectDishGridRow");
	var view3 = this;

	//Initially set to dummy values, will be overwritten by the controller
	this.currentDishType = "";
	this.currentDishSearch = "";
	var dishes;


	this.generateDishesHTML = function(){
		var html = "";
		if(dishes.length < 1){
			return "No results found";
		}
		for (var i = 0; i < dishes.length; i++) {
			html = html + generateThumbnailHTML(dishes[i]['title'], (model.baseImageURL + dishes[i]['image']), dishes[i]['id']);
		};
		return html;
	}

	var generateThumbnailHTML = function(name, image, id){
		return '<div class="col-sm-12 col-md-3"><div class="thumbnail" data_dishid="' + id + '"><img src="' + image + '"><div class="caption"><h3>' + name + '</h3><p><button class="btn btn-primary openDishButton" role="button">View</button> <button class="btn btn-default dishSelectionButton" role="button">Select</button></p></div></div></div>'; 
	}

	var success = function(data){
		dishes = data.results;
		//console.log(data);
		console.log('Successful getAllDishes in view3 with type=' + view3.currentDishType + ' and query=' + view3.currentDishSearch);
		selectDishGridRow.html(view3.generateDishesHTML());
	}

	var fail = function(data){
		console.log(data)
		selectDishGridRow.html('Sorry, failed to load dishes');
	}
	
	this.update = function(object){
		//Print loading message
		selectDishGridRow.html('Loading...');

		//Update dish selection to show
		//dishes = model.getAllDishes(this.currentDishType,this.currentDishSearch, success, fail);
		model.getAllDishes(this.currentDishType,this.currentDishSearch, success, fail);
		
		//Update the dish grid
		//container.find("#selectDishGridRow").html(this.generateDishesHTML());

	}
	//this.update();
}
 
