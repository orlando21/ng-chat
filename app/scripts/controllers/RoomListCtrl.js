(function() {
    function RoomListCtrl($scope, Room, $modal) {
        $scope.rooms=Room.all;

        // opens the 'create_room_modal' modal
        $scope.openRoomModal = function() {
            var modalInstance = $modal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'CreateRoomCtrl',
            size: 'sm'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$scope', 'Room', '$modal', RoomListCtrl]);
})();
