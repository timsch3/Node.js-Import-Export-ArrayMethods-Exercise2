filterAbove100k = (arr) => {
    return arr.filter(e => e.population >= 100000)
}

filterBelow100k = (arr) => {
    return arr.filter(e => e.population < 100000)
}

module.exports = { filterAbove100k, filterBelow100k }