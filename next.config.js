module.exports = {
    webpack: (config) => {
      config.module.rules.push({
    test: /\.(png|svg|jpg|gif|pdf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]})
      return config
    },
  }