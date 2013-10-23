App.Router.map(function () {
// start by defining a top level 'container' model of models
  this.resource('treat', function () {

    // define an action on that model
    this.route('start');

    // You can embed resources in other resources
    this.resource('flavor', function () {
      this.route('choose', {path: 'index'}); //name, options as args
      this.route('scoops');
      this.route('toppings');
      this.resource('topping', function () {
        this.route('add');
      });
    });

    this.route('finalize');
  });
});
