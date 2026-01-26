function stringCount(value) {
    return value.length;
}
console.log(stringCount(" test1 "));
function returnlengtblanks(value1) {
    return value1.trim().length;
}
console.log(returnlengtblanks("  test1  "));
function returnboth(value3, option) {
    if (option) {
        return stringCount(value3);
    }
    else {
        return returnlengtblanks(value3);
    }
}
console.log(returnboth("   test3   ", true));
