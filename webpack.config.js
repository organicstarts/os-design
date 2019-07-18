var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const resolve = dir => path.join(__dirname, "./", dir);

module.exports = {
  entry: [
    resolve("src/semantic/src/semantic.less"),
    resolve("src/index.scss"),
    resolve("src/index.js")
  ],
  output: {
    filename: "main.js",
    path: resolve("dist"),
    libraryTarget: "var",
    library: "organicStart"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          name: "fonts/[name].[ext]",
          limit: 8192,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: { name: "images/[name].[ext]" }
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: { name: "fonts/[name].[ext]" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/static/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ],
  devServer: {
    contentBase: resolve('dist')
  },
  watch: true
};
