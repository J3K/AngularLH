angular
.module('ngLiveHighlights')
.controller('ngLHController', function ($scope,$sce, ngLHFactory,DTOptionsBuilder,DTColumnBuilder, DTColumnDefBuilder )
{
    $scope.Title = " LiveHighlights ";
    $scope.FootballGames;
    $scope.FootballHighlightsv1;
    $scope.FootballHighlightsv2;

    $scope.sortType     = 'Time'; // set the default sort type
    $scope.sortType2    = 'TeamAvsTeamB'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchGame   = '';     // set the default search/filter term
    $scope.searchHighlightv1   = '';     // set the default search/filter term
    $scope.searchHighlightv2   = '';     // set the default search/filter term


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

    ngLHFactory.getFootballHighlightsv2().success(function(FootballHighlightsv2){
        $scope.FootballHighlightsv2 = FootballHighlightsv2;
        // console.log("LENGTH" + FootballHighlightsv2.length);
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
        {
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
            $scope.isHighlights = false;
        }
        else $scope.PlayerExpanded = true;

        $scope.PlayerCode = $sce.trustAsResourceUrl(key);
        // console.log($scope.PlayerExpanded);

    }

    $scope.ClickedHighlightsLink = function(key){
        console.log(key);

        // console.log($scope.PlayerExpanded);
        if(!$scope.PlayerExpanded)
        {
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
            $scope.isHighlights = true;
        }
        else $scope.PlayerExpanded = true;

        $scope.PlayerCode = $sce.trustAsResourceUrl("http://cdn.livehighlights.net/content/web" + key);
        // console.log($scope.PlayerExpanded);

    }

    var vm = this;


    vm.dtOptions0 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-12'p>><'row'<'col-sm-12't>>") // pitrfl
        .withOption('language', {"emptyTable": "<h4><img src=\"http://livehighlights.net/img/progress_bar.gif\" ></h4>"})
        .withOption('order', [1, 'asc'])
        .withOption('scroller', {'loadingIndicator': true})
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 15);

    vm.dtColumnDefs0 = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '30%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(2).withOption('width', '60%').notSortable(),
        DTColumnDefBuilder.newColumnDef(3).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(4).withOption('width', '10%').notSortable(),
        DTColumnDefBuilder.newColumnDef(5).withOption('width', '10%').notSortable()
    ];    

    vm.dtOptions1 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-12'p>><'row'<'col-sm-12't>>") // pitrfl
        .withOption('language', {"emptyTable": "<h4><img src=\"http://livehighlights.net/img/progress_bar.gif\" ></h4>"})
        // .withOption('order', [1, 'desc'])
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 15);

    vm.dtColumnDefs1 = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '60%').notSortable(),
        DTColumnDefBuilder.newColumnDef(2).withOption('width', '10%').notSortable(),
        DTColumnDefBuilder.newColumnDef(3).withOption('width', '20%').notSortable()
        // DTColumnDefBuilder.newColumnDef(4).withOption('width', '20%').notSortable(),
        // DTColumnDefBuilder.newColumnDef(5).withOption('width', '10%').notSortable()
    ];      



    vm.dtOptions2 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-12'p>><'row'<'col-sm-12't>>") // pitrfl
        .withOption('language', {"emptyTable": "<h4>asdasd</h4>"})
        .withOption('order', [0, 'desc'])
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 15);

    vm.dtColumnDefs2 = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '80%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '20%').notSortable()
    ];      




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
