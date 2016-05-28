(function() {
    function CreateUserCtrl($scope, $modalInstance, $cookies, $window) {

        var closeModalInstance = function() {
            $modalInstance.close('exit');
        };

        $scope.createUser = function(userName) {

            if(userName && userName !== '') {
                // creates new room and closes modal
                $cookies.put('blocChatCurrentUser', userName);
                closeModalInstance();
            }
            else {
                $window.alert("Invalid input! You must write a valid username.");
            }
        };
    }

    angular
        .module('blocChat')
        .controller('CreateUserCtrl', ['$scope', '$modalInstance', '$cookies', '$window', CreateUserCtrl]);
})();
