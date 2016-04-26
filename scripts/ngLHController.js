angular
.module('ngLiveHighlights').controller('HighlightsAndGoals', function ($scope, $rootScope,$sce, AdsEngine, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder)
{
    $scope.Title = " LiveHighlights ";
    $scope.FootballGames;
    $scope.AllSports;
    $scope.FootballHighlightsv1;
    $scope.FootballHighlightsv2;

    $scope.sortType = 'Time'; // set the default sort type
    $scope.sortType2 = 'TeamAvsTeamB'; // set the default sort type

    $scope.sortType2 = 'TeamAvsTeamB'; // set the default sort type
    $scope.sortType2 = 'TeamAvsTeamB'; // set the default sort type

    $scope.sortReverse = false; // set the default sort order
    $scope.searchGame = ''; // set the default search/filter term
    $scope.searchGamev2 = ''; // set the default search/filter term
    $scope.searchGamev3 = ''; // set the default search/filter term
    $scope.searchHighlightv1 = ''; // set the default search/filter term
    $scope.searchHighlightv2 = ''; // set the default search/filter term
    $scope.ShowAdLinkSource = true;
    $scope.date = new Date().getTime();

    AdsEngine.getFootballHighlightsv1().success(function (FootballHighlightsv1)
    {
        $scope.FootballHighlightsv1 = FootballHighlightsv1;
        // console.log(FootballHighlightsv1.length);
    }
    ).error(function (error)
    {
        console.log(error);
    }
    );

    AdsEngine.getFootballHighlightsv2().success(function (FootballHighlightsv2)
    {
        $scope.FootballHighlightsv2 = FootballHighlightsv2;
        // console.log("LENGTH" + FootballHighlightsv2.length);
    }
    ).error(function (error)
    {
        console.log(error);
    }
    );


    $scope.ClickedHighlightsLink = function (key, VideoTitle)
    {

        // console.log(key);

        $scope.$parent.TITLE = VideoTitle;

        $('#Highlights').openModal(
        {
            dismissible : true, // Modal can be dismissed by clicking outside of the modal
            opacity : .5, // Opacity of modal background
            in_duration : 300, // Transition in duration
            out_duration : 200, // Transition out duration
            ready : function ()
            {
                $('ul.tabs').tabs('select_tab', '#Link0');
            }, // Callback for Modal open
            complete : function ()
            {
                $("#Highlights").find('iframe').attr('src', "");
            } // Callback for Modal close
        }
        );

        // // console.log($scope.PlayerExpanded);
        // if (!$scope.$parent.PlayerExpanded)
        // {
        //     $scope.$parent.PlayerExpanded = !$scope.PlayerExpanded;
        //     $scope.$parent.isHighlights = true;
        // }
        // else
        //     $scope.$parent.PlayerExpanded = true;

        $scope.$parent.HighlightsCode = $sce.trustAsResourceUrl("http://cdn.livehighlights.net/content/web" + key);
        // console.log($scope.PlayerExpanded);

    }
    
    
    var vm = $rootScope;
        
    vm.dtOptions1 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col s6'p><'col s6'f>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language',{ "emptyTable" : "<div class=\"progress\"><div class=\"indeterminate\"></div></div>",
            "searchPlaceholder" : " Teams and Scores"
        })
        .withOption('responsive',true)
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
        .withDOM("<'row'<'col s6'p><'col s6'f>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language',
        {
            "emptyTable" : "<div class=\"progress\"><div class=\"indeterminate\"></div></div>",
            "searchPlaceholder" : " League,Time,Teams and Scores"
        }
        )
        .withOption('order', [0, 'desc'])
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 15);

    vm.dtColumnDefs2 = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '80%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '20%').notSortable()
    ];


}).filter('split', function (){
    return function (input, splitChar, splitIndex)
    {
        // do some bounds checking here to ensure it has that index
        if(input) { return input.split(splitChar)[splitIndex]; }
    }
}).filter('splitOnly', function (){
    return function (input, splitChar)
    {
        // do some bounds checking here to ensure it has that index
        if(input) { return input.split(splitChar); }
    }
});


