// 处理提交事件

define(function(require, exports, module) {
    "use strict";
    var postData = [];
    module.exports = function(e, output) {
        $(e.target).find('input').each(function(index) {
            postData[index] = $(this).val();
        });
        // 处理数据
        var outputParent = $(e.target).parents('.input').parent();
        var sysId = outputParent.attr('id');
        postData.sysId = sysId;
        outputParent.find('.output').remove();
        outputParent.append(output(postData));
    }
});
