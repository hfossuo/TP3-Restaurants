module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        fallback: {
            ...config.resolve.fallback,
            stream: require.resolve('stream-browserify')
        },
    };
    // Update the development server port
    if (env === 'development') {
        config.devServer = {
            ...config.devServer,
      //      port: 5000, // Replace with your desired port
        };
    }

    return config;
};

