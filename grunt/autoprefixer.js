module.exports = function (grunt) {
    return {
        prefix: {
            options: {
                browsers: ['ie 8', 'ie 9'],
                remove: true
            },
            targets: {
                src: 'dist/main2.min.css',
                dest: 'dist/main.min.css'
            }
        }
    };
};
