// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderComments.config', [])
    .value('ngSlenderComments.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderComments.directives', []);
angular.module('ngSlenderComments.filters', []);
angular.module('ngSlenderComments.services', []);
angular.module('ngSlenderComments.controllers', []);
angular.module('ngSlenderComments',
    [
        'ngSlenderComments.config',
        'ngSlenderComments.directives',
        'ngSlenderComments.filters',
        'ngSlenderComments.services',
        'ngSlenderComments.controllers'
    ]);
