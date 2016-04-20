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
        return $http.get('http://livehighlights.net/JSON/1/1'/*, { cache: true}*/);
    }
    function getFootballHighlightsv1()  
    {
        return $http.get('http://cdn.livehighlights.net/content/web/Modules/Highlights'/*, { cache: true}*/);
    }
    function getFootballHighlightsv2()	
    {
        return $http.get('http://cdn.livehighlights.net/content/web/Modules/HighlightsArena'/*, { cache: true}*/);
    }


    return {
        getFootballGames : getFootballGames,
        getFootballHighlightsv1 : getFootballHighlightsv1,
        getFootballHighlightsv2 : getFootballHighlightsv2
    }

}
);
