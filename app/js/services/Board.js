/**
 * Created by Sanjay on 8/13/13.
 */

listItApp.factory('Board', function(){
    'use strict';
    var boards = {};
    boards.query = function(){
        return [{name:'Like to Be'}, {name:'Like to Have'}];
    };

    return boards;
});