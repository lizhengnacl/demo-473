/**
 * @fileoverview 473
 * @author liz
 * @date 2015-07-08
 */

define("page/pay", function(require, exports, module) {
    "use strict";
    $('#lightPayForm').submit(function(e){
        e.preventDefault();
        location.href = './admin.html'
    });
});

require(["page/pay"]);
