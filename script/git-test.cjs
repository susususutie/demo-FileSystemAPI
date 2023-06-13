const exec = require('child_process').exec;

    var child = exec('git status', function(err, stdout, stderr){
        if(err != null){
            return console.error(err);
        }else if(typeof(stderr) != "string"){
            return console.log(new Error(stderr), null);
        }else{
            return console.log('success:', stdout);
        }
    });
