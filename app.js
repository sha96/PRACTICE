function b(){
    console.log('calle b');
}
b();
console.log(a);
var a ="hello world";
console.log(a);a = undefined;
if(a==undefined){
    console.log('a is undefined');
}
else {
    console.log('a is defined');
}

function c(){
    var f = "hi";
}
function d(){
     c();
     
}
d();
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date()< ms){}
        console.log('finished function');
    }
function clickHandler(){
    console.log('click event!');
}
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
var pm = 2, cm= 3, dm=4;
pm= cm=dm;
console.log(pm);
console.log(cm);
console.log(dm);
//because of the associativity the result is same 4
//= operator associativity is right to left
var wq= (3+4)*5;
console.log(wq);
var wq= 'hello' + 2;
console.log(wq);
console.log(1<2<3);
console.log(3<2<1);
//traverses from left to right 3<2 is false which is 0 so 0<1 is true
//no coarsing with strict equality
var yu= 0;
var un= false;
if(yu==un){
    console.log("they are equal");
}
else{
    console.log("they aren't equal");
}
var tq;
tq=0;
if(tq || tq===0){
    //or op has lower precedence than strict equality
    console.log("something is there");
}
function greet(name){
    name = name || 'shan';
    // coarses the t or f in a neat manner
    console.log(name);
    console.log('Hello ' + name);
}
greet('sha');
greet();
console.log(libraryName);
//they just stack the code upon each other
var person = new Object();

person["firstname"] = "Sha";
person ["lastname"] = "kovela";

var firstNameProperty = "lastname";
console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
//adding an object into another object
person.address.street = "apple school";
person.address.city = "hyd";
person.address.state= "TS";
console.log(person.address);
console.log(person.address.state);
var personn = {};
//{}- Object literal similar to new Object()
personn.addr = "Apple schl";
console.log(personn.addr);
//Instead we can write or add the properties within curly braces
var persona = {
                 fname: 'sha',
                 lname: 'kovelamudi',
                 //creating another object inside an object
                 addrs: {
                     str: 'ram nagar',
                     pin: '500083',
                     state: 'ap'
                 }
              };
         //     console.log(persona.name);
              console.log(persona.addrs);

 function greets(grt){
console.log('Hi ' + grt.lname)

//    if(typeof(grt) == "object") 
    {
  //      console.log(grt.name);
    }
   //      else
         {
       //     console.log(grt);
         }
      //  console.log(typeof(grt));
   
   
 }
 greets(persona);
// greets("Hi it's a string");
 

greets({
    fname: 'shanmukhi',
    lname: 'Kovelamudi'
});
 persona.addrs2 = {
     street: 'apl schl',
     pin: '34400'
 }

 