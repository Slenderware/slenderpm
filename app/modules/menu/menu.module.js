// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.menu.config', [])
    .value('slenderpmApp.menu.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.menu.directive', []);
angular.module('slenderpmApp.menu.factory', []);
angular.module('slenderpmApp.menu.service', []);
angular.module('slenderpmApp.menu.controller', []);
angular.module('slenderpmApp.menu',
    [
        'slenderpmApp.menu.config',
        'slenderpmApp.menu.directive',
        'slenderpmApp.menu.factory',
        'slenderpmApp.menu.service',
        'slenderpmApp.menu.controller'
    ]);
