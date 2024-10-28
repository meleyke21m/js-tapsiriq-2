//console.log('hello');
// alert("sehifeye xos gelmisiniz")
// prompt("adinizi daxil edin")
// confirm("yasinizi daxil edin")
// document.write("hgfbnjuy")
// document.writeln("nhgfr")

// let user =prompt(" reqem daxil edin")

// user > 0 ? console.log("musbetdir") : console.log("menfidir");
  
// let number = 0;
// while(number <100){
//     console.log(number);
//     if(number == 50){
//        break

//     }
//     number++
// }

// let username = 10
// switch(username){
//     case 10: console.log("cavab 10 dur")
//     break;
//     case 7: console.log("cavab 7dir")
// }

// let number =5
// if(number % 2===0){
//     console.log(" cutdur")
// }else{
//     console.log("  tekdir")
// }


// let number1 =prompt("reqem daxil edin")

// if(number1>0){
//     console.log("musbetdir")
// }else{
//     console.log("menfidir")
// }

// var number3 = 4;
// let number2 = 4;
// console.log(number3 == number2)

// var number5=10
// let number6="20"
// console.log(number5 === number6)

// let name1= "meli"
// let name2= "meli"

// if(name1 && name2){
//     console.log("adlar bir-birine beraberdir ")
// }else{
//     console.log(" adlar bir-birine beraber deyil")
// }

// let name3= 10<5
// let name4= 5>10

// if(name3 || name4){
//     console.log("adlar bir-birine beraberdir ")
// }else{
//     console.log(" adlar bir-birine beraber deyil !")
// }


// let username2= true
// console.log(!username);

// let name8="meli"
// let name9="meleyke"


// if(name8 != name9){
//     console.log("adlar bir-birine beraber deyilll !")
// }

// let number4= 9
// if(number4 >5 && number4 <10 ){

//     console.log(" true ");

// }else{
//     console.log("false");
// }
    


// let number8 = prompt (" reqem daxil edin")

// if(number8 > 0){

//     console.log("musbet");

// }else if(number8==0){

//     console.log("cavab 0");
// }else{

//     console.log("menfidir");
// }

// let produckt= null;
// let result= produckt ?? "x mehsul"

// console.log(result);

// let number=0
// while(number>5){
//     console.log("hello");
//     number++
// }

// do{
//     console.log("hello");
//     number++
// }while(number>5)

// for ( let star=0; star < 5; star++) {
//     console.log("star");
// }



// TASK 2

//sual 1
let height=5;

for( let star=1; star<= height; star++) {

    console.log('*'. repeat(star));
}


//sual 4
for(let number=0; number<=100; number++){
   if(number % 5===0){
    console.log(number)
   }
}
//sual 3
let name1=prompt(" adinizi  daxil edin")

let surname=prompt("soyadinzi daxil edin")

let year = prompt("ilinizi daxil edin ")

console.log("ali " + name1 + 'aliyev'+surname + 'siz 1999-cu ilde anadan olmusuz'+ year );

//sual 5
let password= prompt("kodu daxil edin")
let username=prompt("adinizi daxil edin")

if( password && username){
    console.log("salam")
}