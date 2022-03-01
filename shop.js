// let num= 4.6
// num= Math.round(num);
// console.log(num);

// let rand= Math.random();
// console.log(rand);

// let string= 'hello sajad';
// let name = string.substring(6);
// console.log(name);
/////////////////////////////////////////////
// let fullname= 'my familly is alboo'
// let nfamily= fullname.substring(14);
// let main= `sajad ${nfamily}`
// console.log(main);
//////////////////////////////////////////////////////

// let names= [['sajad', 'reza'],['alboo','amini','delavari']]
// let name1= names[0];
// let name2= names[1];
// let nameAll= [...name1 ,...name2];
// console.log(nameAll);
// let sort= nameAll.sort();
// console.log(sort);

// let index= `hi ${sort[4]} how are you`
// console.log(index);

// let btns= document.querySelectorAll('btn');
// document.querySelector('num');

// btns.forEach(element => {
//     element.addEventListener('click',function () {
//         let tedad= document.querySelector('num').innerText;
//         tedad= tedad++
//     })
// });

// const date = {
//     name:'sajad',
//     lastname:'alboo',
//     age:27,
//     address:{
//         city:'ahas',
//         ally:'sasx',
//        pelak:{
//         sen:37,
//         matn:'sskd',
//        }
//     }
// };
// let {name, lastname, address:{city}}=date
// console.log(city);

// let num= 5;
// let string= string(num);
//  console.log(string);

//let text= 'sajad'
//let number= number(tetx);
//console.log(number);

// const date= [
//     {
//         postid: 1,
//         name: 'sajd',
//         email:'sajadalboo@gmail.com',

//     },
//     {
//         postid: 1,
//         name: 'ali',
//         email:'alilboo@gmail.com',

//     },
//     {
//         postid: 1,
//         name: 'reza',
//         email:'rezaalboo@gmail.com',

//     },
// ];

// let [user0, user1, user2]= date;
// console.log(date);
// let{name, email}= user1;
// console.log(name);
// let nann= `hi ${name}`; console.log(nann);

/////////////////////////////

// let number= 6
// number>=5 ? console.log("nymber is gearter than 5") : console.log('smaller than ');

// let text= 'sajad';
// text == 'reza' ? console.log('bale') : console.log('nakheir');

///////////////////////////////////////-----

// let userchoise= prompt('rock, paper, scerss');

// if (userchoise) {
//     console.log(`your choise was : ${userchoise}`);
// } else {
//     console.log('you should fil in the gap');
// };

// let computer= ['rock', 'paper', 'scerss'];
// let random= Math.floor(Math.random()*3)
// let computerchoise= `your choise : ${computer[random]}`;
// console.log(computerchoise);

// if (userchoise === computerchoise) {
//     console.log('something is wrong');
// } else if(userchoise === 'paper'){
//     console.log(`you are Win!`)
//     if(computerchoise === 'rock') {
//         console.log(`you lose !`);
//     }
// };
////////////////////////////////

// document.querySelector("#number-cart");
// let bottoms = document.querySelectorAll(".add-cart");
// bottoms.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     let quantity = document.querySelector("#number-cart");
//     ++quantity.innerText; // quantity.innerText = quantity.innerText + 1;

//     let product = event.target.parentElement;

//     let imgProduct = product.querySelector("img").src;
//     let tProduct = product.querySelector(".t-product").innerText;
//     let priProduct = product.querySelector(".p-product").innerText;

//     console.log(imgProduct);
//     console.log(tProduct);
//     console.log(priProduct);

//     let kadr = `
//           <li class="li">
//               <img src="${imgProduct}">

//               <div class="prperties-cart">
//                 <span class="item-title">${tProduct}</span>
//                 <span class="item-price">${priProduct}</span>
//                 <span type="quantity-item">1</span>
//               </div>

//               <span class="delete-item">x</span>
//           </li>

//         `;
//     document.querySelector("#items").innerHTML += kadr;
//   });
// });

let quantity= document.querySelector('#number-cart');
let bottoms= document.querySelectorAll('.add-cart');
bottoms.forEach(element => {
  element.addEventListener('click',function (event) {
    ++quantity.innerText;
    let product= event.target.parentElement; 

    let imgPro= product.querySelector('img').src;
    let titlePro= product.querySelector('.t-product').innerText;
    let pricePro= product.querySelector('.p-product').innerText;

    let text= `
        <li class="li">
          <img src="${imgPro}" />
          <div class="prperties-cart">
            <span class="item-title"> ${titlePro}</span>
            <span class="item-price">${pricePro}</span>
            <span type="quantity-item">1</span>
          </div>
          <span class="delete-item">x</span>
        </li>
    
    `
    document.querySelector('#items').innerHTML += text;
    let delets= document.querySelectorAll('.delete-item');
    delets.forEach(element => {
      element.addEventListener('click',function (event) {
        event.target.parentElement.remove()
      })
    });

  });
}); 
