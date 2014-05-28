({
  mainConfigFile: '../requirejs.conf.js',
  paths: {
    almond: 'lib/almond/almond'
  },
  baseUrl: '..',
  name: "streamhub-app",
  include: [
    'almond',
    'streamhub-sdk/jquery',
    'streamhub-wall'
  ],
  stubModules: ['text', 'hgn', 'json'],
  out: "../dist/streamhub-app.min.js",
  namespace: 'HubApp',
  pragmasOnSave: {
    excludeHogan: true
  },
  cjsTranslate: true,
  optimize: "none",
  preserveLicenseComments: false,
  uglify2: {
    compress: {
      unsafe: true
    },
    mangle: true
  },
  generateSourceMaps: true,
  onBuildRead: function(moduleName, path, contents) {
    switch (moduleName) {
      case "jquery":
      // case "base64":
        contents = "define([], function(require, exports, module) {" + contents + "});";
    }
    return contents;
  }
})

