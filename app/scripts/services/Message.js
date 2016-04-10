(function() {
    function Message($firebaseArray) {
        var firebaseRef = new Firebase("https://blinding-fire-789.firebaseio.com");
        var messages = $firebaseArray(firebaseRef.child("messages"));

 /*       Message.getMessages = function(roomID) {
            return messages.orderByChild("roomID").equalTo("roomID");
        };
 */
        return {
            all: messages,
            getMessages: function(roomID) {
                console.log(roomID);
                return messages.orderByChild("roomID").equalTo("roomID");
            }

        };

    }


    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
