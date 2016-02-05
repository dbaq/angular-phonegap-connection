/*
 * angular-phonegap-connection v0.0.1
 * (c) 2013 Didier Baquier http://www.didierbaquier.fr
 * License: MIT
 */

'use strict';

angular.module('dbaq.phonegap.connection',
  ['btford.phonegap.ready']).
  factory('connection', function ($rootScope, phonegapReady) {
    return {
      getType: phonegapReady(function (onSuccess) {
        var networkState = navigator.connection.type;
        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(networkState);
          });
        }
      }),
	  addConnectionListener: function(connectedCallback, disconnectedCallback) {
        if (connectedCallback) {
          document.addEventListener(
            'online',
            function() {
              $rootScope.$apply(connectedCallback);
            },
            false
          );
        }
        if (disconnectedCallback) {
          document.addEventListener(
            'offline',
            function() {
              $rootScope.$apply(disconnectedCallback);
            },
            false
          );
        }
      }
    };
  });