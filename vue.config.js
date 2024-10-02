module.exports = {
publicPath: process.env.NODE_ENV === 'production'
    ? '/<RoVa>/' // replace <repository-name> with your actual repo name
    : '/'
}
