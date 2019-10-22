
$(document).ready(function(){
    $('select').formSelect();
    let button = $('#submit');
    button.addEventListener("click", function () {
      let o = document.querySelector('#operation').value
      let a = document.querySelector('#val1').value
      let b = document.querySelector('#val2').value
      let res = document.querySelector('#result')
      if (o == 1) {
        res.innerHTML = request.getSum(a,b);
      } else if (o == 2) {
        res.innerHTML = request.getSubstract(a,b);
      } else if (o == 3) {
        res.innerHTML = request.getMultiply(a,b);
      } else if (o == 4) {
        res.innerHTML = request.getDivide(a,b);
      } else if (o == 5) {
        res.innerHTML = request.getSquare(a);
      } else if (o == 6) {
        res.innerHTML = request.getExponent(a,b);
      }
    });
});

var request = (function () {
    let path = "https://mathlogicheroku.herokuapp.com";
    let apiVersion = "v1";
    let url = path + "/api/"+apiVersion+"/math/"

    var getRequest = function (url,callback) {
        $.get(url,callback)
    }

    return {
        // Get from the api
        getSum: function(a,b,callback){getRequest(url+"sum."+a+"&"+b,callback)},
        getSubstract: function(a,b,callback){getRequest(url+"substract."+a+"&"+b,callback)},
        getMultiply: function (a,b,callback) {getRequest(url+"multiply."+a+"&"+b,callback)},
        getDivide: function (a,b,callback) {getRequest(url+"divide."+a+"&"+b,callback)},
        getSquare: function (a,callback) {getRequest(url+"square."+a+"&"+b,callback)},
        getExponent: function (a,b,callback) {getRequest(url+"exponent."+a+"&"+b,callback)},
    }
})();