// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  console.log("1- Initializing an App. (main.js)");
  App.initialize();
});
