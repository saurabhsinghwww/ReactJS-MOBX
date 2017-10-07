var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// for automatically adding java script files to index.html
//--swap?
 
//common chunk plugin

var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 

 
  // if we comment this the file will be in memory and returned by webpack 
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js'
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
    config: JSON.stringify(require(path.join(__dirname, "production.json")))
  },
 

  plugins: [

    // Inject global constants to our code base
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("12.34")
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.[hash].js',
      minChunks:  function(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
   }),
 
   new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      warnings: false,
    },
    sourceMap: true // not needed in prod
   }),
   // use compress plug in if you want to compress the file, can de done by the webserver also
   new HtmlWebpackPlugin({
    title: 'My Product App',
    filename: 'index.html', //output file name
    template: './src/index.html' //input file
  }),

  //copy asset folder also to dist
    new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      },

      // {
      //   from: "index.html",
      //   to: "index.html"
      // }
    ])
     
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


