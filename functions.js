console.log("functions");
const nuggetizer = (animal) =>{
    const output= `processed ${animal}`;
   //const output ='processed' + animal;
 return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));

const dogBreed=(dog) => {
    return `my favorite dog breed is ${dog}`;
    };
    console.log(dogBreed('lab'));
    console.log(dogBreed('actually a cat'));

    const fortyTwo= (number) =>{
        return number + 42;
    };
console.log(fortyTwo(4));// 46
    
const oldAge = (year) =>{
        return 2099-year;
    };
    console.log(oldAge(1954));//145