(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomListCtrl',
                templateUrl: '/templates/home.html'
            });
    }

    function BlocChatCookies($modal, $cookies) {

        if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {

            $modal.openUserModal = function(){
                var modalInstance = $modal.open({
                    templateUrl: 'templates/createUserModal.html',
                    controller: 'CreateUserCtrl',
                    size: 'sm'
                });
            };

            // display username modal
            $modal.openUserModal();
        }
    }

    angular
        .module('blocChat', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies', 'ngMessages'])
        .config(config)
        .run(['$modal', '$cookies', BlocChatCookies]);
})();
