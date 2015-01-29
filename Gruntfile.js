/* jshint node: true */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      options: {
        assets: 'src/assets/',
        data: ['src/data/*.{json,yml}'],
        layout: ['src/layouts/default.hbs'],
        partials: ['src/includes/**/*.hbs'],
        plugins: [],
        flatten: true
      },
      site: {
        src: ['src/slides/*.md'],
        dest: 'dist/'
      }
    }
  });

  // Load tasks provided by npm modules.
  grunt.loadNpmTasks('assemble');

  // Default task(s).
  grunt.registerTask('default', ['assemble']);

};

