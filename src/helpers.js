module.exports = {
    computeTotalWeight(list) {
        const reducer = (accumulator, item) => {
            return accumulator + item.weight;
        };
        return list.reduce(reducer, 0);
    }
};
