Backbone Stack (0.0.1)
===

Based on [KOPFWELT](https://kopfwelt.com)  [Backbone stack](https://bitbucket.org/kopfwelt/stack-backbone).

- [Quickstart](#markdown-header-quickstart)
- [Setup](#markdown-header-setup)
- [Testing](#markdown-header-testing)

# Contributors

* Steve Sinnwell- github.com/sinnwell


<!--
- [Testing](#Testing)
-->

#Start
###setup
```
./setup.sh
```
Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (with [compass](http://compass-style.org/) and [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap)!)
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [jQuery](http://jquery.com/) (from npm)
- [Backbone](http://backbonejs.org/) (from npm)
- [Handlebars](http://handlebarsjs.com/) (as a backbone dependency)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)

###update
```
./update.sh
```


#Testing
```
gulp test
```

#Documentation
```
gulp doxx
```




gulp-starter
============

Starter Gulp + Browserify project with examples of how to accomplish some common tasks and workflows. Read the [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context, and check out the [Wiki](https://github.com/greypants/gulp-starter/wiki) for some good background knowledge.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (with [compass](http://compass-style.org/) and [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap)!)
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [jQuery](http://jquery.com/) (from npm)
- [Backbone](http://backbonejs.org/) (from npm)
- [Handlebars](http://handlebarsjs.com/) (as a backbone dependency)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```

### Install Sass and Compass (if you haven't already)


The gulp-compass module relies on Compass already being installed on your system.

If you have bundler installed, simply run bundle to install dependencies from the `Gemfile`


```
bundle
```

Otherwise,


```
gem install sass
gem install compass --pre
```

### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'sass', 'images', 'markup']`

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.


# Backbone Stack (0.3.4)

A pre-configured Backbone Stack for starting new projects, it alleviates a lot of the common boilerplate code and setup. It uses AMD modules, mocha for TDD and handlebars precompiled templates. Grunt plays a major role in the automated linting, testing and building of your code.

[![Build Status](https://travis-ci.org/phawk/Backbone-Stack.png?branch=master)](https://travis-ci.org/phawk/Backbone-Stack)
[![Dependency Status](https://gemnasium.com/phawk/Backbone-Stack.png)](https://gemnasium.com/phawk/Backbone-Stack)

[View the changelog](https://github.com/phawk/Backbone-Stack/blob/master/changelog.md)

### Included libraries

* [Grunt](http://gruntjs.com/) - A task runner like Make, used to watch and compile the JS code
* [Require JS](http://requirejs.org/) - To asynchronously load in all of the scripts and templates
* [Almond](https://github.com/jrburke/almond) - To run the built AMD code in production
* [Backbone JS](http://documentcloud.github.com/backbone/) - for MVC JavaScript
* [jQuery](http://jquery.com/) - For DOM manipulation and ajax
* [Handlebars JS](http://handlebarsjs.com/) - for templating
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For a quick and dirty UI prototype

### Libraries for Test Driven Development

* [Mocha](http://visionmedia.github.com/mocha/) - TDD / BDD testing framework for JavaScript
* [Chai.js](http://chaijs.com/) - Nice assertions
* [Sinon](http://sinonjs.org/) - Spies, Stubs and Mocks

* * *

# Setup

## Installing dependencies

[Bower](http://twitter.github.com/bower/) is used as for package management, the default client-side dependencies are listed in the `bower.json` file.

**Note** you will need [node.js and npm](http://nodejs.org) and [phantomJS](http://phantomjs.org) for headless unit tests.

```sh
# Install bower package manager
$ npm install -g bower

# Install grunt build tool
$ npm install -g grunt-cli

# Install additional grunt tasks
$ npm install

# Install client-side packages
$ bower install
```

### Installing new dependencies - [Bower documentation](http://bower.io)

```sh
# Search for a library
$ bower search [name..]

# Install a library and save it to the bower.json file
$ bower install [name..] --save
```

* * *

# Getting started

## Running your app

Open up the `./index.html` file in your browser to view your app, it will be using pre-compiled templates and build and minified JS.

## Testing your code

The unit tests can be opened up in the browser with the `test/test-runner.html` file, or can be done through grunt on the command line.

The idea behind linting first, then testing and then building is to fail as quickly and early as possible, this will really help to boost productivity.

```sh
# Watch src/ and test/ files and lint, test, then build on change (handy for TDD)
$ grunt watch

# Lint and test files
$ grunt test
```

**Note** the test suite loads requireJS dynamically and you don't need to build to run the tests, this lets you do TDD with less effort.

## Building your code

All of the JavaScript is pre-build using [grunt](http://gruntjs.com/) and the r.js optimiser, this means your development environment better simulates what will be served in production. Your built CSS and JS are then version and your index.html file is automatically updated with the versioned filename.

```sh
# Watch src/ and test/ files and test, then build on change
$ grunt watch

# Do a one off build - will lint and test your code first
$ grunt build

# Compile the handlebars templates
$ grunt handlebars

# Compile less and css styles
$ grunt styles
```

## git pre-commit hook

Simply run these commands inside your project dir to set a commit hook that will run before each commit. If any of the test or build phase fails the commit will not be accepted.

```sh
# Create a pre-commit hook
$ touch .git/hooks/pre-commit
# Make executable
$ chmod +x .git/hooks/pre-commit
# Build on commit
$ echo "grunt test" > .git/hooks/pre-commit
```

* * *

# Contributors

* Pete Hawkins - github.com/phawk
* Miguel Andrade - github.com/miguelcobain

* * *

# MIT License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
