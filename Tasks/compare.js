const compare = (firstValues, secondValues) => {
    const keysFirst = Object.keys(firstValues);
    const keysSecond = Object.keys(secondValues);

    if (keysFirst.length !== keysSecond.length) return false;
    if (!keysFirst.every((key, index) => key === keysSecond[index])) return false;

    return keysFirst.every(key => firstValues[key] === secondValues[key]);
};

module.exports = compare;
