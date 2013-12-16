module.exports = function(grunt) {
	// Do grunt-related things in here

	grunt.initConfig({

	// Watch
		watch: {
			css: {
				files: 'css/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			},

			scripts: {
				files: ['js/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},

		},

		// CSS
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'css/styles.css': 'css/scss/styles.scss',
				}
			},
		},

				// JS
		uglify: {
			my_target: {
				files: {
					'js/simple-lightbox-min.js': ['js/simple-lightbox.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};