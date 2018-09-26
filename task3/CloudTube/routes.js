const routes = module.exports = require('next-routes')()
routes
  .add('gallery', '/dev', 'index')
  .add('video', '/dev/view/:source/:slug/q/:query?/:timecodes?', 'video')
  .add('upload', '/dev/upload', 'upload')
  .add('search', '/dev/search', 'search')
