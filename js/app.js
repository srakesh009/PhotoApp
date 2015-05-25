

var app = angular.module('firstapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/albums', {
            controller: 'AlbumListController',
            templateUrl: 'app/partials/album_list_partial.html'
        }).
        when('/albums/:album_name',
        {
            controller: 'AlbumViewController',
            templateUrl: 'app/partials/album_view_partial.html'
        }

    )
        .when('/', {
            redirectTo: '/albums'
        })
        .when('/404Page', {

            templateUrl: 'app/partials/404_page_partial.html',
            controller: 'Controller404'
        })
        .when('/albums/img/:photo_name',{
            templateUrl: 'app/partials/photo_partial.html',
            controller: 'PhotoController'
        }

    )
        .otherwise(
        {
            redirectTo: '/404Page'
        }
    )
});

/*app.config(function ($routeProvider) {

    // configure the routes
    $routeProvider

        .when('/albums', {

            templateUrl: 'album_list_partial.html',
            controller: 'AlbumListController'
        })
        .when('/', {

            redirectTo: '/albums'
        }).
         when('/404Page', {

           templateUrl: '404_page_partial.html',
           controller: 'Controller404'
        })
        .
        otherwise(
        {
            redirectTo: '/404Page'
        }
    );

});*/
