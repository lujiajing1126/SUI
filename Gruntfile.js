// Generated on 2014-03-12 using generator-webapp 0.4.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        ysw: {
            src: 'src',
            build: 'build'
        },
        sass: {
            bootstrap: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/stylesheets/bootstrap.css': 'src/ysw/ysw_theme.scss'
                }
            }

        },
        concat: {
            seed: {
                files: [{
                    dest: 'build/seed.js',
                    src: ['src/seajs/sea.js',
                        'src/conf/config.js',
                        'src/core/init.js',
                        'src/seed.js'
                    ]
                }]
            },
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'build/',
                    ]
                }]
            },
        },
        uglify: {
            async: {
                files: {
                    'build/async/pqueue.js': 'src/async/pqueue.js',
                    'build/async/q.js': 'src/async/q.js'
                }
            },
            bootstrap: {
                files: {
                    'build/bootstrap/bootstrap.js': 'src/bootstrap/bootstrap.js'
                }
            },
            core: {
                files: {
                    'build/core/common.js': 'src/core/common.js',
                    'build/core/cookie.js': 'src/core/cookie.js',
                    'build/core/ua.js': 'src/core/ua.js',
                }
            },
            tmpl: {
                files: {
                    'build/tmpl/artTemplate.js': 'src/tmpl/artTemplate.js',
                }
            },
            vendor: {
                files: {
                    'build/vendor/jquery.js': 'src/vendor/jquery.js'
                }
            },
            douban: {
                files: {
                    'build/douban/book.js': 'src/douban/book.js'
                }
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },


        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/' + (this.includeCompass ? 'sass-' : '') + 'bootstrap/' + (this.includeCompass ? 'fonts/' : 'dist/fonts/') + '*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        }
    });
    grunt.registerTask('default', [
        'clean', 'concat', 'sass', 'uglify'
    ]);
};