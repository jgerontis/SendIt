module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  outputDir: "./static/",
  pages: {
    index: "src/entry/index.js",
    about: "src/entry/about.js",
    app: "src/entry/app.js",
  },
};
