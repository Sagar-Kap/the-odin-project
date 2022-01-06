const removeFromArray = function(array, ...object) {
    let i=0;

    for(i;i<object.length;i++){
        while(array.indexOf(object[i]) > -1){
            array.splice(array.indexOf(object[i]), 1 )
        }
    }
    return array;
    
}

// Do not edit below this line
module.exports = removeFromArray;
