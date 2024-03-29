const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:['@babel/polyfill',"./src/index.tsx"],
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist/'),
    },
    module:{
        rules:[
            {
              test: /.ts$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/typescript', '@babel/preset-env'],
                },
              },
            },
            {
                test:  /.tsx$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env','@babel/preset-react','@babel/typescript'],
                    },
                },
            },
            {
                test: /\.(scss)$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
                    },
                  },
                  {
                    loader:'sass-loader',
                  }
                ],
            },
            { test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
              loader: 'url-loader'
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[sha512:hash:base64:7].[ext]',
                  },
                },
              ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: './index.css',
        }),
    ],
    devServer: {
      contentBase:'./dist',
      port: 9000
    },
    resolve: { 
      extensions: 
      ['.js', '.jsx', '.ts' , '.tsx','.jpg','.png'] 
    },
};