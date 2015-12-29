'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    /**
     *
     * 类型：
     * numberOp:数字类型允许的操作类型
     * strOp:字符串类型允许的操作类型
     */
 /*   var user=[
        /!**中文描述，类型，下一个允许类型**!/
        {'id':['编号','long','numberOp']},
        {'name':['姓名','string','strOp']},
        {'age':['年龄','int','numberOp']},
    ];*/

/*    var address=[
        /!**中文描述，类型，下一个允许类型**!/
        {'city':['城市','string','strOp']},
        {'street':['街道','int','strOp']},
    ];*/
   /* var next='>';
    var numberOp=['>','<','=='];
    var strOp=['startWith','endWith','equals'];*/


    var root=[
        {'name':'user',value:'user',nextOp:'user'},
        {'name':'address',value:'address',nextOp:'address'}
    ];
    var user=[
        {name:'id',value:'id',nextOp:'numberOp'},
        {name:'name',value:'name',nextOp:'strOp'},
        {name:'age',value:'age',nextOp:'numberOp'}
    ];
    var address=[
        {name:'city',value:'city',nextOp:'strOp'},
        {name:'street',value:'street',nextOp:'strOp'}
    ];
    var numberOp=[
        {name:'>',value:'>',nextOp:'inputOp'},
        {name:'<',value:'<',nextOp:'inputOp'},
        {name:'==',value:'==',nextOp:'inputOp'}
    ];
    var strOp=[
        {name:'startWith',value:'startWith',nextOp:'inputOp'},
        {name:'endWith',value:'endWith',nextOp:'inputOp'},
        {name:'equals',value:'equals',nextOp:'inputOp'}
    ];
    var inputOp=[
        {name:'inputOp',value:'inputOp',nextOp:'nextMarkOp'}
    ];
    var nextMarkOp=[
        {name:'next>',value:'next>',nextOp:'joinOrEndOp'}
    ];
    var joinOrEndOp=[
        {name:'end',value:'end',nextOp:'end'},
        {name:'and',value:'and',nextOp:'rootOp'},
        {name:'or',value:'or',nextOp:'rootOp'}
    ];
    var map={root:root,user:user,address:address,numberOp:numberOp,strOp:strOp,inputOp:inputOp,joinOrEndOp:joinOrEndOp,nextMarkOp:nextMarkOp}

    var lastRoot=root;
    $scope.buildNext=function(item){
        console.log(item);
        var tmp = item.split("-");
        var val=tmp[0];
        var idx=tmp[1];
        var opKey=lastRoot[idx].nextOp;
        if(opKey == "end"){
            alert("end!");
            return;
        }
        if(opKey == 'inputOp'){
            //push input
            lastRoot=map[opKey];
            var tmpInput={name:lastRoot.name,value:""};
            $scope.dynamicInputs.push(tmpInput);

            //push nextMarkOp
            lastRoot=map[lastRoot.nextOp];
            $scope.dynamicSelects.push({conditons:lastRoot});

        }else{
            lastRoot=map[opKey];
            $scope.dynamicSelects.push({conditons:lastRoot});
        }
    }

    $scope.dynamicSelects=[
        {conditons: root}
    ];
    $scope.dynamicInputs=[
        {}
    ];
});