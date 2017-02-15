// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router' // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    console.log("2- App initialize function. (app.js)");
    Router.initialize();
  };
  return {
    // What we return here will be used by other modules
    initialize: initialize
  };
});
