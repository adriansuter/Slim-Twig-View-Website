module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Sass
    sass: {
      options: {
        trace: false,
        sourceMap: false,
        style: 'compressed',
      },
      main: {
        files: [
          {
            expand: true,
            cwd: '_scss',
            src: 'main.scss',
            dest: 'assets/styles',
            ext: '.css',
          },
        ],
      },
    }
    ,
    // Minify JavaScript
    terser: {
      options: {},
      main: {
        files: {
          'assets/scripts/main.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/popper.js/dist/umd/popper.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            '_js/prism.js',
            '_js/setup.js',
          ],
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-terser');

  // Default task(s).
  grunt.registerTask('default', ['terser', 'sass']);
};
