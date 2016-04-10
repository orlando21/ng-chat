(function() {
    function Room($firebaseArray, Message) {
        var firebaseRef = new Firebase("https://blinding-fire-789.firebaseio.com");
        var rooms = $firebaseArray(firebaseRef.child("rooms"));

        return {
            all: rooms,
            create: function(roomName){
                return rooms.$add({
                    name: roomName
                });
            },
            getMessages: function(roomID) {
                return Message.getMessages(roomID);
            }

        };
    }

        angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', 'Message', Room]);
})();
