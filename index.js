var  git = require('./lib/git.js'),
    gitClone = git.gitClone

/**
 * example
 */
gitClone('git@github.com:iwaimai-bi-fe/vue-component-skeleton.git',
    './dist/app',
    {
        '-b': 'dist'
    }
)

module.exports = git