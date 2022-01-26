module.exports = function reverse (n) {
   let number;
    if (n < 0) {
    number = (-n).toString();
    } else {
    number = n.toString();
    }
    let i = number.length;
    let result = '';
  
  while (i > 0) {
     
    result = `${result}${number[i-1]}`;
      i--;
  }
  return result;
}