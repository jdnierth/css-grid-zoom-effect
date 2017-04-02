module.exports = function (grunt) {
    "use strict";


    require('load-grunt-config')(grunt);

    // Task to deploy to veeva (generates all required files within the single slides
    // (e.g. compile less to css and minify + bundle js, copy over static partials folder and fonts folder from dev to shared.
	// can't add grunt compress within callback as other tasks won't be triggered any more?
    grunt.registerTask("default", ['less']);

};