/* jshint node: true */

'use strict';

module.exports = function(grunt) {

  var port = grunt.option('port') || 8000;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      options: {
        assets: 'dist/assets',
        data: ['src/data/*.{json,yml}'],
        layout: ['src/layouts/default.hbs'],
        partials: ['src/includes/**/*.hbs'],
        plugins: [],
        flatten: true
      },
      slides: {
        src: ['src/slides/*.md'],
        dest: 'dist/'
      }
    },
    clean: ['dist/'],
    copy: {
      fonts: {
        files: [
          { expand: true,
            cwd: 'src/bower_components/reveal.js/',
            src: ['**/*.eot,**/*.ttf,**/*.woff,**/*.woff2'],
            dest: 'dist/assets/'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          base: 'dist/',
          hostname: 'localhost',
          port: port,
          livereload: true,
          open: true
        }
      }
    },
    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: 'src/bower_components/reveal.js/',
          src: ['**/*.css'],
          dest: 'dist/assets/'
        }]
      }
    },
    imagemin: {
      images: {
        options: {
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        },
        files: [
          { expand: true,
            cwd: 'src/',
            src: ['**/*.gif','**/*.jpeg','**/*.jpg','**/*.ico','**/*.png','!bower_components/**'],
            dest: 'dist/assets/'
          }
        ]
      }
    },
    uglify: {
      js: {
        files: [{
            expand: true,
            cwd: 'src/bower_components/reveal.js/',
            src: ['**/*.js','!Gruntfile.js'],
            dest: 'dist/assets/'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sources: {
        files: 'src/**',
        tasks: ['build'],
        options: {
          debounceDelay: 250,
        },
      },
    },
    zip: {
      'deck.zip': [
        'dist/**'
      ]
    },
  });

  // Load tasks provided by npm modules
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-zip');

  // Custom tasks
  grunt.registerTask('build',   ['clean','copy','cssmin','imagemin','uglify','assemble']);
  grunt.registerTask('package', ['build','zip']);
  grunt.registerTask('serve',   ['build','connect','watch']);

  // Default task
  grunt.registerTask('default', ['build']);

};

