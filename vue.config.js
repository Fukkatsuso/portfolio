module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mutsuro-portfolio/'
    : '/',
  outputDir: 'docs'
}