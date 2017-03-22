About
=====

Tthis was supposed to work as a simplified photoshop. Instead of making a cutout of a box in photoshop, this application will allow the user focus on designing each side of the box, the data (Images, image coordinate on each sides, box color, etc) will be sent to the server where the image of the final cutout will be generated.

Generating the data as json wont be hard since we are saving everything onto a redux store.

How to use
==========

1. `npm install`, to install all dependencies listed in package.json

2. `npm install -g browserify watchify`, to install tools needed to build the application

3. Install [ruby](http://rubyinstaller.org/) than sass `gem install sass`, compass `gem install compass` and compass-susy `compass install susy` 

4. `compass compile`, to compile the stylesheet

5. `watchify jsx/app.jsx -o js/app.js -t [babelify --presets react,es2015] -v`, to build the application and rebuild it every time changes happens on jsx files,
        explanation: 
                watchify    = watch mode for browserify, used for bundling multiple js files into one using ES6 import or NodeJS requires
                -o          = output-file, in this case js/app.js
                -t          = extension for browserify to make it do something else
                babelify    = the extension used, it's job is to convert different js languages into the currently common js standard, ES5
                --presets   = the language setting used, here it is react(which uses jsx) and es2015(another name used for the ES6 standard)



This is a very old code, one of the first website i build, very imperfect (Ex. bad naming & file orginizing schemes), not to mention i lost the actual final functioning version before i finally started migrating my code to github.

This code is one version below the version  that is shown on the website (which is also one version below the actual functioning final version).

It's missing the asset and images and a few important features (ex. adding, deleting asset, custom color), the sass file should be complete though.