angular.module('ngLiveHighlights').controller('LiveFootballScontroller', function($scope, $rootScope, $sce, AdsEngine, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder)
{
    
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
		$rootScope.animation = currRoute.animation;
        // alert("asd  ");
	  });
      
    $scope.Title = " LiveHighlights ";
    $scope.FootballGames;
    $scope.AllSports;

    $scope.sortType = 'Time'; // set the default sort type
    $scope.sortType2 = 'TeamAvsTeamB'; // set the default sort type


    $scope.sortReverse = false; // set the default sort order
    $scope.searchGame = ''; // set the default search/filter term
    $scope.searchGamev2 = ''; // set the default search/filter term
    $scope.searchGamev3 = ''; // set the default search/filter term
    $scope.ShowAdLinkSource = true;
    $scope.date = new Date().getTime();

    AdsEngine.getAds().success(function (getAds)
    {
        $scope.FootballGames = getAds;
    }).error(function (error)
    {
        console.log(error);
    });

    AdsEngine.getSecondAdsArray().success(function (getSecondAdsArray)
    {
        $scope.AllSports = getSecondAdsArray;
    }).error(function (error)
    {
        console.log(error);
    });
    
    $scope.WatchGame = function (argument, VideoTitle)
    {
        $scope.$parent.TITLE = VideoTitle;

        $('#LiveGames').openModal(
        {
            dismissible : true, // Modal can be dismissed by clicking outside of the modal
            opacity : .5, // Opacity of modal background
            in_duration : 300, // Transition in duration
            out_duration : 200, // Transition out duration
            ready : function ()
            {
                $('ul.tabs').tabs('select_tab', 'Link7');
                
            }, // Callback for Modal open
            complete : function ()
            {
                $("#LiveGames").find('iframe').attr('src', "");
            } // Callback for Modal close
        }
        );
        

        $scope.$parent.Links = argument;
    }

    $scope.$parent.ClickedLink = function (key)
    {
        //    alert("asdasdas");
        //    alert(val(key+1));
        // $('Link' + val(key+1)).css("display", "block");
        $scope.$parent.PlayerCode = $sce.trustAsResourceUrl(key);
    }

    $scope.$parent.ClickedSportLink = function (key, GameA,GameB,WEB,P2P)
    {

        // console.log(key);

        $scope.$parent.TITLE = GameA + " - " + GameB;

        $scope.$parent.TableP2P = $sce.trustAsHtml(P2P);
        $scope.$parent.TableWEB = $sce.trustAsHtml(WEB);
                
        $('#Sports').openModal(
        {
            dismissible : true, // Modal can be dismissed by clicking outside of the modal
            opacity : .5, // Opacity of modal background
            in_duration : 300, // Transition in duration
            out_duration : 200, // Transition out duration
            ready : function ()
            {
                // $('ul.tabs').tabs('select_tab', '#Link0');
                // console.log(WEB);
                // console.log(P2P);

                $("#StreamTable th:first-child").remove();
                $("#StreamTable td:first-child").remove();

            }, // Callback for Modal open
            complete : function ()
            {
                $("#Sports").find('iframe').attr('src', "");
            } // Callback for Modal close
        }
        );

        // console.log($scope.PlayerExpanded);
        if (!$scope.PlayerExpanded)
        {
            $scope.$parent.PlayerExpanded = !$scope.PlayerExpanded;
        }
        else
            $scope.$parent.PlayerExpanded = true;

        // console.log($scope.PlayerExpanded);

    }
    
    
    var vm = $rootScope;

    // console.log($scope.FootballGames);
    if (!$scope.$parent.FootballGames)
    {
        vm.dtOptions0 = DTOptionsBuilder.newOptions()
            .withDOM("<'row'<'col s6'p><'col s6'f>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
            .withOption('language',
            {
                "emptyTable" : "<div class=\"card-panel teal lighten-2\"><div class=\"center-align\"> No game broadcasted right now </div></div>",
                "searchPlaceholder" : " League,Time,Teams and Language"
            })
            .withOption('order', [1, 'asc'])
            .withOption('responsive', true)
            .withOption('scroller',
            {
                'loadingIndicator' : true
            })
            // .withOption('aaSorting', [ 2, 'asc' ])
            // .withOption('stateSave', true)
            .withOption('pageLength', 15);
    }
    else
    {

        vm.dtOptions0 = DTOptionsBuilder.newOptions()
            .withDOM("<'row'<'col s6'p><'col s6'f>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
            .withOption('language',
            {
                "emptyTable" : "<div class=\"progress\"><div class=\"indeterminate\"></div></div>",
                "searchPlaceholder" : " League,Time,Teams and Language"
            })
            .withOption('order', [1, 'asc'])
            .withOption('responsive', true)
            .withOption('scroller',
            {
                'loadingIndicator' : true
            })
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


    vm.dtOptions3 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col s6'p><'col s6'f>><'row'<'col s12't>><'row'<'col s12'p>>") // pitrfl
        .withOption('language',{ "emptyTable" : "<div class=\"progress\"><div class=\"indeterminate\"></div></div>", "searchPlaceholder" : " League,Time,Teams and Language"})
        .withOption('responsive',true)
        // .withOption('order', [1, 'desc'])
        // .withOption('aaSorting', [ 2, 'asc' ])
        // .withOption('stateSave', true)
        .withOption('pageLength', 18);

    vm.dtColumnDefs3 = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(2).withOption('width', '25%').notSortable(),
        DTColumnDefBuilder.newColumnDef(3).withOption('width', '40%').notSortable(),
        DTColumnDefBuilder.newColumnDef(4).withOption('width', '15%').notSortable()
        // DTColumnDefBuilder.newColumnDef(4).withOption('width', '20%').notSortable(),
        // DTColumnDefBuilder.newColumnDef(5).withOption('width', '10%').notSortable()
    ];

    
}).filter('split', function (){
    return function (input, splitChar, splitIndex)
    {
        // do some bounds checking here to ensure it has that index
        if(input) { return input.split(splitChar)[splitIndex]; }
    }
}).filter('splitOnly', function (){
    return function (input, splitChar)
    {

        // do some bounds checking here to ensure it has that index
        if(input) { return input.split(splitChar); }
    }
});
