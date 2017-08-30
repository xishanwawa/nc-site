//webpack.config.js
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var HtmlWebpackPlugin = require('html-webpack-plugin'); //自动打开浏览器插件

//修改antd.design主题文件
var theme = require('./theme.config.js')

var hostIP = 'localhost';
var portNumber = '3000';

module.exports = {
	entry: {
		main: __dirname + "/src/main.jsx",  //入口文件
		vendor: ['redux', 'react-redux', 'react-router', 'react-router-redux', 'redux-thunk']
	},
	output: {
		//path: './lib',
		//path: path.resolve(__dirname, "public"),
		publicPath: '//' + hostIP + ':'+ portNumber + '/lib/',
		filename: "[name].js",   //打包后输出的文件名
		chunkFilename: '[id].chunk.js'
	},
	externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
		immutable: 'Immutable'
    },
	module: {
		loaders:[
			{
				test: /\.(js|jsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
	            test: /\.(jpg|png|gif)$/,
	            loader: 'url',
	        },
			{
            test: /\.(less)$/,
            loaders:[
						"style",
						"css",
						`less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
					]
			}
		]
	},
	resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            app: path.join(__dirname, 'src/app'),
            rootReducer: path.join(__dirname, 'src/rootReducer'),
            store: path.join(__dirname, 'src/store'),
            rootRoutes: path.join(__dirname, 'src/rootRoutes'),
			assets: path.join(__dirname, 'src/assets'),
			utils: path.join(__dirname, 'src/utils')
        },
    },
	devtool: 'cheap-module-eval-source-map',
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),                         //热加载插件
	    extractCSS,                                                        //生成独立文件插件，和module对应
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10240
        }),
    ],
	devServer: {
	    headers: {
            "Access-Control-Allow-Origin": "*"
        },
        devtool: 'eval',
        hot: true,
        inline: true,
        port: 3000,
        host: hostIP
	}
}
