App.ApplicationController = Ember.Controller.extend({
  isCreatingTreat: false,
  // computed property!
  lastTreatCreated: function () {
    return new Date().getTime()/1000;
  // .on() tells us what to observe to automatically recalculate
  }.on('treatCount'),
  treatCount: 0
});
