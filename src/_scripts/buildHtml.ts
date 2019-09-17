import fse from 'fs-extra'

const buildHtml = (stage: string = 'dev') => {
  const _stage = stage || process.env.STAGE
  fse.outputFileSync(
    'public/index.html',
    `<!DOCTYPE html>
<html>
  <head>
    <title>Now POC</title>
    <link rel="stylesheet" href="/static/css/style.css" />
  </head>
  <body>
    <h1>Welcome to Now POC</h1>
    <p>STAGE:${_stage}</p>
    <script src="${_stage === 'dev' ? 'http://localhost:8080' : '/static/js'}/bundle.js"></script>
  </body>
</html>
`
  )
}

export default buildHtml
