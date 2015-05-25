app.controller('AlbumListController',function($scope){
    $scope.new_album={};
    $scope.add_album_error="";
    $scope.albums = [
        { name: 'gujrath1309', title: 'Trip to gujrath', date: '2014-09-01', description: 'My favourite trip' },
        { name: 'rajasthan1404', title: 'Trip to Rajasthan', date: '2014-04-15', description: 'This place is cold' },
        { name: 'diu1210', title: 'Trip to Diu', date: '2014-10-01', description: 'So hot!' },
        { name: 'Bengal1207', title: 'Trip to Benal', date: '2015-07-31', description: 'So many Tigers!' }
    ];
    $scope.addAlbum = function (new_album){
        //For validations.
        if(!new_album.title){
            $scope.add_album_error="Please enter the title";
        }
        else if(!new_album.date ){
            $scope.add_album_error="Please enter the valid date.";
        }

        else if(!new_album.description){
            $scope.add_album_error="Please enter the album description.";
        }
        //Push function pushes the new object to the bottom of the array.
        else{


            $scope.albums.push(new_album);
            $scope.new_album={};
            $scope.add_album_error="";


        }
    };
});



/*function is_valid_date(date){
 if(date.match(/^[0-9]{2,4}[\-\/\.,][0-9]{1,2}[\-\/\.,][0-9]{1,2}$/)){
 var d = new Date(new_album.date.trim());
 if (isNaN(d.getTime())) {
 return false;
 console.log("inside if");
 }
 }else return true;
 }*/