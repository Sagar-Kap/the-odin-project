const reverseString = function(str) {
    let reverseString ="";
    for( let i =str.length;i >= 0; i--){
        reverseString = reverseString+ str.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
