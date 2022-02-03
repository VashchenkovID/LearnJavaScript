function invertObj ( obj) {
let result = {};
if (obj) {
    for (const [key,value] of Object.entries(obj)){
        result[value] = key;
    }
    return result;

}
}