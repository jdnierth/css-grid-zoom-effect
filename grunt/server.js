module.exports = function(grunt) {
    grunt.registerTask("server", "Start the connect server", function(){
        grunt.task.run("connect:server");
    });
};