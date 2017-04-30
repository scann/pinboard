module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')()
            ],
            dist: {
                src: 'assets/css/*.css'
            }
        },
        concat: {
            css: {
                src: [ 'assets/css/*.css' ],
                dest: 'assets/cssmin/style.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/cssmin',
                    src: ['style.css'],
                    dest: 'assets/cssmin/',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: ['**/*.{png,jpg}'],
                    dest: 'assets/imgmin/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'assets/js/build.js': ['assets/js/main.js']
                }
            }
        },
        watch: {
            css: {
                files: [ 'assets/css/*.css' ],
                tasks: ['postcss', 'concat:css', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['concat:js', 'uglify'],
                options: {
                    livereload: true
                }
            },
            img: {
                files: ['assets/images/*.*'],
                tasks: ['imagemin'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
};