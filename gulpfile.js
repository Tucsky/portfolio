var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

var icon = require('gulp-iconfont'),
	iconCSS = require('gulp-iconfont-css');

var concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('js', function() {
	gulp.src([
		'vendor/bowser/src/bowser.js', 
		'vendor/jquery/dist/jquery.min.js', 
		'vendor/tether/dist/js/tether.min.js', 
		'vendor/bootstrap/dist/js/bootstrap.min.js',
		'vendor/modernizr.js',
		'vendor/masonry/dist/masonry.pkgd.js',
		'vendor/owl.carousel/dist/owl.carousel.js',
		'vendor/flickity/dist/flickity.pkgd.js',
		'vendor/flickity-bg-lazyload/bg-lazyload.js',
		'vendor/app.js',
	])
		.pipe(concat('app.min.js'))
		.pipe(uglify().on('error', function(e) {
			console.error('Uglify error', e.cause ? {
				message: e.cause.message,
				filename: e.cause.filename,
				where: 'l'+e.cause.line+' (col'+e.cause.col+')',
			} : 'unknown error');

			return true;
		}))
		.pipe(gulp.dest('./'))
});

gulp.task('sass', function() {
	gulp.src('sass/app.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 8 versions']
		}))
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('icon', function(done) {
	gulp.src(['fonts/icons/svg/*.svg'])
		.pipe(iconCSS({
			fontName: 'icons',
			path: 'sass/icons/template.scss',
			targetPath: '../../sass/icons/output.scss',
			fontPath: 'fonts/icons/'
		}))
		.pipe(icon({
			fontName: 'icons',
			fixedWidth: false,
			normalize: true,
			centerHorizontally: true,
			formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
		})).on('glyphs', function(glyphs, options) {
		})
	.pipe(gulp.dest('fonts/icons/'));

	done();
});

gulp.task('watch', function() {
	gulp.watch('fonts/icons/svg/*.svg', ['icon']).on('change', function(e) {
		console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
	});
	gulp.watch('vendor/**/*.js', ['js']).on('change', function(e) {
		console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
	});
	gulp.watch('**/*.scss', ['sass']).on('change', function(e) {
		console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
	});
});