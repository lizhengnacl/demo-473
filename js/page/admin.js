/**
 * @fileoverview 473
 * @author liz
 * @date 2015-07-08
 */

define("page/admin", function(require, exports, module) {
    "use strict";
    // 加载模板
    var sysInput = require('tpl/sysInput');
    var output = require('tpl/output');
    //
    var changeSchemeButtonColor = require('general/changeSchemeButtonColor');
    var handleTheSubmit = require('general/handleTheSubmit');

    // 隐藏.output
    $('.output').hide();

    // 获取参数数据，暂时硬编码
    var schemaData = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45],
        [46, 47, 48, 49, 50]
    ];

    // 除第一个系统外，点击实时加载
    // 切换系统
    $('#system a').click(function(e) {
        var id = $(this).attr('href').slice(1);
        if (id && id !== 'sys1') {
            $('#' + id).html(sysInput());
        }
        // 绑定 切换参数方案
        $('.right button').click(function(e) {
            changeSchemeButtonColor.call(this, e, schemaData);
        });

        // 绑定 处理提交事件
        $('form').submit(function(e) {
            e.preventDefault();
            handleTheSubmit(e, output);
        });
    });

    // 首页展示的系统硬编码，提高访问速度
    // 切换参数方案
    $('.right button').click(function(e) {
        changeSchemeButtonColor.call(this, e, schemaData);
    });

    // 处理提交事件
    $('form').submit(function(e) {
        e.preventDefault();
        handleTheSubmit(e, output);
    });
});

require(["page/admin"]);
