function frequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
          
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
var fr="aabbccd";
var result=frequency(fr);
console.log(result);