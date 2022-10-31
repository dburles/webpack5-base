import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

export default {
  mode: "development",
  entry: {
    index: "./src/index.mjs",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
