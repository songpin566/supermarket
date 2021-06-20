module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //在脚手架3.0中,@默认帮你写成了 "@":"src",就是说@表示的是src目录
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    }

  }

}