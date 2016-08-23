angular.module("ServiceModule", [])
	//商品列表页专用服务
	.service("ListService", function($http, apiUrls) {
		return {
			getData: function(scope) {
				$http.get(apiUrls.LIST_URL).success(function(data) {
					scope.data = data;
				})
			},
			getclass: function(scope,classid){
				$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK",{
					params:{
						"classID":classid
					}
				})
				.success(function(list){
					scope.lists=list;
				})
			},
			saveGood:function(scope,goodsID){
				sessionStorage.setItem("goodsID",goodsID)
			}
		}
	})
	//商品详情页专用服务
	.service("detailService",function($http){
		return {
			getData:function(scope){
				$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK",{
					params:{
						"goodsID":scope.goodsID
					}
				}).success(function(data){
					scope.data=data;
				});
			}
		}
	})
	//登录页面相关函数服务
	.service("loginService", function($http, $location) {
		return {
			go: function(scope) {
				
				scope.login = function() {
						$http.get("http://datainfo.duapp.com/shopdata/userinfo.php", {
							params: {
								status: "login",
								userID: scope.username,
								password: scope.password1
							}
						}).success(function(data) {
							console.log(scope.username,scope.password1,data)
							if(data == 0) {
								alert("用戶名不存在");
							} else if(data == 2) {
								alert("用户名密码不符");
							} else {
								alert("登陆成功")
								$location.path("/list");
							}
						})
					}
					//				scope.register = function() {
					//					$location.path("/register")
					//				}
			},
			toRigister: function(scope, address) { //跳转页面,scope为传入进来的作用域,address为跳转的路由
				scope.register = function() {
					$location.path(address)
				}
			}
		}
	})
	//跳转专用服务,每个address参数代表一个跳转页面,相对应的是不同的jump地点
	.service("jumpService", function($location) { //跳转页面方法,待改进
		return {
			jump: function(scope, address1, address2, address3, address4, address) {
				scope.jump1 = function() {
					$location.path(address1)
				};
				scope.jump2 = function() {
					$location.path(address2)
				};
				scope.jump3 = function() {
					$location.path(address3)
				};
				scope.jump2 = function() {
					$location.path(address4)
				};
				scope.jump5 = function() {
					$location.path(address5)
				};
			}
		}
	})
	//注册界面专用服务
	.service("registerService", function($http,$location) {
		return {
			go: function(scope) {
				scope.register = function() {
					$http.get("http://datainfo.duapp.com/shopdata/userinfo.php", {
						params: {
							status: "register",
							userID: scope.username,
							password: scope.password1
						}
					}).success(function(data) {
						console.log(scope.username,scope.password1,data)
						if(data == 0) {
							alert("用戶名重名");
						} else if(data == 1) {
							alert("注册成功");
							$location.path("/login")
						} else if(data==2) {
							alert("数据库报错")
						}
					})
				}

			}
		}
	})
	//搜索页面,主页service
	.service("homeService",function($location,$http){
		return{
			go:function(scope){
				scope.getGoods=function(){
					$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK")
					.success(function(data){
						scope.goods=data;
					})
				};
				scope.getBanner=function(){
					$http.jsonp("http://datainfo.duapp.com/shopdata/getBanner.php?callback=JSON_CALLBACK")
					.success(function(data){
						scope.banners=data.map(function(obj){
							return JSON.parse(obj.goodsBenUrl)[0];
							
						})
//						debugger
					})
				};
				scope.search=function(){
					$http.jsonp("http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=JSON_CALLBACK",{
						params:{
							selectText:encodeURI(scope.keyword)
						}
					}).success(function(data){
						scope.goods=data;
					})
				}
			}
		}
	})