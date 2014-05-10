module.exports = function(grunt) {

    // Default task(s).
    grunt.registerTask('default', ['dist-css']);
    grunt.registerTask('dist-css', ['less', 'cssmin']);
    grunt.registerTask('lint-css', ['lesslint']);
    grunt.registerTask('lint-js', ['jshint']);
    grunt.registerTask('lint', ['lint-css', 'lint-js']);
    grunt.registerTask('test', ['lint']);

    // Project configuration.
    grunt.initConfig({
        cssmin: {
            minify: {
                expand: true,
                options: {
                    banner: '/* books (c) 2014 */',
                    keepSpecialComments: 0
                },
                cwd: 'views/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'views/css/',
                ext: '.min.css'
            }
        },

        less: {
            style: {
                files: {
                    "views/css/app.css": "views/less/app.less"
                }
            }
        },

        lesslint: {
            src: ['views/less/*.less']
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                ignores: ['views/js/libs/*.js']
            },
            all: ['Gruntfile.js', 'views/js/**/*.js', '*.js']
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};