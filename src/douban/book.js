define(function(require, exports, module) {
    var searchBook = function(word) {
        var data = SUI.$.ajax({
            url: '/doubanbook?q=' + encodeURI(word),
            dataType: 'JSON'
        });
        return data;
    }
    exports.searchBook = searchBook;
});