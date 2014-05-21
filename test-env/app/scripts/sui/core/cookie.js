/**
 * @name: SUI/core/cookie
 * @author: megrez
 */
define('sui/core/cookie', function(require, exports, module) {
    var cookie = document.cookie,
        cookieArray = [],
        cookieObject = {};
    var Cookies = function(name) {
        cookieArray = cookie.split('; ');
        for (var i = 0; i < cookieArray.length; i++) {
            cookieObject[cookieArray[i].split('=')[0]] = cookieArray[i].split('=')[1];
            if (cookieArray[i].split('=')[0] == name)
                return cookieArray[i].split('=')[1];
        }
        return false;
    };
    Cookies();
    exports.getCookie = function(name) {
        if (cookieObject.hasOwnProperty(name))
            return cookieObject[name];
        else
            return false;
    };
    exports.setCookie = function(name, value, expire) {

    };
});