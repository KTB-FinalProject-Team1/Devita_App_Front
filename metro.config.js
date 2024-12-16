const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver = {
    ...defaultConfig.resolver,
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'mjs', 'cjs'],
    assetExts: [...defaultConfig.resolver.assetExts, 'mjs', 'cjs'],
    extraNodeModules: {
        'framer-motion': require.resolve('framer-motion'),
    },
};

defaultConfig.watchFolders = [__dirname, './src'];

module.exports = defaultConfig;
