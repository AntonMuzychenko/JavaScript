
const anton = {
    name : 'Anton',
    surname : 'Muzichenkoi',
    age : 30,
    car : 'not BMW' ,
    friends : 3,
    child : 2,
    id : 'id-1',
};

const serj = {
    name : 'Serj',
    surname : 'Nikolun',
    age : 30,
    car : 'BMW' ,
    friends : 1,
    child : 1,
    id : 'id-2',
};

const andry = {
    name : 'Andry',
    surname : 'Nikolyn',
    age : 25,
    car : 'RR' ,
    friends : 0,
    child : 0,
    id : 'id-3',
};

const user = [];

serj.surname = 'Nikulin';
anton.surname = 'Muzychenko';

// console.log(serj);
// console.log(anton);
// console.log(andry);

user.push(andry, anton, serj);

console.log(user);

for ( let key of user) {
    if( key.name === 'Serj'){
        console.log(key)
    }
}
