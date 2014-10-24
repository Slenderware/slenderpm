// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.login.config', [])
    .value('slenderpmApp.login.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.login.directive', []);
angular.module('slenderpmApp.login.factory', []);
angular.module('slenderpmApp.login.service', []);
angular.module('slenderpmApp.login.controller', []);
angular.module('slenderpmApp.login',
    [
        'slenderpmApp.login.config',
        'slenderpmApp.login.directive',
        'slenderpmApp.login.factory',
        'slenderpmApp.login.service',
        'slenderpmApp.login.controller'
    ]);
