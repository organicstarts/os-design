const HtmlWebpackPlugin = require("html-webpack-plugin"); // Simplifies creation of HTML files to serve your webpack bundles
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extracts CSS into separate files
const TerserJSPlugin = require('terser-webpack-plugin'); // Uses terser to minify JavaScript
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // Optimize \ minimize CSS assets
const path = require("path");
const resolve = dir => path.join(__dirname, "./", dir);
const site = process.env.SITE || 'os';

module.exports = {
  entry: [
    resolve(`${site}/semantic/src/semantic.less`),
    resolve(`${site}/index.scss`),
    resolve(`${site}/index.js`)
  ],
  output: {
    filename: "main.js",
    path: resolve("dist"),
    libraryTarget: "var",
    library: "organicStart"
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({ // Uses terser to minify JavaScript
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }), 
      new OptimizeCSSAssetsPlugin({ // Optimize \ minimize CSS assets
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        }
      })
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // Extracts CSS into separate files
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({ // Simplifies creation of HTML files to serve your webpack bundles
      template: resolve(`${site}/static/index.html`),
      filename: "index.html",
      chunks: ['main']
    }) // ,
    // new HtmlWebpackPlugin({ // Simplifies creation of HTML files to serve your webpack bundles
    //   template: resolve(`${site}/static/login.html`),
    //   filename: "login.html",
    //   chunks: ['login']
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.css$/,
        use: [
          //"style-loader",  // Adds CSS to the DOM by injecting a <style> tag
          {
            loader: MiniCssExtractPlugin.loader, // Extracts CSS into separate files
            options: {
              hmr: process.env.NODE_ENV === 'development',
              //reloadAll: true, // Forceful method for Hot Module Reloading (HMR)
            },
          },
          "css-loader", // Interprets @import and url() like import/require() and will resolve them
          {
            loader: "postcss-loader", // Process CSS
            options: {
              plugins: [
                require("precss"), // Use Sass-like markup and staged CSS features in CSS
                require("autoprefixer") // Parse CSS and add vendor prefixes to CSS rules
              ]
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          //"style-loader", // Adds CSS to the DOM by injecting a <style> tag
          {
            loader: MiniCssExtractPlugin.loader, // Extracts CSS into separate files
            options: {
              hmr: process.env.NODE_ENV === 'development',
              //reloadAll: true, // Forceful method for Hot Module Reloading (HMR)
            },
          },
          "css-loader", // Interprets @import and url() like import/require() and will resolve them
          {
            loader: "postcss-loader", // Process CSS
            options: {
              plugins: [
                require("precss"), // Use Sass-like markup and staged CSS features in CSS
                require("autoprefixer") // Parse CSS and add vendor prefixes to CSS rules
              ]
            }
          },
          "sass-loader" // Loads a Sass/SCSS file and compiles it to CSS
        ]
      },
      {
        test: /\.less$/,
        use: [
          //"style-loader", // Adds CSS to the DOM by injecting a <style> tag
          {
            loader: MiniCssExtractPlugin.loader, // Extracts CSS into separate files
            options: {
              hmr: process.env.NODE_ENV === 'development',
              //reloadAll: true, // Forceful method for Hot Module Reloading (HMR)
            },
          },
          "css-loader", // Interprets @import and url() like import/require() and will resolve them
          {
            loader: "postcss-loader", // Process CSS
            options: {
              plugins: [
                require("autoprefixer") // Parse CSS and add vendor prefixes to CSS rules
              ]
            }
          },
          "less-loader" // Compiles Less to CSS
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
  devServer: {
    contentBase: resolve('dist') // ,
    // historyApiFallback: {
    //   disableDotRule: true,
    //   rewrites: [
    //       { from: /^\/login\/.*$/, to: resolve(`${site}/static/login.html`)}
    //   ]
    // }
  }//,
  //watch: true
};