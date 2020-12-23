console.log("Test 1 - Normal: "+countOccurences(1, 11, 1, 1, 1)+"\n");

console.log("Test 2 - Evens: "+countOccurences(1, 50, 1, 3, 2)+"\n");

console.log("Test 3 - Odds: "+countOccurences(1, 50, 2, 5, 3)+"\n");

console.log("Test 4 - With Negative: "+countOccurences(-300, 0, 1, 9, 1)+"\n");

// For the following statement, the error should come before this console output because the function runs before this line finishes
console.log("Test 5 - Invalid Input: "+countOccurences(-5, -60, 1, 1, 1)+"\n");

function countOccurences (seriesStart, seriesEnd, seriesIncrement, specifiedDigit, seriesType){
    // Check that the end is not before the start
    if(seriesEnd < seriesStart) {
        console.log("**Please provide valid input**");
        return -1;
    }
    var result = 0; 
    for(let i = seriesStart; i <= seriesEnd; i += seriesIncrement){
        switch(seriesType){
            case 2: // only even cases
                if((i%2) == 1) i++; // checks if the number is odd, if yes then increment to get even number
                break;
            case 3: // only odd cases
                if((i%2) == 0) i++; // checks if the number is even, if yes then increment to get odd number
                break;
            default: //includes case 1 in order to run through every number
        }
        var splt = i.toString().split(""); // Use splitter in order to get each of the digits in the number as an array
        for( let j = 0; j < splt.length; j++){ // run through the new split array
            if(splt[j] == specifiedDigit){ // check if each digit of the number is equal to the SpecifiedDigit
                result += 1;
            }
        }
    }
    return result;
}