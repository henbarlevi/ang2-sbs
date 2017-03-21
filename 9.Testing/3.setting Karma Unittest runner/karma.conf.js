module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'], //which unit test framework we use
    files: [ //files to run as unit tests
      {pattern: './src/specs.ts', watched: false} //run specs.ts (becuase we import all the tests there) and not monitoring for changes
    ],
    preprocessors: {
      './src/specs.ts': ['webpack'] //want to preprocess this file using webpack
    },
    webpack: { //webpack specific configuration - this object will pass to webpack - so we can copy this part from webpack.config
      //telling the webpack what to do with ts html or css files 
      module: {
        loaders: [
          {test: /\.ts$/, loader: 'ts'},
          {test: /\.html$/, loader: 'raw'},
          {test: /\.css$/, loader: 'raw'}
        ]
      },
      resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
      }
    },
    webpackMiddleware: { 
      stats: 'errors-only' //make the massages in cmd show only errors (less verbose)
    },
    browsers: ['Chrome']//telling karma which browser to use to run the test
  });
};
