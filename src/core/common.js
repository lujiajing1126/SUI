(function() {
    // preload modules,not vendors
    var requires = ['jquery'];
    // define common modules,use sui global namespace
    define('sui/core/common', requires, function(require, exports, module) {
        SUI.$ = require('jquery');
    });
})();