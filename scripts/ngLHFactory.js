/**
 *  Module
 *
 * Description
 */
angular
.module('ngLiveHighlights')
.factory('ngLHFactory', function ($http)
{



    function getFootballGames()	
    {
        return $http.get('http://livehighlights.net/JSON/1/1');
    }
    function getFootballHighlightsv1()	
    {
        return $http.get('http://livehighlights.net/asasdasd.json');
    }

    return {
        getFootballGames : getFootballGames,
        getFootballHighlightsv1 : getFootballHighlightsv1
    }

}
);
