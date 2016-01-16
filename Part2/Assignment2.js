
var outerFun = function(param1){

	return function multipication(param2)
  {
    return param1 *param2
  }
}

var result = outerFun(10);
console.log(result(12));