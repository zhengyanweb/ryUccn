var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // 处理css中浏览器兼容的前缀  
var rename = require('gulp-rename'); //重命名  
var cssnano = require('gulp-cssnano'); // css的层级压缩合并
var less = require('gulp-less'); //sass
var jshint = require('gulp-jshint'); //js检查 ==> npm install --save-dev jshint gulp-jshint（.jshintrc：https://my.oschina.net/wjj328938669/blog/637433?p=1）  
var uglify = require('gulp-uglify'); //js压缩  
var concat = require('gulp-concat'); //合并文件  
var imagemin = require('gulp-imagemin'); //图片压缩 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var Config = require('./gulpfile.config.js');


/* dev html处理 */
gulp.task('html:dev', function () {
	gulp.src(Config.html.src)
		.pipe(gulp.dest(Config.html.dist))
		.pipe(reload({ stream: true }))
});

/* dev less处理 */
gulp.task('less:dev', function () {
	gulp.src(Config.less.src)
		.pipe(less())
		.pipe(gulp.dest(Config.less.dist))
		.pipe(reload({ stream: true }))
});

/* dev 字体处理 */
gulp.task('fonts:dev', function () {
	gulp.src(Config.fonts.src)
		.pipe(gulp.dest(Config.fonts.dist))
		.pipe(reload({ stream: true }))
});

/* 图片处理 */
gulp.task('images:dev', function () {
	gulp.src(Config.img.src)
		.pipe(imagemin({
			optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest(Config.img.dist))
		.pipe(reload({ stream: true }));
})

/* js处理 */
gulp.task('js:dev', function () {
	gulp.src(Config.js.src)
		.pipe(gulp.dest(Config.js.dist))
		.pipe(reload({ stream: true }));
})

gulp.task('dev', ['html:dev', 'less:dev', 'images:dev', 'fonts:dev', 'js:dev'], function () {
	browserSync.init({
		port: new Date().getFullYear(),
		server: {
			baseDir: './dist/',
			index: "page/index.html"
		},
		notify: false
	});
	gulp.watch(Config.html.src, ['html:dev']);
	gulp.watch(Config.less.src, ['less:dev']);
	gulp.watch(Config.img.src, ['images:dev']);
	gulp.watch(Config.js.src, ['js:dev']);
})
