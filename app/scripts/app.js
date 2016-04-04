(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('index', {
                url: '',
                views: {
                    "sidebar": { template: "index.sidebar" },
                    "page": { template: "index.page" }
                    }
            })
            .state('sidebar', {
                url: 'sidebar',
                controller: 'SidebarCtrl as sidebar',
                templateUrl: 'templates/sidebar.html'
            })
            .state('page', {
                url: 'page',
                controller: 'PageCtrl as page',
                templateUrl: 'templates/page.html'
            });
    }

    angular
        .module("blocChat", ["firebase", "ui.router"])
        .config(config);
})();
