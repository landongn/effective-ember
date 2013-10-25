App.TreatCreateRoute = Ember.Route.extend({
	model: function () {
		if (!App.CurrentTreat) {
			App.CurrentTreat = App.Treat.create();
		}

		console.log(App.CurrentTreat);
		return App.CurrentTreat;
	},
	setupController: function (model, controller) {
		controller.set('model', controller);
	},

	renderTemplate: function () {
		this.render('menu/mainMenu', {
			outlet: 'menu'
		});

		this.render('activities/treat/create', {
			outlet: 'activity'
		});

		this.render('menu/treat/workflow', {
			into: 'menu/mainMenu',
			outlet: 'subnav'
		});
	}
});
