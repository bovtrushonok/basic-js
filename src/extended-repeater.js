module.exports = function repeater(str, options) {
 
    let arrAdd = [];
    arrAdd[0] = (typeof options.addition !== 'undefined') ? (options.addition + "") : "";
    arrAdd.length = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    arrAdd.fill(arrAdd[0]);
    let resultAdd = options.additionSeparator ? arrAdd.join(`${options.additionSeparator}`) : arrAdd.join("|");
    let preResult = (resultAdd + "") ? (str + "").concat((resultAdd + "")) : (str + "");
    let arrMain = [];
    arrMain[0] = preResult;
    arrMain.length = options.repeatTimes ? options.repeatTimes : 1;
    arrMain.fill(arrMain[0]);
    let result = options.separator ? arrMain.join(`${options.separator}`) : arrMain.join("+");
  
    return result;
  
};
   