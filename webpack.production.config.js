//webpack.production.js
var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('[name]-[contenthash:8].css')
var autoprefixer = require('autoprefixer');
var moment = require('moment')
var nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss")

var hostIP = 'localhost';
var portNumber = '3000';

const environments = {
    'buildlocal': '//localhost:3000',
	'buildtest': 'http://static-scrm.upesn.com',
    // 正式环境
    'buildup': 'http://static-scrm.upesn.com',
};

const productionEnv = environments[process.env.npm_lifecycle_event];
console.log(productionEnv)


module.exports = {
	entry: {
          main: __dirname + "/src/main.jsx",  //入口文件
		  vendor: ['redux', 'react-redux', 'react-router']
	},
	output: {
		path: './lib',
		publicPath: `${productionEnv}/lib/`,
		filename: "[name]-min-[hash:8].js",   //打包后输出的文件名
		chunkFilename: '[id].[chunkhash:8].chunk.js'
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
            app: path.join(__dirname, 'src/app'),
            rootReducer: path.join(__dirname, 'src/rootReducer'),
            store: path.join(__dirname, 'src/store'),
            rootRoutes: path.join(__dirname, 'src/rootRoutes'),
			assets: path.join(__dirname, 'src/assets'),
			utils: path.join(__dirname, 'src/utils')
        },
    },
	devtool: 'source-map',
	postcss:[autoprefixer()],
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),                         //热加载插件
	    extractCSS,                                                        //生成独立文件插件，和module对应
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Redux: 'redux',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                screw_ie8 : true
            },
        }),
		new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10240
        }),
        new webpack.BannerPlugin(`用友NC \n update: ${nowDateStr}`),
    ]
}

