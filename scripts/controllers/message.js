'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    $scope.getMessages = function() {
    	MessageService.getMessages().then(function(response) {
	    	$scope.messages = response;
	    }, function(error) {
	    	console.log('error ', error)
	    });
    };

    $scope.getMessages();

    $scope.addMessage = function() {
    	console.log('adding message ...');
    	MessageService.addMessage($scope.newMessage).then(function(data) {
    		console.log('addMessage response in ctrl ', data)
    		$scope.messages = data;
    		$scope.newMessage = '';
    		$scope.getMessages();
    	}, function(error) {
    		console.log('error ', error);
    	});
    };

  });