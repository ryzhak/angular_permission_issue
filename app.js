var app = angular.module('myApp', ['ui.router','permission', 'permission.ui']);

app.run(function(userAuthService, PermissionStore, permissionService){
	
	//retrieve permissions from server
        permissionService.getAllPermissions()
		    .then(function(resp){
				console.log(resp);
		        //define all permissions in the system
		        PermissionStore.defineManyPermissions(resp, function (permissionName) {

		            return permissionService.hasPermission(userAuthService.id, permissionName);

		        });

		    });

});

app.config(function($stateProvider) {

    $stateProvider

        .state('home', {
            url: '/',
            template: '<h2>Home page</h2>'
        })

        .state('admin', {
            url: '/admin',
            template: '<h2>Admin panel</h2>',
			data: {
                permissions: {
                    only: ['adminPermission']
                }
            }
        })

});


