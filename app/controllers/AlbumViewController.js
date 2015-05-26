app.controller('AlbumViewController',function($scope,$routeParams,albumProvider){
    $scope.album_name=$routeParams.album_name;
    $scope.page_loading_error="";



    try {
        var temp=$routeParams.album_name;
        $scope.photos = albumProvider.getPhotos(temp);
    } catch (e) {
        if (e.message == "no_such_album")
            $scope.page_loading_error = "I don't know about that album yet, sorry";
        else
            $scope.page_loading_error = "Unexpected error. Bug!";
    }


});
