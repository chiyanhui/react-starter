const fs = require('fs-extra');

const paths = require('../config/paths');

module.exports = async function() {
  await fs.emptyDir(paths.appDist);
  await fs.copy(paths.appPublic, paths.appDist, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}