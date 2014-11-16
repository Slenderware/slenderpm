'use strict';

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
angular.module('slenderpmApp.gantt.service')

//Service called RegisterService
  .service('GanttService', function () {
      this.FetchData = function (projectID) {
          return {
              data: [
                 {
                     id: 1, text: 'Project #2', start_date: '01-04-2013', duration: 18, order: 10,
                     progress: 0.4, open: true
                 },
                 {
                     id: 2, text: 'Task #1', start_date: '02-04-2013', duration: 8, order: 10,
                     progress: 0.6, parent: 1
                 },
                 {
                     id: 3, text: 'Task #2', start_date: '11-04-2013', duration: 8, order: 20,
                     progress: 0.6, parent: 1
                 }
              ],
              links: [
                { id: 1, source: 1, target: 2, type: '1' },
                { id: 2, source: 2, target: 3, type: '0' },
                { id: 3, source: 3, target: 4, type: '0' },
                { id: 4, source: 2, target: 5, type: '2' },
              ]
          };
      };
  });
