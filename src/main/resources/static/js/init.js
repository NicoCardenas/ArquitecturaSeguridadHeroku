
$(document).ready(function(){
    $('select').formSelect();
    let button = $('#submit');
    button.addEventListener("click", function () {
      let o = document.querySelector('#operation').value
      let a = document.querySelector('#val1').value
      let b = document.querySelector('#val2').value
      if (o == 1) {
        request.getSum(a,b);
      } else if (o == 2) {
        request.getSubstract(a,b);
      } else if (o == 3) {
        request.getMultiply(a,b);
      } else if (o == 4) {
        request.getDivide(a,b);
      } else if (o == 5) {
        request.getSquare(a);
      } else if (o == 6) {
        request.getExponent(a,b);
      }
    });
});

var request = (function () {
    let path = "https://";
    let apiVersion = "v1";
    let url = "/api/"+apiVersion+"/math/"

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