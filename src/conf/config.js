// config file
seajs.config({

    // 别名配置
    alias: {
        'jquery': 'sui/vendor/jquery'
    },

    // 路径配置
    paths: {
        'gallery': 'https://a.alipayobjects.com/gallery'
    },

    // 变量配置
    vars: {
        'locale': 'zh-cn'
    },

    // 映射配置
    map: [],

    // 预加载项
    preload: [
        this.jQuery ? '' : 'jquery'
    ],

    // 调试模式
    debug: true,

    // Sea.js 的基础路径
    base: '/scripts/',

    // 文件编码
    charset: 'utf-8'
});