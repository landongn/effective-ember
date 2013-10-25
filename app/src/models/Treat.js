App.Treat = Ember.Object.extend({
	scoops: [],
	toppings: [],
	subtotal: 0.0,
	tax: 0.03,
	cost_per_scoop: 1.25,
	cost_per_topping: 0.50,
	cost_per_extra_topping: 1.00,
	maximum_scoops: 3,
	maximum_toppings: 5,
	create: function () {
		this._super();
	},

	addScoop: function (flavor) {
		// add one scoop of the given flavor into our treat.
		if (this.scoops.length <= this.get('maximum_scoops')) {
			this.get('scoops').addObject(App.Scoop.create({
				name: flavor
			}));
		}
	},

	addTopping: function (topping) {
		// add a topping to our treat
		this.toppings.addObject(App.Scoop.create({
			name: topping
		}));
	},

	finalize: function () {
		// finalize the treat by calculating the ingredients based on our model
		this.scoops.forEach(function (scoop) {
			console.log(scoop.get('name'));
			this.set('subtotal', this.get('subtotal') + this.get('cost_per_scoop'));
		}.bind(this));

		this.toppings.forEach(function (topping) {
			console.log(topping.get('name'));
			this.set('subtotal', this.get('subtotal') + this.get('cost_per_topping'));
		}.bind(this));
	}
});

App.Topping = Ember.Object.extend({
	name: null
});

App.Scoop = Ember.Object.extend({
	name: null
});

