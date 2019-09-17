import { series, parallel, scripts, runSync } from '@sharyn/scripts'

import buildHtml from './buildHtml'

scripts({
  dev: () => {
    buildHtml('dev')
    parallel('ws -d public --spa index.html', 'webpack-dev-server')
  },
  localProd: () => runSync('now dev -A now.local-prod.json'),
  build: () => {
    buildHtml(process.env.STAGE)
    runSync('webpack -p', { extraEnv: { NODE_ENV: 'production' } })
  },
  deployStaging: () => runSync('now -A now.staging.json'),
  deployProd: () => runSync('now -A now.prod.json'),
})
