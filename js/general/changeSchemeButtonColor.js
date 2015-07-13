// 点击参数配置方案后切换对应按钮样式

define(function(require, exports, module) {
    "use strict";
    module.exports = function(e, schemaData) {
        //切换按钮样式
        // 主页中得绑定this
        $(this).parent().children('.btn-primary').removeClass('btn-primary').addClass('btn-default');
        $(this).addClass('btn-primary');

        // 自动补全数据
        var keyValue = $(this).attr('keyValue');
        var paddingData = schemaData[keyValue];
        $(this).parent().prev().find('input').each(function(index) {
            $(this).val(paddingData[index]);
        });
    }
});
