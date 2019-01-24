var SRC_DIR = './src/'; //源文件目录
var DIST_DIR = './dist/'; //文件处理后存放的目录
var DIST_FILES = DIST_DIR + '**'; // 目标路径下的所有文件

var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_files: DIST_FILES,
    html: {
        src: SRC_DIR + 'page/*.html',
        dist: DIST_DIR + 'page/'
    },
    less: {
        src: SRC_DIR + 'assets/less/*.less',
        dist: DIST_DIR + 'assets/css'
    },
    fonts: {
        src: SRC_DIR + 'assets/fonts/*.*',
        dist: DIST_DIR + 'assets/fonts'
    },
    js: {
        src: SRC_DIR + 'assets/js/**/*', // JS目录：./src/js/  
        dist: DIST_DIR + 'assets/js',
    },
    img: {
        src: SRC_DIR + 'assets/images/**/*',
        dist: DIST_DIR + 'assets/images'
    },
    other: {
        src: SRC_DIR + 'favicon.ico',
        dist: DIST_DIR
    }
}
module.exports = Config;