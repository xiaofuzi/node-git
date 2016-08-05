## node-git

node.js git module

* gitClone

执行git clone 命令

```js
gitClone('git@github.com:iwaimai-bi-fe/vue-component-skeleton.git',
    './dist/app',
    {
        '-b': 'dist'
    }
)
```