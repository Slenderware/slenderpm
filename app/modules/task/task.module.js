// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.task.config', [])
    .value('slenderpmApp.task.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.task.directive', []);
angular.module('slenderpmApp.task.factory', []);
angular.module('slenderpmApp.task.service', []);
angular.module('slenderpmApp.task.controller', []);
angular.module('slenderpmApp.task',
    [
        'ngSlenderUserList',
        'ngSlenderAttachments',
        'ngSlenderComments',
        'ngSlenderProgress',
        'ngSlenderList',
        'slenderpmApp.task.config',
        'slenderpmApp.task.directive',
        'slenderpmApp.task.factory',
        'slenderpmApp.task.service',
        'slenderpmApp.task.controller',
    ]);
