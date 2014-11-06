// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderUserList.config', [])
    .value('ngSlenderUserList.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderUserList.directives', []);
angular.module('ngSlenderUserList.filters', []);
angular.module('ngSlenderUserList.services', []);
angular.module('ngSlenderUserList.controllers', []);
angular.module('ngSlenderUserList',
    [
        'ngSlenderUserList.config',
        'ngSlenderUserList.directives',
        'ngSlenderUserList.filters',
        'ngSlenderUserList.services',
        'ngSlenderUserList.controllers'
    ]);
