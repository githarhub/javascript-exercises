const findTheOldest = function (people) {



    return people.reduce((oldest, person) => {

        if (!person.hasOwnProperty("yearOfDeath")) {

            person.yearOfDeath = 2024;
        }

        if (oldest === 0) {
            return person;
        }
        
        oldAge = oldest.yearOfDeath - oldest.yearOfBirth;
        personAge = person.yearOfDeath - person.yearOfBirth;

        return (oldAge > personAge) ? oldest : person;
    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
