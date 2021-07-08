const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

const combineData = Object.assign(name, details);
console.log(combineData);

const combineWithSeparator = { ...name, ...details };
console.log(combineWithSeparator);