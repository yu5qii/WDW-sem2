//variabe introduction
// var name = "Monika";
// var name = "singh";
// name = anamika;
// console.log(name);


// alert("JS is running!");
        // console.log("Hello students");


        //VARIABLES: var, let or const

        //var: global scope, can be used to declare same variable multiple times with diff. memory locations
        // var a = 10;     //declaration
        // a = "Monika";   //modification


        //let: local scope, does not allow multiple variables to be declared with the same name, but modification can be done
        // let name = "Ridah";
        // let age = "18";
        // let course = "B.Tech";
        // let branch = "CSE";
        // let rollno = "2503201000911";

        // console.log("Name: " + name);
        // console.log("Age: " + age);
        // console.log("Course: " + course);
        // console.log("Branch: " + branch);
        // console.log("Roll numeber: " + rollno);

        //const: permanently stores data, local scope, alteration is not possible after declaration
        // const name = "Neha";        //gives an error if left uninitialized

        //CONDITIONAL STATEMENTS
        // let marks = 85;

        // if (marks>49) {
        //     console.log("Pass")
        // }
        // else {
        //     console.log("Fail")
        // }


        //LOOPS: for, while, do-while
        // for (let i=1; i<6; i+=1) {
        //     console.log(i);
        // }

        // let j = 1
        // while(j < 6) {
        //     console.log(j);
        //     j+=1;
        // }



        //DATATYPES: primitive and non-primitive
        //string, symbol, boolean, bigint, number, null, undefined

        // console.log(typeof a)       //to find the type of a variable

        //FUNCTIONS

        //normal declaration
        // function addition() {

        // }


        
        //arrow function
        // const add = (a,b) => a+b;
        // console.log(add(5,3));



        //methods for EXP - 6

        //MAP: creates new array by transfering each element
        // let num = [1,2,3,4];
        // let sq = num.map(num => num*num);
        // console.log(sq);

        //FILTER: creates a new array with elements that satisfy a consition
        // let numbers = [1,2,3,4];
        // let result = numbers.filter(num => num>15);
        // console.log(result);

        //REDUCE: reduces array to a single element
        // let numbers = [1,2,3,4];
        // let sum = numbers.reduce((total,num)=> total + num, 0);
        // console.log(sum);


        


// let student = {name: "deepti", age: 25};
// let jsonData = JSON.stringify(student);

// console.log(jsonData);



// let jsonString = {"name" : "deepti" , "age" : 25};
// let obj = JSON.parse(jsonString);



// let student = { 
//     name: "rahul",
//     age : 21,
//     course : "CSE",
// };
// for (let key in student) {
//     console.log(key + " : " + student[key]);
// }


//for-of
// let numbers = [10, 20, 30, 40];
// for (let value of numbers) {
//     console.log(value);
// }


//arrow function
// const add = (a,b) => a+b;
// console.log(add(5,3));


//promise methods always execute --> following code is wrong
// let promise = new promise(function(resolve,reject) {
//     let success = true;
//     if (success)
//         resolve("task completed");
//     else
//         reject("task failed");
// });

// promise.then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });



//try
// try {
//     let x = y+10;
// } catch(error) {
//     console.log("error occured");
// }



//async / await
// function getdata() {
//     return new promise (resolve => {
//         setTimeout(() => {
//             resolve("data received");
//         } ,2000);
//     });
// }

// async function showdata() {
//     let result = await getdata();
//     console.log(result);
// }

// showdata();



//local storage
// localStorage.setItem("username", "rahul");

//retrieve data
// let name = localStorage.getItem("username");
// console.log(name);



//fetch api
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));