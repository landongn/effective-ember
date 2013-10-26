App.Router.map(function () {
// start by defining a top level 'container' model of models
  this.resource('treat', function () {

    // define an action on that model
    this.route('create');

    // You can embed resources in other resources
    this.resource('scoop', function () {
      this.route('add');
    });

    this.resource('topping', function () {
      this.route('add');
    });

    this.route('finalize');
  });
});
