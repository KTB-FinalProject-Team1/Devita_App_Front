const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
    ...defaultConfig,
    resolver: {
        ...defaultConfig.resolver,
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'mjs', 'cjs'],
        assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'cjs'),
        extraNodeModules: {
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
            crypto: require.resolve('react-native-crypto'),
        },
    },
    watchFolders: [
        path.resolve(__dirname, './src'), // 소스 폴더 추가
    ],
    transformer: {
        ...defaultConfig.transformer,
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};
