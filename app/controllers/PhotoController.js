app.controller('PhotoController',function($scope,$routeParams){
        $scope.photo_name=$routeParams.photo_name;
        $scope.img_path=$routeParams.photo_name;

    }
);
