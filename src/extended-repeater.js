module.exports = function repeater( str , options) {
    let sep = options["separator"] ? options["separator"] : "+";
    let addSep = options["additionSeparator"] ? options["additionSeparator"] : "|";
    let add = options["addition"] === undefined ? "" : options["addition"]
    let repTime = options["repeatTimes"] ? options["repeatTimes"] : 1;
    let addRepTime = options["additionRepeatTimes"] ? options["additionRepeatTimes"] : 1;
    
    let fullAdd = add;
    let fullStr = str;
    if (repTime == 1 && addRepTime == 1)
    return str+add

    fullAdd = ( add + addSep ).repeat(addRepTime - 1) + add
   
    fullStr = (str + fullAdd + sep).repeat(repTime - 1) + str + fullAdd

    return fullStr
};
 

