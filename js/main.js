var app=angular.module("app",["ionic"]);
app.config(function($stateProvider,$ionicConfigProvider,$urlRouterProvider){
	$ionicConfigProvider.platform.android.tabs.style("standard");
	$ionicConfigProvider.platform.android.tabs.position("standard");
	$ionicConfigProvider.platform.android.navBar.alignTitle("center");
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state("home",{
			url:"/home",
			templateUrl:"./templates/home.html"
		})
})