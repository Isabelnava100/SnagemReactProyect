const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@container": path.resolve(__dirname, "./src/containers/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@routess": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      '@context':path.resolve(__dirname,'src/context/'),
      '@hooks':path.resolve(__dirname,'src/hooks/'),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico)$/,
        type: "asset/resource",
        exclude: [
          path.resolve(__dirname, "assets/fonts"),
          //, Any other svg font path
        ],
        generator: {
            filename: 'assets/images/[hash][ext][query]'
          }
      },

      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: "asset/resource",
        include: [
          path.resolve(__dirname, "assets/fonts"),
          //, Any other svg font path
        ],
        generator: {  //If emitting file, the file path is
            filename: 'assets/fonts/[hash][ext][query]'
          },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devServer: {
    historyApiFallback: true,
  },
};
