const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("layout", resolve("src/layout"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"))
      .set("utils", resolve("src/utils"))
      .set("styles", resolve("src/styles"));

    config.devtool("source-map");
  },
  devServer: {
    hot: true,
    hotOnly: true, //只有热更新不会刷新页面
    port: 8082,
  },
};
