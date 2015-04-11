'use strict';

//Surveys service used to communicate Surveys REST endpoints
angular.module('surveys').factory('Surveys', ['$resource',function($resource) {
		return $resource('surveys/:surveyId', { surveyId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
                                              
]);

angular.module('surveys')
  .factory('userService', function() {
    var serviceInstance = {};
    // Our first service
    var target = angular.element(document.getElementById('selectq1'));
    var target1 = document.getElementById('q1a1');
    var target2 = document.getElementById('q1a2');
    var target3 = document.getElementById('q1a3');
    return target;
  });