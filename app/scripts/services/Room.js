(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://blinding-fire-789.firebaseio.com");
        var rooms = $firebaseArray(firebaseRef.child("rooms"));

        return {
            all: rooms
        };
    }

        angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
