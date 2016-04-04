(function() {
    function SidebarCtrl($firebaseArray) {
        var firebaseRef = new Firebase("https://blinding-fire-789.firebaseio.com/");
        this.rooms = $firebaseArray(firebaseRef); //not sure if rooms is appropriate
    }

    angular
        .module('blocChat')
        .controller('SidebarCtrl', ['$firebaseArray',SidebarCtrl]);
})();
