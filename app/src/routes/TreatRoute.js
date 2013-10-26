App.TreatRoute = Ember.Route.extend({
	model: function () {

	},
	setupController: function (model, controller) {

	},

	renderTemplate: function () {
			this.render('menu/mainMenu', {
			outlet: 'menu'
		});
	}
});
