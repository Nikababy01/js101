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
    };


ageCheck(12); // 'no drinks for you'
ageCheck(24); // 'PARTY!!!!!!