'use strict';

angular.module('chattyApp')
.service('MessageService', function MessageService($q, $http) {
    return {

        getMessages: function() {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'http://localhost:8887'
            }).then(function(response) {
                console.log('get messages response: ', response);
                deferred.resolve(response.data);
            }, function(error) {
                console.log(error)
            });

            return deferred.promise;
        },

        addMessage: function(newMessage) {
            console.log('trying to add message: ', newMessage);
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8887',
                data: {
                    message: newMessage
                }
            }).then(function(response) {
                console.log('added message ', response);
                deferred.resolve(response.data);
            }, function(error) {
                console.log('error adding message ', error);
            });
            return deferred.promise;
        }
    };
});