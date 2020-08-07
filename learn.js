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
// fetch('https://api.covid19api.com/summary').then((apidata)=>{

// console.log(apidata);
// return apidata.json();
// }).then((actualdata)=>{
//    // console.log(actualdata);
// const datanp=(actualdata.Countries[118]);
// //const mydata=datanp.map();
// document.getElementById('data').innerHTML=`covid-19 details as NewConfirmed: ${datanp.NewConfirmed}
// newdeath: ${datanp.NewDeaths}`;
// }).catch((error)=>{
// console.log(`error is ${error}`);
// });
//  async function getdata()
// {
//  const jsondata= await  fetch('https://api.covid19api.com/summary');
// console.log(jsondata);
// const jsdata=await jsondata.json();
// console.log(jsdata.Countries[118]);
// }
// getdata();


//tracker.
var myform=document.getElementById("myform")
myform.addEventListener('submit',(e)=>{
   e.preventDefault();

   var countrye=document.getElementById("country").value
   console.log(countrye);
   var cont=countrye.toLowerCase();

   fetch('https://api.covid19api.com/summary').then((apidata)=>{
      return apidata.json();

   }
      //console.log(ok);})
      ).then((jsdata)=>{
         console.log(jsdata);
         const index=jsdata.Countries.length-1;console.log(index);
       // console.log(actualinput.toString());
        for(var i=index;i>=0;i--){
         const lks=jsdata.Countries[index];//console.log(jsdata.Countries[index].NewConfirmed);
        const actualinput=lks.Country.toLowerCase();//console.log(actualinput.toString());
      //  console.log(actualinput.toString());
      //  console.log(cont.toString());
       
       
        if (actualinput.toString()==cont.toString())
        {
         const confirmed=document.getElementById('confirmed');
         const recovered=document.getElementById('recovered');
         const deaths=document.getElementById('deaths');
         confirmed.append(jsdata.Countries[index].NewConfirmed);
         recovered.append(jsdata.Countries[index].NewRecovered);
         deaths.append(lksjsdata.Countries[index].NewDeaths);
        }
        }
        


      //   
      //    console.log(jsdata.Countries[index]);
   // var x = jsdata.map(country);
   // console.log(x);

  





         // const length=ok.length;console.log(length);
         // const index=length-1;
         // console.log(index)
         
      })})
     


  

// const getdata=async ()=>{
//   const jsondata=await  fetch('https://api.covid19api.com/summary/'+country);
//   const jsdata= await jsondata.json();console.log(jsdata)
  
// }
// getdata();
// })

   // .then(()=>{
   //    var length=data.length;
   //    var index=length-1;
   //    var confirmed=document.getElementById('confirmed');
   //    var recovered=document.getElementById('recovered');
   //    var deaths=document.getElementById('deaths');
   //    confirmed.append(res[index].confirmed)
 
   // })})


// async function getdata()
// {
//  const jsondata= await  fetch('https://api.covid19api.com/summary');
// //console.log(jsondata);
// const jsdata=await jsondata.json();
// //console.log(jsdata.Countries[118]);
// //document.write(jsdata.Countries[118].country)
// //console.log(jsdata.Countries);
// const sjslength=jsdata.Countries.length;
// console.log(sjslength);
// const index=sjslength-1;
// console.log(index);

// console.log(document.getElementById("country"));


// //document.getElementById("total confirmed cases:"+jsdata.)
// }
// getdata()



