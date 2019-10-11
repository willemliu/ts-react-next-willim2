module.exports = {
    target: process.env.NOW_SERVERLESS === 'false' ? 'server' : 'serverless',
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack: (config, options) => {
        /**
         * This config replaces React with PreactX (3KB gzipped).
         * PreactX should be a 100% drop-in replacement for React.
         * If PreactX is causing problems we can just turn this config off.
         */
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            react: 'preact/compat',
            react$: 'preact/compat',
            'react-dom': 'preact/compat',
            'react-dom$': 'preact/compat',
        });

        return config;
    },
};
