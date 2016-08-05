var exec =require('child_process').exec

module.exports = {
    /**
     * git clone
     * @param {String} repository git url
     * @param {String} dest path
     * @param {Object} params
     * @param {Function} callback
     */
    gitClone: function (cloneUrl, dest, options, cb){
        var cmd = 'git clone ' + cloneUrl + ' ' + dest
        for(var key in options){
            if(options.hasOwnProperty(key)){
                cmd += ' '
                cmd += key
                cmd += ' '
                cmd += options[key]
            }
        }
        console.log(cmd)
        exec(cmd, function(error, stdout,stderr){
            if(error) throw error
            cb(error, stdout,stderr)
            console.log('success!')
        })
    }
}