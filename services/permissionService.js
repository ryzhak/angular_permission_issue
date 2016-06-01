app.service('permissionService', function($q){

	//simulate getting all permissions from the server 
    this.getAllPermissions = function(){

		var deferred = $q.defer();

		setTimeout(function(){
			deferred.resolve(['adminPermission']);
		},1000);

		return deferred.promise;

    };

	//check on the server side if user id has a permissoin
	this.hasPermission = function(userId, permissionName){

        var deferred = $q.defer();

		if(userId == 1 && permissionName == 'adminPermission'){
			setTimeout(function(){
				console.log('resolved');
				deferred.resolve(true);
			},1000);
		} else {
			setTimeout(function(){
				deferred.reject(false);
			},1000);
		}

        return deferred.promise;
    };

});

