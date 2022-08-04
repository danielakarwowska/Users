const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const nanoid = require('nanoid').nanoid
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve')

module.exports = () => {
    const plugins = []

    const build = path.resolve(__dirname, 'dist')

    return {
        mode: 'development',
        entry: [
            path.resolve(__dirname, 'src', 'index.tsx')
        ],
        output: {
            publicPath: '',
            path: build,
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.ts|\.tsx$/,
                    loader: 'ts-loader',
                    exclude: [
                        /node_modules/
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: './styles',
                                name: '[name].min.css'
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins
    }
}