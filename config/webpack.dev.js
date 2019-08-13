const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	// 入口文件配置
	entry: {
		main: './src/main.js'
	},
	// 出口文件配置项
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包文件名称
		filename: 'bundle.js'
	},
	// 模块，例如如何解析css，图片转换，压缩
	module: {
		rules: [
			{
				test:/\.(jsx|js)$/,
				use:{
					loader:'babel-loader'
				},
				exclude:/node_modules/
			},
			{
				test: /\.css$/,
				use: extractTextPlugin.extract({
					fallback: "style-loader",
                    use: "css-loader"
				})
				// css分离后这里需要重新配置，下面就注释了
				// use:[
				// 	{
				// 		loader: 'style-loader'
				// 	}, {
				// 		loader: 'css-loader'
				// 	}
				// ]
			},
			{
                test: /\.less$/,
                use: extractTextPlugin.extract({
					fallback: "style-loader",
                    use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'less-loader'
						}
					]
				})
			},
			{
                test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', //是指定使用的loader和loader的配置参数
                    options:{
						limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
						outputpath: 'images/'
                    }
                }]
            }
		]
	},
	// 插件，用于生产模板和各项功能
	plugins:[
        new htmlPlugin({
            minify:{ //是对html文件进行压缩
                removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index.html' //是要打包的html模版路径和文件名称。
		}),
		new extractTextPlugin('css/index.css')
    ],
	// 配置webpack开发服务功能
	devServer: {
		//设置基本目录结构,用于找到程序打包地址
        contentBase:path.resolve(__dirname,'../dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8089
    }
}