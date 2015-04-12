'use strict';

// Surveys controller
angular.module('surveys').controller('SurveysController', ['$scope', '$stateParams', '$location', 'Authentication', 'Surveys', 'userService',
	function($scope, $stateParams, $location, Authentication, Surveys, userService ) {
		$scope.authentication = Authentication;

		// Create new Survey
		$scope.create = function() {
			// Create new Survey object
			var survey = new Surveys ({
				name: this.name,
                question1: this.question1,
                q1answer1: this.q1answer1,
                q1answer2: this.q1answer2,
                q1answer3: this.q1answer3,
                q1count1: 0
			});

			// Redirect after save
			survey.$save(function(response) {
				$location.path('surveys/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
        //answer to survey
        $scope.answer = function(survey)
        {
            survey.count++;
        };

		// Remove existing Survey
		$scope.remove = function(survey) {
			if ( survey ) { 
				survey.$remove();

				for (var i in $scope.surveys) {
					if ($scope.surveys [i] === survey) {
						$scope.surveys.splice(i, 1);
					}
				}
			} else {
				$scope.survey.$remove(function() {
					$location.path('surveys');
				});
			}
		};

		// Update existing Survey
		$scope.update = function() {
			var survey = $scope.survey;

			survey.$update(function() {
				$location.path('surveys/' + survey._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Surveys
		$scope.find = function() {
			$scope.surveys = Surveys.query();
		};
        
        // Submit answer
        $scope.updateform = function () {
               console.log($scope.selectedItem.index);
            // Redirect after save
			$scope.survey.$update(function() {
				$location.path('surveys/' + $scope.survey._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
};
        // Prepare viewing surveys
        $scope.setFormScope= function () {
            $scope.survey.$promise.then(function() {
                 $scope.items = [
        {index: 1,name: $scope.survey.q1answer1 },
        {index: 2,name: $scope.survey.q1answer2 },
        {index: 3,name: $scope.survey.q1answer3 }
    ];

   });
};


		// Find existing Survey
		$scope.findOne = function() {
			$scope.survey = Surveys.get({ 
				surveyId: $stateParams.surveyId
			});
           
            //console.log($scope.survey);
		};
	}
]);