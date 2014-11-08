// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('slenderpmApp.comment.config', [])
    .value('slenderpmApp.comment.config', {
        debug: true
    });

// Modules
angular.module('slenderpmApp.comment.directive', []);
angular.module('slenderpmApp.comment.factory', []);
angular.module('slenderpmApp.comment.services', []);
angular.module('slenderpmApp.comment.controller', []);
angular.module('slenderpmApp.comment',
    [
        'slenderpmApp.comment.config',
        'slenderpmApp.comment.directive',
        'slenderpmApp.comment.factory',
        'slenderpmApp.comment.services',
        'slenderpmApp.comment.controller'
    ]);
