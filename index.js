console.log ("JavaScript java es6");
//var will be declared first
console.log(a);

a = 7;
console.log(a);

//console.log(b);
let b = 6;
//console.log(b);
b = 7;
//console.log(b);

var a = 6;
console.log(a);

let c = "a sentence";
console.log(c);
if(true){
    let c = "a word";
    console.log(c);
}
console.log(c);


/*var x = "a sentence";
console.log(x);
if(true){
    var x = "a word";
    console.log(x);
}
console.log(x); */ // This is bad! Don't use it!!!

var y = 1;
increment();
//named function
function increment(){
    var y = 2;
    y++;
    console.log(y);
}

console.log(y);

//funtion variations

//named function
function namedFunction(a,b){
    //... instructions
    return;

}

//anonymous function
let anonymous = function(){
    console.log('this is anonymous');
}

anonymous();

//es6 arrow function is an anonymous function
//no parameters
const noParams = () =>{
    console.log("this is arrow no parameters");
}
noParams();


//with parameters
const withParams= (a,b) => {
    return a<b;
}

const resultWithParams = withParams(3,4);
console.log(resultWithParams);



//no curly braces
const noCurly = () => 1 + 1;
const resultCurly= noCurly();
console.log(resultCurly);

//no paranthesis when you have
const noParanthesis = a => a + 1;
const resultNoParanthesis = noParanthesis(5);
console.log(resultNoParanthesis);

const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false :true)
console.log(arrayEven);

//es5 style for the same problem

const arrayEvenEs5 = array.filter(function(element){
    return element % 2 ? false : true;
});
console.log(arrayEvenEs5);

const arrayUneven = array.filter(element => element % 2);
console.log(arrayUneven);


function ourFilter(originalArray , filterFunction){
    const filteredArray= [];
    for(const element of originalArray){
        if(filterFunction(element)){
            console.log("Element passed condition", element);
            filteredArray.push(element);
        }
    }
}

function isUneven(element){
    console.log(element % 2);
    return element % 2;
}
const resultOurEvenArray = ourFilter(array, isUneven);
console.log(resultOurEvenArray);