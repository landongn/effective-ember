App.TreatCreateRoute = Ember.Route.extend({
	model: function () {
		if (!App.CurrentTreat) {
			App.CurrentTreat = App.Treat.create();
		}

		App.CurrentTreat.reopen({
			flavors: App.Flavors
		});

		return App.CurrentTreat;
	},
	setupController: function (model, controller) {
		controller.set('model', controller);
	},

	renderTemplate: function () {

		this.render('activities/treat/create', {
			outlet: 'activity'
		});

		this.render('menu/treat/workflow', {
			into: 'menu/mainMenu',
			outlet: 'subnav'
		});
	},
	actions: {
		addTopping: function (topping) {

		},
		addScoop: function (flavor) {

		}
	}
});
