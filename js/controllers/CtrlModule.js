angular.module("CtrlModule",[]).
//商品列表页控制器
controller("ListCtrl",function($scope,ListService){
	$scope.getclass=function(classID){
		ListService.getclass($scope,classID)
	};
	ListService.getData($scope);
	ListService.getclass($scope);
	$scope.saveGood=function(goodsID){
		ListService.saveGood($scope,goodsID)
	};
})
//商品详情页控制器
.controller("detailCtrl",function($scope,detailService){
	$scope.goodsID=sessionStorage.getItem("goodsID");
	detailService.getData($scope);
})
//欢迎页面,即起始页面控制器
.controller("splashCtrl",function($scope){
	$scope.name="splash";
})
//登陸頁面控制器
.controller("loginCtrl",function($scope,loginService,jumpService){121
	var httpStr1="/register";
	$scope.rempass=true;
	loginService.go($scope);
	jumpService.jump($scope,httpStr1) ; //httpStr为跳转地址相应的scope事件为register()
})
//注册页面控制器
.controller("registerCtrl",function($scope,jumpService,registerService){
	registerService.go($scope);
	jumpService.jump($scope,"/login");
})
//首页,搜索页控制器
.controller("homeCtrl",function($scope,homeService){
	homeService.go($scope);
	$scope.getGoods();
	$scope.getBanner();
})








