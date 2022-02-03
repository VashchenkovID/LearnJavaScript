function trimSymbols(str, size) {
let count =0;
let string = str.split('');
 const result = [];
size = 3;

if ( size === 0) {
    return result;
}

for ( i = 0; i< str.length; i++) {
    if (str[i] === str[i-1] && count < size) {
        count++;
        result.push(str[i]);
    }

    else if ( str[i] != str[i-1]) {
        result.push(str[i]);
        count = 1;
    }
}
return result.join('')


}