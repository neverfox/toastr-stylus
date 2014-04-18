module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      dev: {
        options: {
          compress: false
        },
        files: {
          "toastr.css": "stylus/toastr.styl"
        }
      },
      prod: {
        files: {
          "toastr.min.css": "stylus/toastr.styl"
        }
      }
    },

    uglify: {
      prod: {
        files: {
          "toastr.min.js": "toastr.js"
        }
      }
    },
	qunit: {
		all: ['tests/toastr-tests.html']
	}
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['stylus', 'qunit', 'uglify']);
};