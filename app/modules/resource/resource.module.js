// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.resource.config', [])
    .value('slenderpmApp.resource.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.resource.directive', []);
angular.module('slenderpmApp.resource.factory', []);
angular.module('slenderpmApp.resource.service', []);
angular.module('slenderpmApp.resource.controller', []);
angular.module('slenderpmApp.resource',
    [
        'slenderpmApp.resource.config',
        'slenderpmApp.resource.directive',
        'slenderpmApp.resource.factory',
        'slenderpmApp.resource.service',
        'slenderpmApp.resource.controller'
    ]);
