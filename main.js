$(function (){

	var shoesData = {allShoes: [{name:"Nike", price:199.00, color:"black", size:10},
	 {name:"Loafers", price:59.00, color:"blue", size:9}
	,{name: "Wing Tip", price:259.00, color: "brown", size:11 }]};

	var theTemplateScript = $("#shoe-template").html();

	var theTemplate = Handlebars.compile (theTemplateScript);
	Handlebars.registerPartial("description", $("#shoe-description").html());
	$(".shoesNav").append (theTemplate(shoesData));
});