require.config({
  paths: {
    jquery: 'lib/jquery/jquery',
    text: 'lib/requirejs-text/text',
    base64: 'lib/base64/base64.min',
    hogan: 'lib/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
    hgn: 'lib/requirejs-hogan-plugin/hgn',
    json: 'lib/requirejs-plugins/src/json',
    'event-emitter': 'lib/event-emitter/src/event-emitter',
    inherits: 'lib/inherits/inherits',
    purl: 'lib/purl/purl',
    debug: 'lib/debug/debug'
  },
  packages: [{
    name: "auth",
    location: "lib/auth/src"
  },{
      name: 'templates',
      location: 'src/ui/templates'
  },{
      name: 'eref',
      location: 'lib/eref-js/src'
  },{
      name: 'livefyre-bootstrap',
      location: 'lib/livefyre-bootstrap/src'
  },{
    name: 'stream',
    location: 'lib/stream/src'
  },{
    name: 'streamhub-permalink',
    location: 'lib/streamhub-permalink/src'
  },{
    name: 'streamhub-ui',
    location: 'lib/streamhub-ui/src'
  },{
    name: 'streamhub-share',
    location: 'lib/streamhub-share/src'
  },{
    name: 'streamhub-sdk',
    location: 'lib/streamhub-sdk/src'
  },{
    name: 'streamhub-sdk/auth',
    location: 'lib/streamhub-sdk/src/auth'
  },{
    name: 'streamhub-sdk/ui/',
    location: 'lib/streamhub-sdk/src/ui'
  },{
    name: 'streamhub-sdk/collection',
    location: 'lib/streamhub-sdk/src/collection'
  },{
    name: 'streamhub-sdk/content',
    location: 'lib/streamhub-sdk/src/content'
  },{
    name: 'streamhub-sdk/modal',
    location: 'lib/streamhub-sdk/src/modal'
  },{
    name: 'streamhub-sdk/jquery',
    location: 'lib/streamhub-sdk/src',
    main: 'jquery'
  },{
    name: 'streamhub-sdk-tests',
    location: 'lib/streamhub-sdk/tests'
  },{
    name: 'streamhub-wall',
    location: 'lib/streamhub-wall/src'
  },{
    name: 'view',
    location: 'lib/view/src',
    main: 'view'
  }],
  shim: {
    jquery: {
        exports: '$'
    }
  }
});

