/**
 *  Module
 *
 * Description
 */
angular
.module('ngLiveHighlights')
.factory('ngLHFactory', function ($http)
{

    var FootballGamesData = "";

    function getFootballGames()	
    {
        return $http.get('http://livehighlights.net/JSON.json');
    }

    return {
        getFootballGames : getFootballGames
    }

}
);
