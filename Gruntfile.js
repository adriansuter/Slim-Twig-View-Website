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
      production: {
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
    // Minify scripts
    uglify: {
      production: {
        options: {
          compress: {},
          preserveComments: false,
          drop_console: true,
        },
        files: {
          'assets/scripts/main.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/popper.js/dist/popper.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
          ],
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
};
