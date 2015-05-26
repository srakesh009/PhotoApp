
app.service('albumProvider',function(){

    var albums=[
        {
            name: 'gujrath1309',
            title: 'Trip to gujrath',
            date: '2014-09-01',
            description: 'My favourite trip',
            photos:[
                { filename: "gujrath1309-001.jpg",
                    date: "2014-09-01",
                    description: "My favourite trip"
                },
                { filename: "gujrath1309-002.jpg",
                    date: "2014-09-01",
                    description: "My favourite place"
                } ]
        },
        {
            name: 'rajasthan1404',
            title: 'Trip to Rajasthan',
            date: '2014-04-15',
            description: 'This place is cold',
            photos:[
                {
                    filename:"rajasthan1404-001.jpg",
                    date:"2014-04-15",
                    description:"This place is cold"
                },
                {
                    filename:"rajasthan1404-002.jpg",
                    date:"2014-04-15",
                    description:"This place is hot!"
                }
            ]
        },
        {
            name: 'diu1210',
            title: 'Trip to Diu',
            date: '2014-10-01',
            description: 'So hot!',
            photos:[
                {
                    filename:"diu1210-001.jpg",
                    date:"2014-10-01",
                    description:"So hot!"
                },
                {
                    filename:"diu1210-002.jpg",
                    date:"2014-10-01",
                    description:"So hot!"
                }
            ]
        },
        {
            name: 'Bengal1207',
            title: 'Trip to Benal',
            date: '2015-07-31',
            description: 'So many Tigers!',
            photos:[
                {
                    filename:"Bengal1207-001.jpg",
                    date:"2015-07-31",
                    description:"So many Tigers!"
                },
                {
                    filename:"Bengal1207-002.jpg",
                    date:"2015-07-31",
                    description:"So many Tigers!"
                }
            ]
        }
    ];

    this.getAlbums=function(){
        return albums;
    };

    this.getPhotos=function(name){
        for(var i=0;i<albums.length;i++){
            if((albums[i].name)== name)
                return albums[i].photos;
        }
        throw new Error("no_such_album");
    };


   this.addNewAlbum=function(new_album){
       console.log("Inside add album service");
       if(!new_album.name){
           console.log("Inside if");
           throw new Error("album_name_missing");
       }

        for (var i = 0; i < albums.length; i++) {
            if (albums[i].name == new_album.name){
                throw new Error("duplicate_album_name");
            }
        }

        if(!new_album.title) {
            console.log("Missing title");
            throw new Error("album_title_missing");
        }

        if(!new_album.description) throw new Error("album_description_missing");
        if(!new_album.date) throw new Error("album_date_missing");
        if(!is_valid_date(new_album.date)) throw new Error("Invalid_date");

        //Push function pushes the new object to the bottom of the array.
        console.log("Before push");
        albums.push(new_album);
    };


    function is_valid_date(date){
        if(date.match(/^[0-9]{2,4}[\-\/\.,][0-9]{1,2}[\-\/\.,][0-9]{1,2}$/)){
            var d = new Date(date);
            return !isNaN(d.getTime());
        }else return false;
    };

});
