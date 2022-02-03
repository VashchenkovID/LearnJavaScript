function createGetter(str) {
    str.split('.');
    
    return obj => {
        let result = obj;
        
        for ( const item of str) {
            if ( item === undefined) {
                break;
            }
            result = result[item];
        }
    return result;
    };
    
    };