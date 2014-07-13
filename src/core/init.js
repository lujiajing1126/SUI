;
(function() {
    var SUI = window.SUI = window.SUI || {}, older_SUI, _VERSION = SUI._Version = "0.1.1";
    SUI.noConflict = function() {
        return SUI;
    };
    SUI.version = function() {
        SUI.debug(SUI._Version);
    };
    SUI.debug = function(msg) {
        console.log(msg);
    };
    // 封装seajs模块
    SUI.use = seajs.use;
})();
