// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderAttachments.config', [])
    .value('ngSlenderAttachments.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderAttachments.directives', []);
angular.module('ngSlenderAttachments.filters', []);
angular.module('ngSlenderAttachments.services', []);
angular.module('ngSlenderAttachments',
    [
        'ngSlenderAttachments.config',
        'ngSlenderAttachments.directives',
        'ngSlenderAttachments.filters',
        'ngSlenderAttachments.services'
    ]);
