const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const nanoid = require('nanoid').nanoid

module.exports = () => {
    const plugins = []

    const build = path.resolve(__dirname, 'build')

    plugins.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'src', 'index.template.html'),
            entry: path.resolve(build, 'index.html')
        })
    )
    plugins.push(new Serve({
        port: 8000,
        static: build,
        publicPath: build,
        waitForBuild: true,
        open: false,
        historyFallback: true,
        host: 'localhost',
        liveReload: true,
        hmr: true
    }))
    plugins.push(new HtmlReplaceWebpackPlugin(
        [
           {
              pattern: '_BUILD_',
              replacement: nanoid(8)
           }
        ]
     ))

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
        watch: true,
        devtool: 'inline-source-map',
        stats: 'errors-only',
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
                                outputPath: './style',
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