console.log('\'Allo \'Allo!');


SUI.use('sui/core/cookie', function(C) {
    console.log(C.getCookie('_ga'));
});

SUI.use('sui/async/q', function(Q) {
    Q.exports(SUI.$.ajax({
        url: '/data/test.json',
        dataType: 'JSON'
    })).then(function(data) {
        return data;
    }).then(function(data) {
        console.log(data);
    }).
    catch (function(except) {
        console.log(except);
    }).done();
});

SUI.use('sui/async/pqueue', function(A) {
    A([]);
});