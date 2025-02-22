const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appPublic: resolveApp('public'),
  appDist: resolveApp('dist'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('public/index.html'),
};
