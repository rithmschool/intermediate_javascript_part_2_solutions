// forEach

function printFirstAndLast(arr){
    arr.forEach(function(val){
        console.log(val[0] + val[val.length-1])
    });
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

// map

function valTimesIndex(arr){
    return arr.map(function(val,idx){
        return val*idx;
    })
}

function extractKey(arr,key){
    return arr.map(function(val){
        return val[key];
    });
}

// filter

function filterLetters(arr, letter){
    var lowerCasedLetter = letter.toLowerCase();
    return arr.filter(function(val){
        return val.toLowerCase() === lowerCasedLetter;
    // since this value returns an array, we can access the length right away!
    }).length;
}

function filterKey(arr,key){
    return arr.filter(function(val){
        return val[key];
    });
}