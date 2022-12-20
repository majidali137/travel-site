const currentTask = process.env.npm_lifecycle_event
const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
  ]

let config = {
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins:  postCSSPlugins}}]
                   
        }
    ]
   }
}

if(currentTask == 'dev') {
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
}
config.devServer = {
  static:{
    before:function(app, server) {
        server._watch('./app/**/*.html')
    },

  },
    static: {
        
      directory: path.join(__dirname, "app")
    },

    hot: true,
    port: 3000,// default 8000
    host: '0.0.0.0'
  }
config.mode = 'development'

}

if(currentTask == 'build') {
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist')
}
  config.mode = 'production'
}

module.exports = config