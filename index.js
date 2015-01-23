var gutil = require('gulp-util');
var through = require('through2');
var webshot = require('webshot');
var path = require("path");


module.exports = function(opt){

    if (!opt) {
            opt = {};
     }

    if (opt.p === undefined) {
        throw new gutil.PluginError('gulp-webshot', 'please connect port')
    }


    return through.obj(function (file, enc, cb) {

        if(!opt.p){
            this.emit('error', new gutil.PluginError('gulp-webshot', 'please connect port'));
            gutil.log(gutil.colors.red('Please connect port',' example  [p:3000]'));
            return cb();
        }

        if(!opt.screenSize  &&  !opt.dest){
            opt.screenSize = { width: 1440, height: 900 }
            opt.dest='snapshot/';
        }


        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-webshot', 'Streaming not supported'));
            return cb();
        }



        var parsep =path.basename(file.relative);
        var name =path.basename(file.relative, '.html')
        var filename =opt.dest+'/'+name+'.png';
        var url ='http://localhost:'+opt.p+'/'+parsep;


             webshot(url, filename, opt,function(err,stream) { 

                if (err) {
                    this.emit('error', new gutil.PluginError('gulp-htmlshot', err));
                }else{
                    gutil.log('gulp-webshot:', gutil.colors.green('✔') + file.relative + gutil.colors.gray(' ( Save screenshot ) '))

                }

                
                cb();

            });

        this.push(file);

    },function(cb){

        gutil.log('gulp-webshot:', gutil.colors.yellow(' Everything is fine :) '));
       
        cb();

    });

};
