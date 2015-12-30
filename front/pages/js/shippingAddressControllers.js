'use strict';

/* Controllers */

var shippingAddress = angular.module('shippingAddress', []);

shippingAddress.controller('shippingAddressCtl', function($scope) {
    $scope.province=[['2','四川'],['3','重庆']];
    $scope.provinceActive=true;
    $scope.currentProvince=$scope.province[0];
    //id,name,proviceId
    $scope.city=[['2','成都','2'],['3','绵阳','2'],['4','渝中区','3'],['5','沙坪坝区','3']];
    $scope.city1=[];
    $scope.cityActive=false;
    $scope.currentCity=$scope.city[0];

    //id,name,cityId
    $scope.district=[['2','高新区','2'],['3','双河区','3'],['4','解放碑','4'],['5','小龙坎','5']];
    $scope.district1=[];
    $scope.districtActive=false;
    $scope.currentDistrict=$scope.district[0];

    $scope.provinceChange=function(p){
        $scope.currentProvince=p;
        $scope.city1=[];
        angular.forEach($scope.city,function(val,key){

            if(val[2] == p[0]){
                $scope.city1.push(val);
            }
        });
        $scope.provinceActive=false;
        $scope.cityActive=true;
        $scope.districtActive=false;
    };

    $scope.cityChange=function(c){
        $scope.currentCity=c;
        $scope.district1=[];
        angular.forEach($scope.district,function(val,key){

            if(val[2] == c[0]){
                $scope.district1.push(val);
            }
            $scope.provinceActive=false;
            $scope.cityActive=false;
            $scope.districtActive=true;
        });
    };
    $scope.changeTab=function(idx){
        if(idx == 1){
            $scope.provinceActive=true;
            $scope.cityActive=false;
            $scope.districtActive=false;
        }
        if(idx == 2){
            $scope.provinceActive=false;
            $scope.cityActive=true;
            $scope.districtActive=false;
        }
        if(idx == 3){
            $scope.provinceActive=false;
            $scope.cityActive=false;
            $scope.districtActive=true;
        }
    };
    $scope.myShow=false;
    $scope.show=function(){
        $scope.myShow = !$scope.myShow;
    }
    $scope.districtChange=function(d){
        $scope.currentDistrict=d;
        $scope.result=$scope.currentProvince[1]+" "+$scope.currentCity[1]+" "+$scope.currentDistrict[1];
    };

});