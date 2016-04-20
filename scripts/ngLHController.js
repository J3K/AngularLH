angular
.module('ngLiveHighlights')
.controller('ngLHController', function ($scope,$sce, ngLHFactory)
{
    $scope.Title = " LiveHighlights ";
    $scope.FootballGames;
    $scope.FootballHighlightsv1;

    $scope.sortType     = 'Time'; // set the default sort type
    $scope.sortType2    = 'TeamAvsTeamB'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchGame   = '';     // set the default search/filter term

    ngLHFactory.getFootballGames().success(function(FootballGames){
        $scope.FootballGames = FootballGames;
    }).error(function(error){
        console.log(error);
    });

    ngLHFactory.getFootballHighlightsv1().success(function(FootballHighlightsv1){
        $scope.FootballHighlightsv1 = FootballHighlightsv1;
        // console.log(FootballHighlightsv1.length);
    }).error(function(error){
        console.log(error);
    });

    $scope.WatchGame = function (argument) {
        // body...
        console.log(argument);
    }

    $scope.ClickedLink = function(key){
        console.log(key);

        // console.log($scope.PlayerExpanded);
        if(!$scope.PlayerExpanded)
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
        else $scope.PlayerExpanded = true;

        $scope.PlayerCode = $sce.trustAsResourceUrl(key);
        // console.log($scope.PlayerExpanded);

    }

    $scope.ClickedHighlightsLink = function(key){
        console.log(key);

        // console.log($scope.PlayerExpanded);
        if(!$scope.PlayerExpanded)
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
        else $scope.PlayerExpanded = true;

        $scope.PlayerCode = $sce.trustAsResourceUrl("http://cdn.livehighlights.net/content/web" + key);
        // console.log($scope.PlayerExpanded);

    }

    //$scope.dtOptions = DTOptionsBuilder.newOptions() .withOption('order', [1, 'desc']); 

    // var vm = this;

    // vm.dtOptions = DTOptionsBuilder.newOptions()
    //     .withDOM("<'row'<'col-sm-6'p><'col-sm-6'f>><'row'<'col-sm-12't>>") // pitrfl
    //     .withOption('language', {"emptyTable": "<h4>No game available right now ...</h4>"})
    //     .withOption('order', [[1, 'asc'],[ 2, 'asc' ]])
    //     // .withOption('aaSorting', [ 2, 'asc' ])
    //     // .withOption('stateSave', true)
    //     .withOption('pageLength', 15);

    // vm.dtColumnDefs = [
    //     DTColumnDefBuilder.newColumnDef(0).withOption('width', '20%').notSortable(),
    //     DTColumnDefBuilder.newColumnDef(1).withOption('width', '5%').notSortable(),
    //     DTColumnDefBuilder.newColumnDef(2).withOption('width', '45%').notSortable(),
    //     DTColumnDefBuilder.newColumnDef(3).withOption('width', '5%').notSortable(),
    //     DTColumnDefBuilder.newColumnDef(4).withOption('width', '10%').notSortable(),
    //     DTColumnDefBuilder.newColumnDef(5).withOption('width', '10%').notSortable()
    // ];      


}).filter('split', function() {
        return function(input, splitChar, splitIndex) {
            // do some bounds checking here to ensure it has that index
            return input.split(splitChar)[splitIndex];
        }
    }).filter('splitOnly', function() {
        return function(input, splitChar) {

            // do some bounds checking here to ensure it has that index
            return input.split(splitChar);
        }
    });
