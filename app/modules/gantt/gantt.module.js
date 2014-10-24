// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.gantt.config', [])
    .value('slenderpmApp.gantt.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.gantt.directive', []);
angular.module('slenderpmApp.gantt.factory', []);
angular.module('slenderpmApp.gantt.service', []);
angular.module('slenderpmApp.gantt.controller', []);
angular.module('slenderpmApp.gantt',
    [
        'slenderpmApp.gantt.config',
        'slenderpmApp.gantt.directive',
        'slenderpmApp.gantt.factory',
        'slenderpmApp.gantt.service',
        'slenderpmApp.gantt.controller'
    ]);
