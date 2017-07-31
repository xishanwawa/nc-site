//webpack.config.js
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var hostIP = 'localhost';
var portNumber = '3000';
module.exports = {
	entry: {
          main: __dirname + "/src/main.jsx",  //入口文件
		  vendor: ['redux', 'react-redux', 'react-router']
	},
	output: {
		//path: './public',
		//path: path.resolve(__dirname, "public"),
		publicPath: 'http://' + hostIP + ':'+ portNumber + '/public/',
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
	          loader: extractCSS.extract(['css', 'less'])
	        },
		]
	},
	resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            reducers: path.join(__dirname, 'src/reducers'),
            components: path.join(__dirname, 'src/components'),
			containers: path.join(__dirname, 'src/containers'),
            store: path.join(__dirname, 'src/store'),
            routes: path.join(__dirname, 'src/routes'),
			assets: path.join(__dirname, 'src/assets'),
        },
    },
	devtool: 'source-map',
	plugins: [
     //    new HtmlWebpackPlugin({
	    //   template: __dirname + "/src/index.tmpl.html",
	    // }),
	    new webpack.HotModuleReplacementPlugin(),                         //热加载插件
	    extractCSS,                                                        //生成独立文件插件，和module对应
		//new OpenBrowserPlugin({ url: 'http://' + hostIP + ':'+ portNumber +'/' }),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10240
        }),
    ],
	devServer: {
		// headers: {
  //           "Access-Control-Allow-Origin": "*"
  //       },
		// //contentBase: "./public",                                          //本地服务器所加载的页面所在的目录
	 //    colors: true,                                                     //终端中输出结果为彩色
	 //    historyApiFallback: true,                                         //不跳转
	 //    inline: true,                                                     //实时刷新
	 //    hot: true,
	 //    port: 3000,
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
