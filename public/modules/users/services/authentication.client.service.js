//Name:Mykyta Stenko, Parin Patel
//COMP308 – Emerging Technologies - Final Team Project

'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);