// path模块是node.js中处理路径的核心模块。可以很方便的处理关于文件路径的问题。
const path = require('path')

module.exports = {
    //https://cli.vuejs.org/zh/config/#publicpath
    publicPath:'./',    
    outputDir:'dist',
    // assetsDir:'',
    indexPath:'index.html',
    filenameHashing:true,
    page:{
        //项目入口文件
        entry:'src/index/main.js',
    },
    lintOnSave:process.env.NODE_ENV!=='production', //生产情况下禁用eslint-load禁用
    produc
}

if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
}else if(process.env.NODE_ENV === 'test'){
    console.log('测试环境')
}else if(process.env.NODE_ENV === 'production'){
    console.log('测试环境')
}