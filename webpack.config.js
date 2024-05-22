module.exports = {
  entry: {
    "./jsQR.js": "./src/index.ts",
    "./docs/jsQR.js": "./src/index.ts",
  },
  output: {
    filename: "[name]",
    libraryTarget: "umd",
    libraryExport: "default",
    library: "jsQR",
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  mode: "production",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [{ test: /\.ts$/, use: [{ loader: "ts-loader" }] }],
  },
};
