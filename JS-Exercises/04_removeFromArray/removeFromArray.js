const removeFromArray = function(array, ...object) {
    let i = 0;
    let j = 0;
    while (i<array.length){
        for (j;j<object.length;j++){
            if (array[i]===object[j]){
                array.splice(i,1);
            }
        }
        i++;
    } 
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
