const number = 1;
const num2 = number;

console.log(num2);

const person = {
    name: 'Max'
};

const secondPerson = {
    ...person
};

person.name = 'Mantas';
console.log(secondPerson);