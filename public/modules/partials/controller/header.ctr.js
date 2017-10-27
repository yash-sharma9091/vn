"use strict";

app.controller('headerController', ['$scope','localStorageService','$rootScope','$mdDialog','globalRequest','$timeout','$location','$mdSidenav','socket',
	function($scope,localStorageService,$rootScope,$mdDialog,globalRequest,$timeout,$location,$mdSidenav,socket) {

		/*******************************************************
		* Sidebar
		*******************************************************/	
	
	    $rootScope.toggleSidebar      = buildToggler('sidebar');
	    $rootScope.toggleNotification = buildToggler('notification');

	    /*$scope.isOpenRight = function(){
	      return $mdSidenav('right').isOpen();
	    };*/

	   

	    function buildToggler(navID) {
	    	/*$rootScope.activeSidebar = !$rootScope.activeSidebar;*/
	      return function() {
	        $mdSidenav(navID)
	          .toggle()
	          .then();
	      };
	    }

	   


	    /*******************************************************
		* Get notificatoin
		*******************************************************/
		globalRequest.getNotification();
		

	    socket.on('notification',function(resp){
	    	
	    	$rootScope.message.push(resp.result);
		});

		socket.on('jot_create_notification',function(resp){
			console.log(resp.result);
	    	$rootScope.message.push(resp.result);
	    	$rootScope.message2 = resp.result;
		});
		
		/*******************************************************
		* Callback function to close jot circle on outside click
		*******************************************************/

		$scope.circleToggle = function(){			
				$scope.logocircle = false;
				$timeout(function() {				
				   $rootScope.$apply();
				});								
		};

		/*
		* Jot form tab list
		*/

		$rootScope.jotTypes        	= window.__API_PATH.JOT_TYPES;


	    if($rootScope.activeHotelData)
	    {

			/************************************************
			* Get list of Jot types selected by current user
			*************************************************/

			$scope.boards =  $rootScope.activeHotelData.jot_types;
		}

		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.changeJotView = function(hotel){				
			globalRequest.getJotCount();
			localStorageService.set('hotel', hotel);
			$rootScope.activeHotelData = localStorageService.get('hotel');
			window.location.reload();
			
		};




		/**************************************
		* Open jot popup
		**************************************/

			$scope.quickTaskPopup = function(){
				$mdDialog.show({
					controller: 'jotPopupCtrl',
					templateUrl: '/modules/jot/views/jot-form.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,
					locals: {ActivateTab:{label:"Quick Jot",id:'quick',directory:'jot'}}
				}).then(function(answer) {}, function() {});

			};

		


		/**************************************
		* Open popup direct by jot type 
		**************************************/

		$rootScope.openFormByType = function(formType){
			$scope.circleToggle();
			$mdDialog.show({
				controller: 'jotPopupCtrl',
				templateUrl: '/modules/jot/views/jot-form.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,				
				locals: {ActivateTab:formType}
			}).then(function(answer) {}, function() {
				
			});
		};



		$scope.openLoginForm = function(detail){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});
		};


	}
]);