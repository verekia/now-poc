import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
  mode: process.env.WEBPACK_DEV_SERVER ? 'development' : 'production',
  entry: './src/app.ts',
  output: { path: path.resolve(__dirname, 'public/static/js'), filename: 'bundle.js' },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: { rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }] },
}

export default config
