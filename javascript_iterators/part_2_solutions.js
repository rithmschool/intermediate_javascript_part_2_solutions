function vowelCount(str){
    var splitArr = str.split("");
    var obj = {};
    var vowels = ["a","e","i","o","u"];

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

function removeVowels(str){
    var vowels = ["a","e","i","o","u"]
    return str.split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    });
}