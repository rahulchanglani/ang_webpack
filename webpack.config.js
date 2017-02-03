'use strict';  
var webpack = require('webpack'),  
path = require('path');

var APP = __dirname + '/app';

module.exports = {  
    // config goes here
	context: APP,
     /*entry: {
           app: './index.js'
    },*/
    output: {
        path: APP,
        filename: 'bundle.js'
    },
   entry: {  
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
/* context, entry, output */
 module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
    	test: /\.js$/,
   	loader: 'ng-annotate-loader!babel-loader?presets[]=es2015!jshint-loader',
   	exclude: /node_modules|bower_components/
      }
    ]
  },
plugins: [  
    new webpack.HotModuleReplacementPlugin()
  ]	
};
