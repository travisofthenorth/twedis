module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {
      options: {
        map: true,
        processors: [
          require('lost')
        ]
      },
      dist: {
        src: 'assets/src/css/style.css',
        dest: 'static/style.css'
      }
    },

    autoprefixer: {
      single_file: {
        src: 'static/style.css',
        dest: 'static/style.css'
      }
    },

    watch: {
      files: ['assets/src/css/style.css'],
      tasks: ['postcss', 'autoprefixer']
    }

  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
