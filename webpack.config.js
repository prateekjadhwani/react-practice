module.exports = {
    entry : './index.js',
    output : {
        filename : 'app.js',
        path : './build'
    },
    module : {
        loaders : [
            {
                test: /\.jsx?/,
                exclude: '/(node_modules|bower_components)/',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: 'inline-source-map'
};