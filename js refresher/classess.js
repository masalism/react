class Human {
    // constructor
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {

    //constructor
    name = 'Mantas';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person;
person.printMyName();
person.printGender();