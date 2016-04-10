(function() {
    function RoomListCtrl($rootScope, Room, $modal, Message) {
        $rootScope.rooms=Room.all;
//        $rootScope.activeRoom = $rootScope.rooms(-KEqMcaaOFShRR5tuKBP);

        // opens the 'create_room_modal' modal
        $rootScope.openRoomModal = function() {
            var modalInstance = $modal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'CreateRoomCtrl',
            size: 'sm'
            });
        };

        $rootScope.setRoom = function() {

        };
/*
        // set room title & content <in dev>
        $rootScope.setRoom = function(room) {
            $rootScope.rooms.getMessages(room.$id, function (messages) {
                $rootScope.messages = messages;
                $rootScope.$apply();
                $rootScope.roomId = room.$id;
            });
        };
*/
    }

    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$rootScope', 'Room', '$modal', 'Message', RoomListCtrl]);
})();
