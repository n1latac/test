/*const API_BASE = 'https://fakestoreapi.com/products';

const product = {
    title: 'Samsung',
    price: 10000,
    decription: 'telephone',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
}

fetch(API_BASE, options)
.then((res)=>res.json())
.then((data)=>console.log(data))
*/

async function getValue(){
    const promise = await fetch('https://dummyjson.com/products/1');
    //console.log(promise);
    const data = await promise.json();
    console.log(data);
}
async function getPromise(){
    if(Math.random()>0.5){
        return 1;
    } else {
        return 5;
    }
}