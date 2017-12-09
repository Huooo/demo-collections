// node_modules
const 	gulp = require('gulp'),							// gulp

    	less = require('gulp-less'),					// less编译
    	cache = require('gulp-cache'),					// cache
    	uglify = require('gulp-uglify'),				// js => min
    	htmlmin = require('gulp-htmlmin'),				// html => min
    	imagemin = require('gulp-imagemin'),			// image => min.image
    	mincss = require('gulp-minify-css'),			// css => min
    	postcss = require('gulp-postcss'),				// 集合多个插件对css进行一次处理
    	px2rem = require('postcss-px2rem'),				// px => rem
    	autoprefixer = require('gulp-autoprefixer'),	// css prefixer

    	notify = require('gulp-notify'),				// 报错通知
    	plumber = require('gulp-plumber'),				// 错误不影响程序执行

    	runsequence = require('run-sequence'),			// 执行队列
    	rev = require('abc-gulp-rev'),					// 缓存文件并生成缓存清单，依赖于"abc-rev-path"
    	revcollector = require('abc-gulp-rev-collector');
 

// golbal variable
let     entrance = require('./entrance.json');



/* 
 * dev
 *
*/

// runLess
gulp.task('runLess', () => {
	let postcssOptions = [ px2rem({remUnit: 75}) ];

    return gulp.src('./' + entrance.project + '/src/less/index.less') 
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less()) 	
        .pipe(postcss(postcssOptions))
        .pipe(autoprefixer({		
        	browsers: [
        		'Chrome >= 35',
                'Firefox >= 31',
                'Edge >= 12',
                'Explorer >= 9',
                'iOS >= 8',
                'Safari >= 8',
                'Android 2.3',
                'Android >= 4',
                'Opera >= 12'
        	],
        	cascade: true,
        	remove: true	
        }))
        .pipe(gulp.dest('./' + entrance.project + '/src/css/')); 
});

// watch
gulp.task('watch', () => {
    return gulp.watch('/' + entrance.project + '/src/less/*.less', ['runLess']);
});





/*
 * build
 *
*/

// revImages
gulp.task('revImages', () => {
    return gulp.src('./' + entrance.project + '/src/images/*.{png, jpg, gif, ico}')
    		   .pipe(cache(imagemin()))
        	   .pipe(gulp.dest('./' + entrance.project + '/dist/images/'))
        	   .pipe(rev())
        	   .pipe(rev.manifest())
        	   .pipe(gulp.dest('./' + entrance.project + '/rev/images/'));
});

// revCss
gulp.task('revCss', () => {
    return gulp.src('./' + entrance.project + '/src/css/*.css')
        	   .pipe(cache(mincss()))	
        	   .pipe(gulp.dest('./' + entrance.project + '/dist/css/'))
        	   .pipe(rev())
        	   .pipe(rev.manifest())
        	   .pipe(gulp.dest('./' + entrance.project + '/rev/css/'));
});

// revJs
gulp.task('revJs', () => {
    return gulp.src('./' + entrance.project + '/src/js/*.js')
    		   .pipe(cache(uglify()))
    		   .pipe(gulp.dest('./' + entrance.project + '/dist/js/'))
        	   .pipe(rev())
        	   .pipe(rev.manifest())
         	   .pipe(gulp.dest('./' + entrance.project + '/rev/js/'));
});


//revHtml
gulp.task('revHtml', () => {

	let htmlminOptions = {
        collapseBooleanAttributes: true,			// 省略布尔属性的值 <input checked="true"/> => <input />
        removeEmptyAttributes: true,				// 删除所有空格作属性值 <input id="" /> => <input />
        removeScriptTypeAttributes: true,			// 删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,		// 删除<style>和<link>的type="text/css"
        removeComments: true,						// 删除HTML注释
        collapseWhitespace: true,					// 压缩HTML
        minifyJS: true,								// 压缩页面JS
        minifyCSS: true								// 压缩页面CSS
    };

    return gulp.src(['./' + entrance.project + '/rev/**/*.json', './' + entrance.project + '/src/*.html'])
        	   .pipe(revcollector())
        	   .pipe(htmlmin(htmlminOptions))
               .pipe(gulp.dest('./' + entrance.project + '/dist/'));
});

// build
gulp.task('build', (done) => {
    condition = false;
    runsequence(
        ['runLess'],
        ['revImages'],
        ['revCss'],
        ['revJs'],
        ['revHtml'],
        done
    );
});
 




// run task
gulp.task('default',['watch']);
