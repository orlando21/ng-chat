(function() {
    function Room($firebaseArray) {

//      Some vestiges from Firebase 2:        
//      var firebaseRef = new Firebase('https://blinding-fire-789.firebaseio.com');
//      var rooms = $firebaseArray(firebaseRef.child('rooms'));
          
        var rootRef = firebase.database().ref();
        var rooms = $firebaseArray(rootRef.child('rooms'));

        return {
            all: rooms,
            create: function(roomName){
                return rooms.$add({
                    name: roomName
                });
            },
            getRoom: function(roomID){
                return rooms.$getRecord(roomID);
            },
            getMessages: function(roomID){
                return $firebaseArray(rootRef.child('messages').orderByChild('roomID').equalTo(roomID));
            }
        };
    }

        angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
