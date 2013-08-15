/**
 * Created by Sanjay on 8/13/13.
 */

listItApp.controller('BoardsController',
    function BoardsController($scope,angularFireCollection){
        'use strict';
        var url = 'https://codeorbits.firebaseio.com/';
        $scope.boards = angularFireCollection(new Firebase(url).limit(50));
    });
