'use strict';

let orders = [];
let price;

function FoodLovers(costName, foodType, imgPath){
this.costName = `Custmer Name: ${costName}`;
this.foodType = `Food Type: ${foodType}`;
this.price = `Food Price: ${price}`;
this.imgPath = `imgs/${foodType}.jpg`;
orders.push(this);


}





function randomPrice(){
price =  Math.floor((Math.random()* 20) + 10);
}

randomPrice();

let ordersForm = document.getElementById('myForm');
ordersForm.addEventListener('submit', takingOrders);

function takingOrders(event){
    event.preventDefault(); 
let custmerName = event.target.costName.value;
let orderDetails = event.target.type.value;
new FoodLovers (custmerName, orderDetails  );


tableFill();
setInlocalStorage();
}
let bodyTable = document.getElementById('tableBody');

function tableFill(){

    bodyTable.textContent= "";
for (let i = 0; i < orders.length; i++) {
    let trEl = document.createElement('tr');
    bodyTable.appendChild(trEl);
 
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    let imgEl = document.createElement('img');
    tdEl.appendChild(imgEl);
    imgEl.setAttribute('src', orders[i].imgPath);
    


let tdEl2 = document.createElement('td');
trEl.appendChild(tdEl2);

let ulEl = document.createElement('ul');
tdEl2.appendChild(ulEl);

let liEl = document.createElement('li');
ulEl.appendChild(liEl);
liEl.textContent = orders[i].costName;

let liEl2 = document.createElement('li');
ulEl.appendChild(liEl2);
liEl2.textContent =orders[i].foodType;

let liEl3 = document.createElement('li');
ulEl.appendChild(liEl3);
liEl3.textContent =orders[i].price;

}


}

function setInlocalStorage(){
    let data = JSON.stringify(orders);
    localStorage.setItem('order', data);

    tableFill();
}

function getFromLocalStorage(){
let storedData = localStorage.getItem('order');
let convertedData = JSON.parse(storedData);

if (convertedData !== null){
    convertedData = orders;
}

}
getFromLocalStorage();