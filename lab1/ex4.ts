//Declaring Stringcount as a function and getting value to return the amount of spaceses within test 1
function stringCount(value:string):number{
    return value.length;
}

console.log(stringCount(" test1 ")); 

//declaring returnlegthblanks as a fucntion and getting value1 to return the blank spaces within test 1
function returnlengtblanks(value1:string):number{
    return value1.trim().length;
}

console.log(returnlengtblanks("  test1  "));

//declaring returnbothh as a fucking getting value 3 to return test 3 and choose my boolean to check weather my
//if statement is true or false which in this instance is true so both values can br printed spaces and blanks 
function returnboth(value3:string, choose?:boolean) :number{
    if(choose){
        return stringCount(value3);
    }
    else{
        return returnlengtblanks(value3);
    }

    

}
console.log(returnboth("   test3   ", true));