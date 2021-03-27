module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.30:11930',
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },

}