import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list');
  this.route('detail',{path:'detail/:postId'});
  this.route('user');
  this.route('userpost',{path:'userpost/:userId'});
});

export default Router;
