'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                loadPath: [
                    'bower_components/'
                ]
            },
            compressed: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('dev', ['sass', 'watch']);
    grunt.registerTask('default', ['sass']);
};