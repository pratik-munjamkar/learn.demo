/*
// XML HTTP REQUEST (XHR)(via API);
//STEP 01: Create a XHR object.
var REQUEST = new XMLHttpRequest();
//step 02: initiate a connection (starting a connection)
//true is used if your api does not want to affect the remaining execution of
REQUEST.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//step 03; Sending a connection
REQUEST.send();
//step 04: once the data has been recived sucessfully from server we need to
//some conversion is needed here
REQUEST.onload=function(){
    var data = JSON.parse(REQUEST.response);
   console.log(data);
 var result = data.filter((element)=>{
     for (let i in element.currencies){
         if (element.currencies[i].code==="USD"){
             return true
         }
     }
 })
 }
 console.log(result);
*/
   /* 
  // Print the total population of countries using reduce function
  var result = data.reduce((accumulator, element)=>accumulator + element.population, 0)
  console.log(result);*/

   /*
//Print the following details name, capital, flag using forEach function.
   var result = data.forEach(element => {
       console.log(element.name, element.capital, element.flag)
   });*/
/*
  var result = data.filter((element)=>element.population<200000)
  console.log(result);
*/
   /*
 //Get all the countries from Asia continent /region using Filter function
var result = data.filter((element)=>element.region=="Asia")
console.log(result);*/

  
  

/*
// MRF Method.
var arr = [1, 2, 3, 4, 5];
var result = arr.map((element)=>element*2);// In case if we have multiple RETURN VALUE, We have to use {} for this arrow function.
console.log(result);*/
/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 result = arr.filter((element)=>element%2!==0);
console.log(result);*/
// Print the detail of the students who scored the marks above 60.
// Print the name of the student who scored marks above 60. 
/*
var student = [{
        name : "alex",
        marks : 60
    },
    {
        name : "bob",
        marks : 70
    },
    {
        name : "alice",
        marks : 80
    },
    {
        name : "doe",
        marks : 90
    }];
    var studentsRes = student.filter((Element)=>Element.marks>60).map((element1)=>element1.name)
    console.log(studentsRes);*/

    /*
    //REDUCE FUNCTION
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arrSum = arr.reduce((accumulator, element)=>{
        return accumulator + element
    });
    console.log(arrSum);*/
/*
    const items = [
        {name : 'Bike', Price : 100},
        {name : 'Tv', Price : 200},
        {name : 'Album', Price : 10},
        {name : 'Book', Price : 5},
        {name : 'Phone', Price : 500},
        {name : 'Computer', Price : 1000},
        {name : 'Keyboard', Price : 25}];
  *//*
//ForEach Method (It takes key as a input & print only value as output)
//  For each methods takes dont have a return option in function
var result = items.forEach((element)=>console.log(element.name))
console.log(result);
*/

      /*
    // Map Method , If we execute boolean operation here It dosn't work shows only true or false value.
    //If we have N number of keys in a same name , Then it shows the all value of keys in that same name. 
    var result = items.map((element)=>{
        return element.Price
    })
    console.log(result);*/
    /*
    // Filter Method, (It aproaches a boolean operation.)
    // By giving the value of key, We can access all element in that object.
    var result = items.filter((detailYouWant)=>detailYouWant.name=="Bike")
console.log(result)*/
/*
// Find method
// It takes a key & value as a input and gives a complete detail of an element
var result = items.find((detailYouWant)=>detailYouWant.name=="Keyboard")
console.log(result);  
 */


/*
//Some method
var result = items.some((detailYouWant)=>detailYouWant.Price>=5)
console.log(result);*/
/*
//Every
var every = items.every((element)=>element.Price<=1000)
console.log(every);*/
//Reduce
//It also returns a boolean value.
/*
var result = items.reduce((accumulator, element)=>element.Price)
console.log(result);*/

//TYPES OF LOOPS
//fOR LOOP, WHILE LOOP, DO WHILE
/*
for(i=1;i<=5;i++){
    console.log(i);
} 
// While Loop.
//let i=0;
while(i<=10){
    if(7>1){
        console.log("While");
        i++
    }
}
//Do while
i=0;
do{if(true){
    console.log("Strelt")
    i++
}}while(i>5)
//For in at object
var obj ={
    name:'Anbu',
    age : 24,
    sex : 'Male'
};
for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
};
// For in at Array
let colors = ["red", "blue", "green"]
for(let key in colors){
     console.log(colors[key]);
}
// FOR OF ARRAY
 for(let colour of colors ){
    console.log(`colours : ${colour}`); 
 }
*/
 /*
var arr = [1, 2, 3, 4];
var arr1 = [3, 4, 1, 2];
for(i=1; i<arr.length; i++){
    
     var swap = arr.shift();
   arr.push(swap);
if(arr[i] === arr1[i]){
  break;
}
}
console.log(i)*/
/*
var len = userInput[0]
var arr = [4, 3, 2, 5];
   var arr1 = [3, 2, 4, 5];
   
   let s =0;
   for(let i=0; i<arr.length; i++){
       let sum = 0;
       
       s = s+1;
       let t = arr.shift();
       arr.push(t);
       
       for(let j = 0; j<arr1.length;j++){
           if(arr[j] === arr1[j]){
               sum = sum + 1
           }else{break;}
       }
       if(sum === arr1.length){
           console.log(s);
           break;
       }else{sum=0}
   }
   let  [S, P, T] = ["proFile", 1, 2] // [S, P, T] -- // expected output is profile
// create the function to change the case of char at given creteria 
const caseChanger = (S, P, T) => {
let ans = []
// change to Lowercase
if(T === 2 ){
    for(let i =1; i <= S.length ; i++){
        if(i % P == 0){
   ans.push(S[i-1].toLowerCase());
        }else{
            ans.push(S[i-1])
        }
    }
}else if (T === 1){  //changing to upper case
    for(let i =1; i <= S.length ; i++){
        if(i % P == 0){
   ans.push(S[i-1].toUpperCase());
        }else{
            ans.push(S[i-1])
        }
    }
   
} else ans.push("T can be either 1 or 2") // for invalid iput
return ans.join("") // returning the answer
}
console.log(`case Changing : input = [${S},${P},${T}] - Ouput: ${caseChanger(S,P,T)}`);*/

var array2 ; [3, 4, 8, 10, 6];
var result = array2.reduce((accumulator, Element)=>{if(Element<accumulator){return Element}else{return accumulator}});
console.log(result);