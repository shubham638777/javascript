// function sayHello(){
//     alert("Hello World")}
// document.write('<h1>This is my first JavaScript Page</h1>');
// var pi=3.14;
// var person="are you GODF";
// var answer='Yes I am!';
// document.write(pi + "<br>")
// document.write(person + "<br>")
// document.write(answer + "<br>")

// function myFunction(){
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Krishan Kant Jha"
// console.log(num);
// console.log(typeof(num));
// num=null
// console.log(num);
// console.log(typeof(num));
// var num=undefined;
// console.log(num);
// console.log(typeof(num));

// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     id :5566,
//     getinfo:function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// document.getElementById("demo").innerHTML=person.getinfo();

// var person= {
//     name:'Ramesh',
//     age:30,
//     isMarried:true,
//     address:{
//         street:'vinay nagar,
//         flatNO:201
//     }
// };
// console.log(person);

// var person2=new Object()
// person2.name='krishankant';
// person2.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNO']=33;
// console.log(person2);


// var person={
//     name:'Jitendra Chauhan',
//         age:30,
//         isMarried:true,
//         child:['cheeku'],
//         getInfo:function(){
//         },
//         address : {
//             street:'vinay nagar',
//             flatNO:201
//         }
//     };
//     console.log(person.name);
//     document.write(person.name);
//     document.write("<br>")

// function myFunction(){
//     var carName = "Volvo"
//     document.getElementBId("demo1").innerHTML=typeof carName +"" +carName;
// }
// myFunction();
// document.getElementBId("demo2").innerHTML=typeof carName




// var locales ={
//     europe:function() {
//         var myFriend="Monique";
//         var france=function(){
//             var paris=function(){
//             console.log(myFriend);

//         };
//         paris();
//     };

//     france();
// }
// };
// locales.europe();



// function show(){
//     var a="a is local outer variable";
//     document.write(a + "<br>");
//     function disk(){
//         var b="b is local inner variable";
//         document.write(b +"<br>");

//     }
//     disk();
// }
// show();




// var myVar="gloabal";
// function check(){
//     var myVar = "local";
//     document.write(myVar);
// }
// check()



// var name ='john';
// function first() {
//     var a = 'hello!';
//     second();
//     var x =a+ name;
//      console.log(x)
// }
// function second() {
//     var a = 'hi!';
//     third();
//     var z=b+ name;
//     console.log(z)
// }
// function third() {
//    var c = 'hey!';
//    var z = c + name;
//    console.log(z)6
// first(); 



var age = 20;
if(age>18) {
    document.write("<b> you are eligible to cast the vote.</b>");

}else{
    document.write("<b> ")
}