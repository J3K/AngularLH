angular
.module('ngLiveHighlights')
.controller('ngLHController', function ($scope, ngLHFactory, DTOptionsBuilder, DTColumnDefBuilder)
{
    $scope.Title = " LiveHighlights ";
    $scope.FootballGames;

    ngLHFactory.getFootballGames().success(function(FootballGames){
        $scope.FootballGames = FootballGames;
    }).error(function(error){
        console.log(error);
    });

    $scope.WatchGame = function (argument) {
        // body...
        console.log(argument);
    }

    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withDOM('pitrfl');
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0).withOption('width', '20%').notSortable(),
        DTColumnDefBuilder.newColumnDef(1).withOption('width', '10%').notSortable(),
        DTColumnDefBuilder.newColumnDef(2).withOption('width', '40%').notSortable(),
        DTColumnDefBuilder.newColumnDef(3).withOption('width', '5%').notSortable(),
        DTColumnDefBuilder.newColumnDef(4).withOption('width', '10%').notSortable(),
        DTColumnDefBuilder.newColumnDef(5).withOption('width', '10%').notSortable()
    ];      

});
