(function() {
    function RoomListCtrl($scope, Room) {
        $scope.rooms=Room.all;

    }

    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$scope', 'Room', RoomListCtrl]);
})();
