var gutil = require('gulp-util');
var through = require('through2');
var webshot = require('webshot');
var path = require("path");
var connect = require("connect");
var serveStatic = require('serve-static');
var url = require('url');


module.exports = function(opt) {

  if (!opt) {
    opt = {};
  }

  opt.p = opt.p || 9000;

  var app = connect();
  var resolvedRoot = path.resolve(opt.root);
  app.use(serveStatic(resolvedRoot));
  var server = app.listen(opt.p);


  return through.obj(function(file, enc, cb) {
    if (!opt.root) {
      this.emit('error', new gutil.PluginError('gulp-webshot', 'Please root directory'));
      gutil.log(gutil.colors.red('Please root directory', ' root:"Theme" '));
      return cb();
    }

    if (!opt.screenSize && !opt.dest && !opt.dest) {
      opt.screenSize = {
        width: 1440,
        height: 900
      };
      opt.dest = 'snapshot/';
    }


    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-webshot', 'Streaming not supported'));
      return cb();
    }


    if (opt.root) {
      var pathArr = path.dirname(file.path).split(path.sep);
      var baseIndex = pathArr.indexOf(opt.root);
      var basepath = path.relative(opt.root, path.dirname(file.path));
    }



    var parsep = path.basename(file.relative);
    var name = path.basename(file.relative, '.html');
    var filename = path.join(opt.dest, basepath, name + '.png');
    var relativeFilePath = path.join(path.sep, basepath, parsep);
    var urlPath = url.resolve('http://localhost:' + opt.p, relativeFilePath);


    webshot(urlPath, filename, opt, function(err, stream) {
      if (err) {
        this.emit('error', new gutil.PluginError('gulp-webshot', err));
        server.close();
      } else {
        gutil.log('gulp-webshot:', gutil.colors.green(' ✔ ') + file.relative + gutil.colors.gray(' ( Save screenshot ) '));
        cb();
      }
    }.bind(this));

    this.push(file);

  }, function(cb) {

    server.close(function() {
      gutil.log('gulp-webshot:', gutil.colors.yellow(' Everything is fine :) '));
      cb();
    });

  });

};