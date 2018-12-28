module.exports = {
    entry: __dirname + "/src/index.js",  //唯一的入口文件
    output: {
        path: __dirname + "/public",    //存放输出文件的文件夹
        filename: "bundle.js"   //输出文件的文件名
    }
}
//__dirname是node.js中的一个全局变量，指向当前执行脚本所在的目录