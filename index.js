// var a = 3;
// var b = 5;
// var c = true;
// var d = "hello";

// console.log(typeof a);
// console.log(typeof c);
// // -----------------------------------------------
// function add(a,b) {
//   return a + b;
// }
// console.log(add(5, 9));

// function sub(a, b,c) {
//   return a - b-c;
// }
// console.log(sub(20,10,5));
// // --------------------------------------------------------
// function add(a) {
//   if (a < 0) {
//     console.log("a is -ve");
//   } else {
//     console.log("a is +ve");
//   }
//   return a;
// }

// console.log(add(3));
// // -------------------------------------------------------------------
// function add(a) {
//   if (a < 0) {
//     console.log("a is -ve");
//   } else if (a == 0) {
//     console.log("a is equal");
//   } else {
//     console.log("a is +ve");
//   }
//   return a;
// }

// console.log(add(0));
// // -----------------------------------------------------------------------
// var a=10;
// var b=20;

// function add(a, b) {
//   var c = a + b;
//   console.log(c);
//   return c;
// }
// console.log(add(10, 20));
// // ------------------------------------------------------------------------
// function fn(a, b) {
//   if (a < b) {
//     console.log("a is greater");
//     console.log("a is smaller");
//   } else {
//     console.log("b is greater");
//     console.log("b is smaller");
//   }
//   return a;
//   return b;
// }
// console.log(fn(20, 30));
// console.log(fn(30, 40));
// // ----------------------------------------------------------------------------
// var a=10;
// if(a>=11){
// document.write("a is true");
// }else{
//   document.write("a is false");
// }
// // -------------------------------------------------------------------
// var myage =21;
// if(myage>30){
//   document.write("u r over 30!");

// }else if(myage> 20){
//   document.write("u r over 20!");
// }else if(myage>10){
//   document.write("u r over10!");
// } else{
//   document.write("u r not over 30!");
// }
// // --------------------------------------------------------------------
// var age = 10;
// while (age<=10){
//   console.log("ur age is less then 10");
//   age++;
// }
// document.write("u r now over 10");
// // ----------=-----------------------------------------------------
// for(age=1;age<=10;age++){
//   console.log("ur age is less then 10",age);

//  }
//  document.write("u r now over 10");
// // -----------------------------------------------------
// for(i=1;i<100;i++){
//   console.log(i)
// }
// // ----------------------------------------------------
// for(i=1;i<10;i++){
//   if(i==5||i==3){
//     continue
//   } 
//   console.log(i)
   
    
  
//     if(i==7){
//     break;
//     }
// }
// // ---------------------------------------------------------
// immmmmmmmpppppppppppppp
// var links= document.getElementsByTagName("a");
// for(i=0;i<links.length;i++){
//   links[i].className="link-"+i;
// }
// // --------------------------------------------------------------------------
// function getAverage(a,b,c){
//   var average=(a+b-c)/3;
//   console.log(average);
// }
// getAverage(5,9,7)
// // -------------------------------------------------------
// function getAverage(a,b,c){
//   var average=(a+b-c)/3;//local variable
//   // console.log(average);
//   return average;
// }
// var myresult = getAverage(30,30,30);//global varible
// console.log("the average is" + myresult)
// // ---------------------------------------------------------------------------

// var a=0
// switch(a){
//     case 0:
//         console.log("a is +ive");
//         break;

//     case 1:
//         console.log("s is -ve");
//         break;
        
//     default:
//         confirm.log("a is null") ;
//         break;

// }
// // --------------------------------------------------------------

// var i = 0;
//   do {
//     i == "The number is " + i;
//     i++;
//     console.log(i);
//   }
//   while (i < 10);
// // ---------------------------------------------------------------------
// var i=0;
// var a;
// do{
//   a= i;
//   i++;
//   console.log(a)
// }while(i<5);
// // -----------------------------------------------------------
function changename(){
    alert("changename");
    var domElement = document.getElementById("name");
    domElement.innerHTML="Akhib"
    console.log(domElement);
    
}
// ------------------------------------------------------------------
// for(i=1;i<100;i++){
//   if(i==50||i==30||i==10){
//     continue;
//   } 
//   console.log(i)
   
    
  
//     if(i==70){
//     break;
//     }
// }

