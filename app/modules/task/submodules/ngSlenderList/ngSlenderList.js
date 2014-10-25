// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderList.config', [])
    .value('ngSlenderList.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderList.directives', []);
angular.module('ngSlenderList.filters', []);
angular.module('ngSlenderList.services', []);
angular.module('ngSlenderList',
    [
        'ngSlenderList.config',
        'ngSlenderList.directives',
        'ngSlenderList.filters',
        'ngSlenderList.services'
    ]);
