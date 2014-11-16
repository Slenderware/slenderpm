// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngSlenderContribGraph.config', [])
    .value('ngSlenderContribGraph.config', {
        debug: true
    });

// Modules
angular.module('ngSlenderContribGraph.directives', []);
angular.module('ngSlenderContribGraph.filters', []);
angular.module('ngSlenderContribGraph.services', []);
angular.module('ngSlenderContribGraph',
    [
        'ngSlenderContribGraph.config',
        'ngSlenderContribGraph.directives',
        'ngSlenderContribGraph.filters',
        'ngSlenderContribGraph.services'
    ]);
