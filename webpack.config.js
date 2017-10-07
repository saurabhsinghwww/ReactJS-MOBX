var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');
// for automatically adding java script files to index.html
//--swap?
 
//common chunk plugin

var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 

 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
 

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      },
 
    ]
  },
  
  //debug, es6 to es5 mapping
  // ES6 code and line by line mapping of ES6 to ES5 code
  devtool: 'source-map',

 // can be used as this
 //load from webpack external
// import config from "config";
  externals: {
    config: JSON.stringify(require(path.join(__dirname, "development.json")))
  },
 

  plugins: [

    // Inject global constants to our code base
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify("12.34")
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks:  function(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
   }),

   
   new HtmlWebpackPlugin({
    title: 'My Product App',
    filename: 'index.html', //output file name
    template: './src/index.html' //input file
  })
     
  ],

  devServer: {
    contentBase: APP_DIR,
    port: 8085,

    historyApiFallback: {

       index : '/'
    }

  }
  

};

module.exports = config;


