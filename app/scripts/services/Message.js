(function() {
    function Message($firebaseArray, $cookies) {

//      Some vestiges from Firebase 2:  
//      var firebaseRef = new Firebase('https://blinding-fire-789.firebaseio.com');
//      var messages = $firebaseArray(firebaseRef.child('messages'));
//      Initialize Firebase
        
        var rootRef = firebase.database().ref();
        var messages = $firebaseArray(rootRef.child('messages'));

        return {
            send: function(newMessageText, room){
                return messages.$add({
                    content: newMessageText,
                    roomID: room.$id,
//                    sentAt: Firebase.ServerValue.TIMESTAMP,
                    sentAt: Date.now(),
                    username: $cookies.get('blocChatCurrentUser')
                });
            }
        };
    }

        angular
        .module('blocChat')
            .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
