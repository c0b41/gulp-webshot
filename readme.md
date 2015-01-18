# [gulp](https://github.com/gulpjs/gulp)-webshot  [![Build Status](https://img.shields.io/david/ayhankuru/gulp-webshot.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-webshot)

>Webshot provides a simple API for taking webpage screenshots. The module is a light wrapper around PhantomJS, which utilizes WebKit to perform the page rendering.

Uses the [webshot](https://github.com/brenden/node-webshot) library.

## İnstall
```bash
npm install --save-dev gulp-connect gulp-webshot
```

`/theme/stuff.html`:

or 

`/app/stuff.html`:

## How It Works
```js
var gulp = require('gulp'),
    connect = require('gulp-connect');
    webshot=require('gulp-webshot');

gulp.task('connect', connect.server({
  root: ['Theme'],
  port: 1337
}));


gulp.task('webshot', function() {
  return gulp.src('./Theme/*.html')
        .pipe(webshot({ dest:'build/',p:1337}));
})


gulp.task('shot', ['connect', 'webshot']);

```

## How It Works
```bash
gulp shot
```


## API

### webshot(options)


#### options.screenSize

Type: `object`

	width: `int`
    height: `int`


#### options.shotSize

Type: `object`

	width: `int`
    height: `int`





more options checkout [webshot options](https://github.com/brenden/node-webshot#options).


