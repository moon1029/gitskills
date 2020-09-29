const path 

module.exports = {

}

if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
}else if(process.env.NODE_ENV === 'test'){
    console.log('测试环境')
}else if(process.env.NODE_ENV === 'production'){
    console.log('测试环境')
}