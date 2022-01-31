const object = (obj, ...fields) => {
    const arrObj = Object.keys(obj);
    const result = {}
    for (let key in arrObj) {
        if (!fields.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}