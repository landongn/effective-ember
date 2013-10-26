App.TreatCreateController = Ember.ObjectController.extend({
	scoops: Ember.ArrayController.extend(),
	toppings: Ember.ArrayController.extend(),
	topping_choices: [],
	flavors: ['Chocolate', 'Vanilla', 'Rocky Road', 'Mint Chocolate Chip', 'Butterscotch', 'Cookies and Cream'],
	subtotal: function () {
		return (this.scoops.length * this.cost_per_scoop) + (this.toppings.length * this.cost_per_topping);
	}.property('toppings', 'scoops'),
	tax: 0.03,
	cost_per_scoop: 1.25,
	cost_per_topping: 0.50,
	maximum_scoops: 3,
	maximum_toppings: 5
});
