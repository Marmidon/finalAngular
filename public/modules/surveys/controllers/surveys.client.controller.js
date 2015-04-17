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

                
                question2: this.question2,
                q2answer1: this.q2answer1,
                q2answer2: this.q2answer2,
                q2answer3: this.q2answer3,
                
                question3: this.question3,
                q3answer1: this.q3answer1,
                q3answer2: this.q3answer2,
                q3answer3: this.q3answer3,
                
                question4: this.question4,
                q4answer1: this.q4answer1,
                q4answer2: this.q4answer2,
                q4answer3: this.q4answer3,
                

 

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

			survey.$update(function(response) {
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
            $scope.isError=false;   
            //check question 1
            if (angular.isUndefined($scope.selectedItem1))
            {
               $scope.isError=true;
               $scope.errorMessage='Please select answer'; 
            }
            else {
            
            }
            
            //check question 2
            if (angular.isUndefined($scope.selectedItem2))
            {
               $scope.isError=true;
               $scope.errorMessage='Please select answer'; 
            }
            else {
            
            }
            
            //check question 3
            if (angular.isUndefined($scope.selectedItem3))
            {
               $scope.isError=true;
               $scope.errorMessage='Please select answer'; 
            }
            else {
            
            }
            
            //check question 4
            if (angular.isUndefined($scope.selectedItem4))
            {
               $scope.isError=true;
               $scope.errorMessage='Please select answer'; 
            }
            else {
            
            }
            if (!($scope.isError)) {
            if ($scope.selectedItem1.index===1)
            {
                $scope.survey.q1count1++;
            }
            if ($scope.selectedItem1.index===2)
            {
                $scope.survey.q1count2++;
            }
            if ($scope.selectedItem1.index===3)
            {
                $scope.survey.q1count3++;
            }
                
                if ($scope.selectedItem2.index===1)
            {
                $scope.survey.q2count1++;
            }
            if ($scope.selectedItem2.index===2)
            {
                $scope.survey.q2count2++;
            }
            if ($scope.selectedItem2.index===3)
            {
                $scope.survey.q2count3++;
            }
                if ($scope.selectedItem3.index===1)
            {
                $scope.survey.q3count1++;
            }
            if ($scope.selectedItem3.index===2)
            {
                $scope.survey.q3count2++;
            }
            if ($scope.selectedItem3.index===3)
            {
                $scope.survey.q3count3++;
            }
                if ($scope.selectedItem4.index===1)
            {
                $scope.survey.q4count1++;
            }
            if ($scope.selectedItem4.index===2)
            {
                $scope.survey.q4count2++;
            }
            if ($scope.selectedItem4.index===3)
            {
                $scope.survey.q4count3++;
            }
            // Redirect after save
			$scope.survey.$update(function() {
				$location.path('surveys');
			}, function(errorResponse) {
				$scope.error = $scope.errorResponse.data.message;
			});
        }
};
        // Prepare viewing surveys
        
        $scope.setFormScope= function () {
            $scope.survey.$promise.then(function() {
                 $scope.items1 = [
        {index: 1,name: $scope.survey.q1answer1 },
        {index: 2,name: $scope.survey.q1answer2 },
        {index: 3,name: $scope.survey.q1answer3 }
    ];

                $scope.items2 = [
        {index: 1,name: $scope.survey.q2answer1 },
        {index: 2,name: $scope.survey.q2answer2 },
        {index: 3,name: $scope.survey.q2answer3 }
    ];
                $scope.items3 = [
        {index: 1,name: $scope.survey.q3answer1 },
        {index: 2,name: $scope.survey.q3answer2 },
        {index: 3,name: $scope.survey.q3answer3 }
    ];
                $scope.items4 = [
        {index: 1,name: $scope.survey.q4answer1 },
        {index: 2,name: $scope.survey.q4answer2 },
        {index: 3,name: $scope.survey.q4answer3 }
                ];
            })};

                                        
        //Send info email
        $scope.emailstats= function (){ 
            var survey = $scope.survey;
            $scope.survey.$update1(function() {
				$location.path('surveys/' + survey._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
            
        };
		// Find existing Survey
		$scope.findOne = function() {
			$scope.survey = Surveys.get({ 
				surveyId: $stateParams.surveyId
			});



            
		};
	}
]);