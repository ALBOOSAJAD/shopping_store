// // let num= 4.6
// // num= Math.round(num);
// // console.log(num);

// // let rand= Math.random();
// // console.log(rand);

// // let string= 'hello sajad';
// // let name = string.substring(6);
// // console.log(name);
// /////////////////////////////////////////////
// // let fullname= 'my familly is alboo'
// // let nfamily= fullname.substring(14);
// // let main= `sajad ${nfamily}`
// // console.log(main);
// //////////////////////////////////////////////////////

// // let names= [['sajad', 'reza'],['alboo','amini','delavari']]
// // let name1= names[0];
// // let name2= names[1];
// // let nameAll= [...name1 ,...name2];
// // console.log(nameAll);
// // let sort= nameAll.sort();
// // console.log(sort);

// // let index= `hi ${sort[4]} how are you`
// // console.log(index);

// // let btns= document.querySelectorAll('btn');
// // document.querySelector('num');

// // btns.forEach(element => {
// //     element.addEventListener('click',function () {
// //         let tedad= document.querySelector('num').innerText;
// //         tedad= tedad++
// //     })
// // });

// // const date = {
// //     name:'sajad',
// //     lastname:'alboo',
// //     age:27,
// //     address:{
// //         city:'ahas',
// //         ally:'sasx',
// //        pelak:{
// //         sen:37,
// //         matn:'sskd',
// //        }
// //     }
// // };
// // let {name, lastname, address:{city}}=date
// // console.log(city);

// // let num= 5;
// // let string= string(num);
// //  console.log(string);

// //let text= 'sajad'
// //let number= number(tetx);
// //console.log(number);

// // const date= [
// //     {
// //         postid: 1,
// //         name: 'sajd',
// //         email:'sajadalboo@gmail.com',

// //     },
// //     {
// //         postid: 1,
// //         name: 'ali',
// //         email:'alilboo@gmail.com',

// //     },
// //     {
// //         postid: 1,
// //         name: 'reza',
// //         email:'rezaalboo@gmail.com',

// //     },
// // ];

// // let [user0, user1, user2]= date;
// // console.log(date);
// // let{name, email}= user1;
// // console.log(name);
// // let nann= `hi ${name}`; console.log(nann);

// /////////////////////////////

// // let number= 6
// // number>=5 ? console.log("nymber is gearter than 5") : console.log('smaller than ');

// // let text= 'sajad';
// // text == 'reza' ? console.log('bale') : console.log('nakheir');

// ///////////////////////////////////////-----

// // let userchoise= prompt('rock, paper, scerss');

// // if (userchoise) {
// //     console.log(`your choise was : ${userchoise}`);
// // } else {
// //     console.log('you should fil in the gap');
// // };

// // let computer= ['rock', 'paper', 'scerss'];
// // let random= Math.floor(Math.random()*3)
// // let computerchoise= `your choise : ${computer[random]}`;
// // console.log(computerchoise);

// // if (userchoise === computerchoise) {
// //     console.log('something is wrong');
// // } else if(userchoise === 'paper'){
// //     console.log(`you are Win!`)
// //     if(computerchoise === 'rock') {
// //         console.log(`you lose !`);
// //     }
// // };
// ////////////////////////////////


// let quality = document.querySelector("#number-cart");
// let buttons = document.querySelectorAll(".add-cart");
// buttons.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     ++quality.innerText;

//     let product = event.target.parentElement;
//     let idProduct = product.id;

//     let cart = document.getElementById(`item${idProduct}`);
//     if (!cart) {
//       let imagProduct = product.querySelector("img").src;
//       let titleProduct = product.querySelector(".t-product").innerText;
//       let priceProduct = product.querySelector(".p-product").innerText;
//       let text = `
//         <li id="item${idProduct}">
//            <img src="${imagProduct}" />
//           <div class="prperties-cart">
//             <span class="item-title">${titleProduct}</span>
//             <span class="item-price">${priceProduct}</span>
//             <span class="quantity-item">1</span>
//           </div>
//             <span class="delete-item">x</span>
//         </li>
//     `;
//       document.querySelector("#items").innerHTML += text;
//     } else {
//       ++cart.querySelector(".quantity-item").innerText;
//     }

//     let delet = document.querySelectorAll(".delete-item");
//     delet.forEach((element) => {
//       element.addEventListener("click", function (event) {
//         event.target.parentElement.remove();
//       });
//     });
//   });
// });

// let item = document.querySelector("#number-cart");
// let bottums = document.querySelectorAll(".add-cart");
// bottums.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     ++item.innerText;

//     let product = event.target.parentElement;
//     let idProduct = product.id;
    
//     let cart = document.getElementById(`item${idProduct}`);
//     if (!cart) {
//       let imgProduct = product.querySelector("img").src;
//       let titleProduct = product.querySelector(".t-product").innerText;
//       let priceProduct = product.querySelector(".p-product").innerText;
//       let text = `
//       <li id="item${idProduct}">
//         <img src="${imgProduct}" />
//         <div class="prperties-cart">
//           <span class="item-title">${titleProduct} </span>
//           <span class="item-price">${priceProduct}</span>
//           <span type="quantity-item">1</span>
//         </div>
//         <span class="delete-item">x</span>
//       </li>
// `;
//       document.querySelector("#items").innerHTML += text;
//     } else {
//       ++cart.querySelector('.quantity-item').innerText;
//     }

//     let delets = document.querySelectorAll(".delete-item");
//     delets.forEach((element) => {
//       element.addEventListener("click", function (event) {
//       let quantitiyItem= event.target.parentElement.querySelector('.quantity-item').innerText;
//       let quality = document.querySelector("#number-cart");
//       quantitySpan.innerText = quantitySpan.innerText - quantitiyItem;
      
        





//         event.target.parentElement.remove();
//       });
//     });
//   });
// });

// let number= prompt('enter the number');
// for (let index = 1; index <= number; index++){
//  let root= Math.sqrt(index)
//  let shi= Math.floor(root);
//  if (shi == number) {
//    console.log(shi);
//  }
// }; 
  
let bottums= document.querySelectorAll('.add-cart');
let numberCart= document.querySelector('#number-cart');
bottums.forEach(element => {
  element.addEventListener('click',function (event) {
    ++numberCart.innerText;

    let product= event.target.parentElement;
    let idProduct= product.id;
    
    let cart= document.getElementById(`item${idProduct}`);
    if (!cart) {
      let imgProduct= product.querySelector('img').src;
    let titleProduct= product.querySelector('.t-product').innerText;
    let priceProduct= product.querySelector('.p-product').innerText;

    let text= `

          <li id="item${idProduct}">
            <img src="${imgProduct}" />
            <div class="prperties-cart">
              <span class="item-title">${titleProduct}</span>
              <span class="item-price">${priceProduct}</span>
              <span class="quantity-item">1</span>
            </div>
            <span class="delete-item">x</span>
          </li>
    `
    document.querySelector('#items').innerHTML += text;
    }else {
      ++cart.querySelector('.quantity-item').innerText;
    }

    let delets= document.querySelectorAll('.delete-item');
    let emptyCart= document.querySelector('#empty-cart');
    
    delets.forEach(element => {
      element.addEventListener('click',function (event) {
        let quantityItem= event.target.parentElement.querySelector('.quantity-item').innerText;
        numberCart.innerText =  numberCart.innerText - quantityItem;

        if (numberCart == 0) {
          emptyCart.style.display= 'block'
        };

        event.target.parentElement.remove()
      })
    });
    
     
  });
});
