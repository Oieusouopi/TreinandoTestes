exports.isConsoant = (char) => {
    if (typeof char !== 'string') return 'Não é uma string';
    if (char.length > 1) return false
    return ['a','e','i','o','u'].indexOf(char) === -1
};
