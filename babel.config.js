module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'], // 'babel-preset-expo'는 포함되지 않아도 충분합니다.
        plugins: [
            ['@babel/plugin-transform-class-properties', { loose: true }],
            ['@babel/plugin-transform-private-methods', { loose: true }],
            ['@babel/plugin-transform-private-property-in-object', { loose: true }],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    safe: false,
                    allowUndefined: true,
                },
            ],
            'react-native-reanimated/plugin', // 항상 마지막
        ],
    };
};
