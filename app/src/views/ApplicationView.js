App.ApplicationView = Ember.View.extend({
  templateName: 'root/application_root',

  eventManager: Ember.Object.create({
    doubleClick: function (event, view) {
      console.log("double clicked on ApplicationView");
    }
  })
});
