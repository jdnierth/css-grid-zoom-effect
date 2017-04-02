module.exports = function (grunt) {
    return {
        server: {
			options: {
				port: 3008,
				base: './source',
				keepalive: true,
				hostname: '0.0.0.0'
			}
        }
    };
};