/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const units = [ 'gal', 'L', 'lbs', 'kg', 'mi', 'km' ];
  const unitPairs = { 'gal': 'L',
                      'L': 'gal',
                      'lbs': "kg",
                      "kg": 'lbs',
                      'mi': 'km',
                      'km': 'mi'};
  const reNum = /([\d./]+)/g;
  const reUnit = /([a-zA-Z]+)/g;
  
  this.getNum = function(input) {
    var result = input.match(reNum)[0];
    if(result == '') {
      result = 1;
    }
    if (result) {
      return result;
    }
    return 'invalid number';
  };
  
  this.getUnit = function(input) {
    var result = input.match(reUnit)[0];
    if(units.includes(result)) {
      return result;
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = unitPairs[initUnit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const desNum = eval(initNum);
    
    var result;
    switch (initUnit) {
      case 'gal':
        result = desNum * galToL;
        break;
      case 'L':
        result = desNum / galToL;
        break;
      case 'lbs':
        result = desNum * lbsToKg;
        break;
      case 'kg':
        result = desNum / lbsToKg;
        break;
      case 'mi':
        result = desNum * miToKm;
        break;
      case 'km':
        result = desNum / miToKm;
        break;
      default:
        result = 'Cannot Convert';
        break;
    }
    
    return result.toFixed(5); //To 5th dec.
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //3.1 miles converts to 5.00002 kilometers
    var result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
