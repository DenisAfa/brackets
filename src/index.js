module.exports = function check(str, bracketsConfig) {

    let brackets = bracketsConfig.flat(Infinity);
    let bracketsArr =[]

    for (let i = 0; i < str.length; i++) {
        let bracketsIndex = brackets.indexOf(str[i]);
 
        if ( bracketsArr.length > 0 && brackets[bracketsIndex] === brackets[bracketsArr[bracketsArr.length - 1]] ) {
            bracketsArr.pop();
            continue;
        }
        if (bracketsIndex % 2 == 0) {
            bracketsArr.push(bracketsIndex + 1);
        } else {
            if (bracketsArr.pop() != bracketsIndex) {
                return false;
            }
        }
    }

    return bracketsArr.length === 0
}
