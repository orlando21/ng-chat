(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://blinding-fire-789.firebaseio.com");
        var rooms = $firebaseArray(firebaseRef.child("rooms"));

        return {
            all: rooms,
            create: function(room){
                return rooms.$add({
                    name: room
                });
            }
        };
    }

        angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
