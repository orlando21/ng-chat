/**
* @function RoomList controller
* @desc This is the main controller for bloc chat app
* @param $rootScope, Room, $modal
*/
(function() {
    function RoomListCtrl($rootScope, Room, $modal) {
        $rootScope.rooms=Room.all;

        // wait for asynchronous data interchange
        $rootScope.rooms.$loaded().then(function(rooms, newRoomID) {

            // initialize by setting activeRoom to first chat room
            $rootScope.activeRoom = $rootScope.rooms[0];
            $rootScope.roomMessages = Room.getMessages(rooms[0].$id);

            // setRoom() when user selects another chat room
            $rootScope.setRoom = function(newRoomID) {
                $rootScope.activeRoom = Room.getRoom(newRoomID);
                $rootScope.roomMessages = Room.getMessages(newRoomID);
            };

        });

        // opens a create room modal
        $rootScope.openRoomModal = function() {
            var modalInstance = $modal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'CreateRoomCtrl',
            size: 'sm'
            });
        };


    }

    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$rootScope', 'Room', '$modal', RoomListCtrl]);
})();
