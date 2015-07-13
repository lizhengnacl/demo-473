/**
 * @fileoverview 473
 * @author liz
 * @date 2015-07-08
 */

define("page/index", function(require, exports, module) {
    "use strict";
    var loginSys2 = require('tpl/loginSys2');

    // 切换点击样式
    var $loginSys1 = $('#loginSys1');
    var $parent = $('#loginSys1').parent();
    $('#twoSys').click(function(e){
        $('#twoSys').find('.panel').removeClass('clickColor');
        if($(e.target).attr('class') === 'panel-body'){
            $(e.target).parent().addClass('clickColor');
        }
        if($(e.target).parent().attr('id') === 'twoSys2'){
            $parent.empty();
            $parent.html(loginSys2());
        }else if($(e.target).parent().attr('id') === 'twoSys1'){
            $parent.empty();
            $parent.append($loginSys1);
        }
    });
});

require(["page/index"]);
