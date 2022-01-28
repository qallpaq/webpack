const path = require('path')
const rootPath = path.resolve(__dirname, '..')
const sourcePath = path.join(rootPath, 'src')

module.exports = {
    distPath: path.join(rootPath, 'dist'),
    assetsPath: path.join(rootPath, 'assets'),

    appPath: path.join(sourcePath, 'app.jsx'),
    entryPath: path.join(sourcePath, 'index.tsx'),
    templatePath: path.join(sourcePath, 'public/index.html'),
}
