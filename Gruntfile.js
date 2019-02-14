module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            disk: {
                files: {
                    'css/styles.css': 'less/styles.less'
                }
            }
        },
        watch: {
            css: {
                files: './less/styles.less',
                tasks: ['less']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './css/styles.css',
                        './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },

        imagemin: {
            dynamic: {
              files: [{
                  expand: true,
                  cwd: './images/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: './resizedImages/'
              }]
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default',['browserSync','watch','imagemin']);
}