const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#1890ff',
                    '@link-color': '#1890ff', // 链接色
                },
            },
        },
    ],
};