How to use
==========

1. npm install, to install all dependencies listed in package.json

2. npm install -g browserify watchify, to install tools needed to build the react application

3. watchify jsx/app.jsx -o js/app.js -t [babelify --presets react,es2015] -v, to build the application and rebuild it every time changes happens on jsx files,
        explanation: 
                watchify    = watch mode for browserify, used for bundling multiple js files into one using ES6 import or NodeJS requires
                -o          = output-file, in this case js/app.js
                -t          = extension for browserify to make it do something else
                babelify    = the extension used, it's job is to convert different js languages into the currently common js standard, ES5
                --presets   = the language setting used, here it is react(which uses jsx) and es2015(another name used for the ES6 standard)
