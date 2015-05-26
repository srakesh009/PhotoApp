app.controller('AlbumListController',function($scope,albumProvider) {
    $scope.new_album = {};
    $scope.add_album_error = "";
    $scope.albums = albumProvider.getAlbums();

   $scope.addAlbum = function (new_album) {
        try{
            console.log(new_album.name);
            console.log(new_album.title);
            console.log(new_album.description);
            console.log(new_album.date);
            console.log($scope.add_album_error);

            albumProvider.addNewAlbum(new_album);
            console.log("After provider");
            $scope.new_album = {};
            $scope.add_album_error = "";
        }catch(e){
            if(e.message == "album_name_missing"){
                console.log("inside if block of Missing name");
                $scope.add_album_error = "Please fill in the album name.";
            }

            if(e.message == "duplicate_album_name"){
                console.log("Insidee else if of duplicate album");
                $scope.add_album_error = "An album of the same name already exists.";
            }

            if(e.message == "album_title_missing"){
                console.log("inside if block of Missing title");
                $scope.add_album_error == "Title is required.";
            }

            if(e.message == "album_description_missing")
                $scope.add_album_error = "Description is required.";
            if(e.message == "album_date_missing")
                $scope.add_album_error == "Album date is required.";
            if(e.message == "Invalid_date")
                $scope.add_album_error = "Please fill in a valid date";
        }

    };


});

