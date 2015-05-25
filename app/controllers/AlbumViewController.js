app.controller('AlbumViewController',function($scope,$routeParams){
    $scope.album_name=$routeParams.album_name;
    $scope.page_loading_error="";
   console.log("Inside view controller");
    switch ($routeParams.album_name) {
        case "gujrath1309":
            $scope.photos = [
                { filename: "gujrath1309-001.jpg",
                    date: "2014-09-01",
                    description: "My favourite trip"
                },
                { filename: "gujrath1309-002.jpg",
                    date: "2014-09-01",
                    description: "My favourite place"
                } ];
            break;
        default:
            $scope.page_loading_error = "I don't know about that album yet, sorry";
    }


});
