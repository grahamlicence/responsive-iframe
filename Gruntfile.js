/*
    Gruntfile. To run:
    - install node
    - run `npm install` in the root directory
    - type in `grunt` to do run the build
*/
module.exports = function(grunt) {

    grunt.initConfig({
        /*  Read the package.json file for config values.
            package.json keeps devDependencies as well, which make it easy 
            for us to track and install node dependencies 
        */
        pkg: grunt.file.readJSON('package.json'),


        /*  Minify scripts.
        */
        uglify: {
            build: {
                options: {
                    preserveComments: 'some'
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dist',
                    ext: '.min.js',
                }]
            }
        }
    });

    /*  Loading the grunt plugins.
        If you're having problems loading any plugins, make sure you have the latest package.json file
        and try running `npm install`.
    */
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /*  The default task runs when you just run `grunt`.
        "js" and "css" tasks process their respective files. 
    */

    grunt.registerTask('default', ['uglify']);
};