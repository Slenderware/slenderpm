// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderProgress.config', [])
    .value('ngSlenderProgress.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderProgress.directives', []);
angular.module('ngSlenderProgress.filters', []);
angular.module('ngSlenderProgress.services', []);
angular.module('ngSlenderProgress.controllers', []);
angular.module('ngSlenderProgress',
    [
        'ngSlenderProgress.config',
        'ngSlenderProgress.directives',
        'ngSlenderProgress.filters',
        'ngSlenderProgress.services',
        'ngSlenderProgress.controllers'
    ]);
