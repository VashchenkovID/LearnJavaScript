function sortStrings (arr, param ='asc') {
    const coll = new Intl.Collator( undefined, {caseFirst: "upper"})
    const arrSort = [...arr];
    const direction = { asc: 1, desc: -1};


    return arrSort.sort((a, b) => direction[param]*coll.compare(a,b));
}