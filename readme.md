# [gulp](https://github.com/wearefractal/gulp)-webshot [![Build Status](https://travis-ci.org/cobaimelan/gulp-webshot.png?branch=master)](https://travis-ci.org/cobaimelan/gulp-webshot)

>Webshot provides a simple API for taking webpage screenshots. The module is a light wrapper around PhantomJS, which utilizes WebKit to perform the page rendering.

Uses the [webshot](https://github.com/vavere/htmltidy) library.

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


