// function userName(){
//     var fullName = prompt('What is your full name?').split(" ");
//     // var splitFullName = fullName.split(' ');


//     lastName(fullName);
    // console.log(splitFullName);
// }

// function lastName(fullName){
//     document.getElementById('firstname').innerHTML = fullName[0];
//     document.getElementById('lastname').innerHTML = fullName[1];
    // var name = document.getElementById('name');
    // for(var i=0; i<name.length; i++){;
    //     console.log(fullName);
    //     console.log(name[i]);
    //     // alert('Your Name is + name[i]');
    //     // console.log(i);
    // }
    // var name = document.getElementById('name');
// }




// userName();




// function getUserName(){
//     var userName = prompt('What is your full name?').split(" ");
     
//     outputUserName(userName);

// }

// function outputUserName(nameArray){
//     // document.getElementById('firstname').innerHTML = fullName[0];
//     // document.getElementById('lastname').innerHTML = fullName[nameArray.length -1];
//     for(var i = 0; i< nameArray.length; i++){
//         if(i == 0 || i == nameArray.length - 1){
//             // console.log("we got the zeroth element!", nameArray[1]);
//             document.getElementById('firsname').innerHTML += nameArray[i] + " ";
//         }
//     }
// }

// getUserName();

// arrays

// var cars = ["focus", "wrx", "mustang"];
// // push method
// console.log(cars[1]);  
// console.log(cars.length);

// cars.push("bmw");
// console.log(cars);
// // pop method
// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);
// // unshift method puts them in first 
// cars.unshift("chevy" , "honda");
// console.log(cars);
// // shift method
// cars.shift();
// console.log(cars);

// //splice  method
// cars.splice(1,1, "red", "green" );
// console.log(cars);

// cars.splice(1, 1,  "orange", "apple", "kiwi", "carrot");
// console.log(cars);

// cars.splice(2, 1);
// console.log(cars);

// //slice method non destructive 
// cars.slice(4);
// var removed = cars.slice(2,6);
// console.log(cars);
// console.log(removed);


// var movies = ["ff1", "2012", "nemo", "superman", "batman"];
// console.log(movies);

// movies.unshift("die hard");
// console.log(movies);

// movies.splice(3,4, "GodFather I", "GodFather II", "GodFather III");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// var newArray = movies.slice(1, 4);
// console.log(newArray);

// // newArray.pop();
// // console.log(newArray)

// console.log(movies[5]);

// movies.splice(0, 7, "jurassic park");
// console.log(movies);

// && is the and

// function getUserAge(){
//     var userage = parseInt(prompt('How old are you?'));
//         if(userage < 21){
//             console.log('not old enough');
//         }
//         else if(userage == 21){
//             console.log('good to go');
//         }
//         else{
//             console.log('plenty old');
//         }
// }

// getUserAge();

// //ternary operator


// function getAge(){
//     var age = prompt('What is my age again');
//     (age == "21") ? console.log('true') : console.log('false');
// }

// getAge();


// new assigment
// prompts alerts confirms

// simple version:
// if else else if

//complex version:
// loops
//arrays

// write a function and prompt the user telling a 

// function initial(){
//     var first = parseInt(prompt('Welcome to continue you must be 21 or older, how old are you? '));

//     if( first < 21){
//         console.log('not old enough bruhh');
//     }
//     else if( first => 21){
//         console.log('come one through')
//     }
//     else{
//         alert('you are entering a kids site.' );
//     }

//     console.log(first);
//     quest(first);
// } 
// function quest(){
//     var first = parseInt(prompt('Are you sure? '));
    
// }

// initial();

var startStory = document.getElementById('opt1');

startStory.addEventListener("click", story);

function story(){
    var person = prompt('what will you choose left or right or up?');
    // var txt = alert('no go my friend')
    if('left'){
        alert('welcome to the left side ');
    }
    else if('right'){
        alert('welcome to the right side');
    } 
    else if(up){
        
    }
   
    

    console.log(person);
}

// story();