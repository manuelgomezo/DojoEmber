import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'user',
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('https://jsonplaceholder.typicode.com/users/');
  },
});
