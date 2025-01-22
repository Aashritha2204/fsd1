
function multiplyByTwo(num, callback) {
    const result = num * 2;
    return callback(result);
  }
  
  
  function subtractThree(num, callback) {
    const result = num - 3;
    return callback(result);
  }
  
  
  function addTen(num) {
    return num + 10;
  }
  
 
  function chainOperations(num) {
    return multiplyByTwo(num, function(resultAfterMultiply) {
      return subtractThree(resultAfterMultiply, function(resultAfterSubtract) {
        return addTen(resultAfterSubtract);
      });
    });
  }
  
  
  const finalResult = chainOperations(5);
  console.log(finalResult);
  