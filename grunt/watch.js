module.exports = function (grunt) {

    return {
        styles: {
            files: [

                './source/styles/**.less',
                './source/styles/**/*.less'
            ],
            tasks: ['less']
        }
    }
};