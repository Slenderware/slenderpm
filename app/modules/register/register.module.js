// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.register.config', [])
    .value('slenderpmApp.register.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.register.directive', []);
angular.module('slenderpmApp.register.factory', []);
angular.module('slenderpmApp.register.service', []);
angular.module('slenderpmApp.register.controller', []);
angular.module('slenderpmApp.register',
    [
        'slenderpmApp.register.config',
        'slenderpmApp.register.directive',
        'slenderpmApp.register.factory',
        'slenderpmApp.register.service',
        'slenderpmApp.register.controller'
    ]);
