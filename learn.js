// // function wait(call){
// //     console.log("lokesh");
// //     let a=100;
// //     call();

// // }
// // wait((a)=>console.log("khanal"+a));
// // //callback
// // const getRollno=()=>{

// //     setTimeout(()=>{
// // console.log("api getting roll no.");
// // let rollno=[1,2,3,4,5];
// // console.log(rollno);
// // setTimeout((rollno)=>{
// // const biodata ={
// //     name:'lokesh',
// //     age:'19',
// // }
// // console.log(`my name is ${biodata.name} and i am ${biodata.age} years old.`)
// //      setTimeout((name)=>{
// //          biodata.gender="male";
// // console.log(`${biodata.name} is ${biodata.gender} `)
// //      },2000,biodata.name);
// // },2000, rollno[1]);
// //     },2000);
// // }
// // getRollno();
// //promises
// const pobj1=new Promise((resolved,reject)=>{
// setTimeout(()=>{
//     let rollno=[1,2,3,4,5];

//     resolved(rollno);
// //reject("error while communicating.")
// },2000)
// });
// const getbiodata=(indexdata)=>{
//     return new Promise((resolved,reject)=>{
//         setTimeout((indexdata)=>{
// let biodata={
//     name:"1lokesh",
//     age:"21",
// }
// resolved(`my name is ${biodata.name} and i am ${biodata.age} years old.`);
//         },2000,indexdata)
//     })
// }
// // pobj1.then((rollno)=>{
// // console.log(rollno);
// // getbiodata(rollno[1]).then((kk)=>{
// // console.log(kk);
// // })
// // }).catch((error)=>{
// //     console.log(error);
// // })
// //promises as an 
// async function getdata()
// {
//      const rollnodata=await pobj1;
// console.log(rollnodata);
// const biodatas=await getbiodata(rollnodata[1]);
// console.log(biodatas);
//     }
// getdata();
fetch('https://api.covid19api.com/summary').then((apidata)=>{

console.log(apidata);
return apidata.json();
}).then((actualdata)=>{
   // console.log(actualdata);
const mydata=console.log(actualdata.Countries[118]);
document.getElementById('data').innerHTML=`covid-19 details as ${mydata.NewConfirmed}`;
}).catch((error)=>{
console.log(`error is ${error}`);
});