(function() {
    function CreateRoomCtrl($scope, Room, $modalInstance) {

        var closeModalInstance = function(modalInstance) {
            modalInstance.close('exit');
        };

        $scope.createRoom = function(roomName) {
            if(roomName) {
                // creates new room and closes modal
                Room.create(roomName);
                closeModalInstance($modalInstance);
            }
            else {
                $scope.errorMessage = 'Invalid room name.';
            }
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'Room', '$modalInstance', CreateRoomCtrl]);
})();
