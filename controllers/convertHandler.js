/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var regexResult = input.search(/[a-zA-Z]/gi);
    let numbers = input.slice(0, regexResult);

    if (numbers.length === 0) {
      return 1;
    }
    numbers = numbers.split("/").map(num => Number(num));
    console.log(numbers);
    if (numbers.length > 2) {
      return "Invalid number";
    }
    if (numbers.length == 2) {
      return numbers[0] / numbers[1];
    }
    return numbers;
  };

  this.getUnit = function(input) {
    var regexResult = input.search(/[a-zA-Z]/gi);
    let unit = input.substring(regexResult, input.length);
    unit = unit.toLowerCase();
    let accept = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG"
    ];
    let output = [
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg",
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg"
    ];

    let acceptIndex = accept.indexOf(unit);
    if(acceptIndex >= 0){
      return output[acceptIndex];
    }
    return 'Invalid unit';
  };

  this.getReturnUnit = function(initUnit) {
    let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L','MI', 'KM', 'LBS', 'KG'];
    let output = ['l', 'gal', 'km', 'mi', 'kg', 'lbs', 'l', 'gal', 'km', 'mi', 'kg', 'lbs'];
    
    let inputIndex = input.indexOf(initUnit);
    if(inputIndex >= 0){
      return output[inputIndex];
    }
    return 'Invalid unit';
  };

  this.spellOutUnit = function(unit) {
    let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L','MI', 'KM', 'LBS', 'KG'];
    let output = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms','gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms']
    
    let inputIndex = input.indexOf(unit);
    if(inputIndex >= 0){
      return output[inputIndex];
    }
    return 'Invalid unit';
  };

  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const conversion = {
      gal: 3.78541,
      l: 1/3.78541,
      mi: 1.60934,
      km: 1/1.60934,
      lbs: 0.453592,
      kg: 1/0.453592
    };
    
    if(initNum === 'Invalid number' && initUnit === 'Invalid unit'){
      return 'Invalid number and unit';
    }
    if(initNum === 'Invalid number'){
      return 'Invalid number'
    }
    if(initUnit === 'Invalid unit'){
      return 'Invalid unit'
    }
    
    return parseFloat( (initNum * conversion[initUnit]).toFixed(5) );
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(this.getReturnUnit(initUnit))}`;

    return result;
  };
}

module.exports = ConvertHandler;
