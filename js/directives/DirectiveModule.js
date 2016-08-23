angular.module("DirectiveModule", [])
	.directive("splash", function() {
		return {
			templateUrl: "./src/templates/splash.html",
			controller: function($scope, jumpService) {
				jumpService.jump($scope, "/login")
			},
			link: function() {
				new Swiper(".swiper-container")
			}
		}
	})
	.directive("banner",function() {
		return {
			templateUrl: "./src/templates/banner.html",
			controller: function($scope) {
				$scope.update = function() {
					$scope.swiper.update();
				}
			},
			link: function(scope) {
				scope.swiper = new Swiper(".swiper-container")
			}
		}
	})
	.directive("home-weiper",function(){
		return{
			templateUrl:"./templates/home-swiper.html",
			transclude:true,
			controller: function($scope) {
				$scope.update = function() {
					$scope.swiper.update();
				}
			},
			link:function(scope,ele){
				var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 3,
			        paginationClickable: true,
			        spaceBetween: 30,
			        freeMode: true
			    });
			}
		}
	})
	.directive("iscroll",function(){
		return {
			templateUrl: "./src/templates/iscroll.html",
//			controller: function($scope) {
//				$scope.reflash = function() {
//					$scope.myScroll.reflash();
//				}
//			},
			transclude:true,
			link:function(scope,ele){
				document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				function updatePosition () {
					scope.position = scope.myScroll.y
					console.log(scope.scollerheight,scope.position)
					if(scope.position>-scope.myScroll.y+40+parseInt($(".scroller").height())){
						console.log("updata")
					}
				}
				
				setTimeout(function(){
					scope.myScroll=new IScroll('.wrapper', { probeType: 3, mouseWheel: true ,click:true,checkDOMChanges:true});
//					scope.myScroll.on('scroll', updatePosition);
					scope.myScroll.on('scrollEnd', updatePosition);
					scope.scollerheight=$(".scroller").height()
//					$apply()
				},200)
				
			}
		}
	})
