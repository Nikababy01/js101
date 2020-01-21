console.log('Objects');
const wordLength = (word) => {
return word.length;
};
console.log('num of letters', wordLength('cat')); //3
console.log('num of letters', wordLength('monkeybutt')); //10

// check your age.

const ageCheck = (age) => {
 if(age >= 21) {
     console.log('PARTY!!!!!!')
    } else {
        console.log('no drinks for you');
    }
};


ageCheck(12); // 'no drinks for you'
ageCheck(24); 


const expense ={
    dateCreated: '01/17/2020',
    location: 'Baja Burritor',
    cost: 12.57,
    isGood: true
};

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);

const employee ={
    firstName: 'Monique',
    lastName: 'Bass',
    badge: 384,
    payPeriod: 'Bi-Weekly',
    dateOfHire: '07/10/1999',
    eligibleRehire: true
    
};

//challenge
// if employee name starts with "M "create status of vip
//else peasant

const statusMaker= (employee) =>{
if(employee.firstName[0] === 'M'){
employee.status = 'vip';
} else {
    employee.status= 'peasant';
 }
return employee;
}

console.log(statusMaker(employee));

