define(function(a,b){var c=function(a){var b=SUI.$.ajax({url:"/doubanbook?q="+escape(a),dataType:"JSON"});return b};b.searchBook=c});