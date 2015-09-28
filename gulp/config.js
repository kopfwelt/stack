var dest = "./build";
var src = './src';
var environment = 'development';

GLOBAL.environment = 'development';
GLOBAL.isWatching = false;

module.exports = {
  environment: 'production',
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  styles: {
    src: src + "/styles/**/*.{sass, scss}",
    dest: dest + "/css",
    keepmaps: true
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  html: {
    src: src + "/*.jade",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.jade'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './src/scripts/main.coffee',
      dest: dest + "/js",
      outputName: 'main.js'
    }, {
      entries: './src/scripts/head.coffee',
      dest: dest + "/js",
      outputName: 'head.js'
    }]
  },
  tests: {
    src: [
      src + "/scripts/application/**/*.coffee",
      src + "/scripts/head.coffee",
      src + "/scripts/main.coffee"
    ],
    build: dest + "/js/tests.js",
    karma: "./karma.conf.js",
  },
  manifest: {
    hash: true,
    preferOnline: true,
    network: ['http://*', 'https://*', '*'],
    filename: 'app.manifest',
    exclude: 'app.manifest'
  },
  documentation: {
    pack: './package.json'
  }
};
