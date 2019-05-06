'use strict'
module.exports = function (grunt) {
    
    grunt.initConfig({
        
         imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },
        
        
        sprite: {
            all: {
                src: 'images/*.png',
                dest: 'images/sprite.png',
                destCss: 'css/sprite.css'
            }
        },
        
        
        uglify: {
            my_target: {
                files: {
                    'dist/ie6.min.js': ['js/DD_belatedPNG_0.0.8a-min.js','js/ie6_fixpng.js'],
                    'dist/ie8.min.js': ['js/ie8_className.js'],
                    'dist/index.min.js': ['js/index.js']
                }
            }
        },
          
        
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1,
                compatibility: 'ie7',
                noAdvanced: true
            },
            target: {
                files: { 
                    'dist/global.min.css': ['css/reset.css','css/common.css','css/index.css','css/sprite.css']
                }
            }
        },
        
      
        watch: {
            scripts: {
                files: ['js/index.js','js/ie8_className.js','js/DD_belatedPNG_0.0.8a-min.js','js/ie6_fixpng.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['css/reset.css','css/common.css','css/index.css','css/sprite.css'],
                tasks: ['cssmin'],
            }
        }
        
    })
    
    
    
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-imagemin')
    grunt.loadNpmTasks('grunt-spritesmith')
    grunt.loadNpmTasks('grunt-contrib-watch')
    
    

    grunt.registerTask('images',['imagemin','sprite'])
    grunt.registerTask('default',['uglify','cssmin'])
    grunt.event.on('watch', function(action, filepath, target) {
          grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    })

    
}
