App.Treat = Ember.Object.extend({
	scoops: [],
	toppings: [],
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
	}
});

App.Topping = Ember.Object.extend({
	name: null
});

App.Scoop = Ember.Object.extend({
	name: null
});
