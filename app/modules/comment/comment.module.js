/**
 * author Jannik Richter
 * 
 *  The MIT License (MIT)

    Copyright © 2014 Slenderware

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */
 
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
