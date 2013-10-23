App.IndexRoute = Ember.Route.extend({

  renderTemplate: function () {
    this.render('menu/mainMenu', {
      outlet: 'menu'
    });

    this.render('activities/index', {
      outlet: 'activity'
    });
  }
});
