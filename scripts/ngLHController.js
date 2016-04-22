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
    $scope.ShowAdLinkSource = true;


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

    $scope.WatchGame = function (argument,VideoTitle) {

        // console.log(argument);

        // $('#LiveGamesHighlights').openModal();
        $scope.TITLE = VideoTitle;

        $('#LiveGames').openModal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
                ready: function() { $('ul.tabs').tabs('select_tab', 'Link7'); }, // Callback for Modal open
                complete: function() { $("#LiveGames").find('iframe').attr('src', ""); } // Callback for Modal close
            }
        );
        console.log($scope.ShowAdLinkSource);
        console.log($scope.ShowAdLinkSource);

        if(!$scope.PlayerExpanded)
        {
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
            $scope.isHighlights = false;
        }
        else $scope.PlayerExpanded = true;


        $scope.Links = argument;
    }

    $scope.ClickedLink = function(key){
        // console.log(key);

        // console.log($scope.PlayerExpanded);
        // if(!$scope.PlayerExpanded)
        // {
        //     $scope.PlayerExpanded = !$scope.PlayerExpanded;
        //     $scope.isHighlights = false;
        // }
        // else $scope.PlayerExpanded = true;
        $scope.PlayerCode = $sce.trustAsResourceUrl(key);
        // console.log($scope.PlayerExpanded);

    }

    $scope.ClickedHighlightsLink = function(key,VideoTitle){
        
        // console.log(key);

        $scope.TITLE = VideoTitle;

        $('#Highlights').openModal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
                ready: function() { $('ul.tabs').tabs('select_tab', '#Link0'); }, // Callback for Modal open
                complete: function() { $("#Highlights").find('iframe').attr('src', ""); } // Callback for Modal close
            }
        );

        // console.log($scope.PlayerExpanded);
        if(!$scope.PlayerExpanded)
        {
            $scope.PlayerExpanded = !$scope.PlayerExpanded;
            $scope.isHighlights = true;
        }
        else $scope.PlayerExpanded = true;

        $scope.HighlightsCode = $sce.trustAsResourceUrl("http://cdn.livehighlights.net/content/web" + key);
        // console.log($scope.PlayerExpanded);

    }

    var vm = this;

    console.log($scope.FootballGames);
    if(!$scope.FootballGames) 
    {
        vm.dtOptions0 = DTOptionsBuilder.newOptions()
            .withDOM("<'row'<'col s12'p>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
            .withOption('language', {"emptyTable": "<div class=\"card-panel teal lighten-2\"><div class=\"center-align\"> No game right now </div></div>"})
            .withOption('order', [1, 'asc'])
            .withOption('scroller', {'loadingIndicator': true})
            // .withOption('aaSorting', [ 2, 'asc' ])
            // .withOption('stateSave', true)
            .withOption('pageLength', 15);
    }
    else{

    vm.dtOptions0 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col s12'p>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language', {"emptyTable": "<div class=\"progress\"><div class=\"indeterminate\"></div></div>"})
        .withOption('order', [1, 'asc'])
        .withOption('scroller', {'loadingIndicator': true})
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 15);

    }   
        vm.dtColumnDefs0 = [
            DTColumnDefBuilder.newColumnDef(0).withOption('width', '25%').notSortable(),
            DTColumnDefBuilder.newColumnDef(1).withOption('width', '5%').notSortable(),
            DTColumnDefBuilder.newColumnDef(2).withOption('width', '40%').notSortable(),
            DTColumnDefBuilder.newColumnDef(3).withOption('width', '10%').notSortable(),
            DTColumnDefBuilder.newColumnDef(4).withOption('width', '20%').notSortable(),
            // DTColumnDefBuilder.newColumnDef(5).withOption('width', '35%').notSortable()
        ];    
   


    vm.dtOptions1 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col s12'p>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language', {"emptyTable": "<div class=\"progress\"><div class=\"indeterminate\"></div></div>"})
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
        .withDOM("<'row'<'col s12'p>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language', {"emptyTable": "<div class=\"progress\"><div class=\"indeterminate\"></div></div>"})
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
