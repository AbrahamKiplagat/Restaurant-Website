let label =document.getElementById('label');
let shoppingCart = document.getElementById("shopping-cart");

  // console.log( containArray)

let basket = JSON.parse(localStorage.getItem("data")) || []
// console.log(basket)

let generateCartItem = () =>{
  if(basket.length !==0){//is there any item on basket
   return  shoppingCart.innerHTML = basket.map((x)=>{//x will taget items in local storage one by one
    // console.log(x)
    let {id, item} =x;
    let search= containArray.find((y)=>y.id === id)|| []//if id from data and bascket march
    let totals_price=search.price*item
    // console.log(totals_price)
    
    return `
    <div class = "cart-item">
      <img width="100" height="120px" src=${search.img} alt=""/>
    <div class="details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name1}</p>
                <p class ="cart-item-price">$ ${search.price}</p>
                
              </h4>
                <i id ="${id}"  onclick="remove_item(${id})" class="cancelX">X</i>
          </div>
          <div class="title-price-items">
              <p class ="item-price">Items Sellected: ${item}</p>
              <p class ="item-price">Total: ${totals_price}</p>
            </div>
            <div class="card-buttons">

            </div>
          <h3></h3>
    </div>
    </div> 
    `
   }).join("")
  }
  else{
    shoppingCart.innerHTML =``
    label.innerHTML = `
    <h2>Cart is Empty<h2>
    <a href="index.html">
    <button class="HomeBtn">Back to home</button>
    </a>
    `
  }
}
let remove_item=(id)=>{
  let selectedItem =id;
  console.log(selectedItem.id)
  basket=basket.filter((x)=>x.id !==selectedItem.id);
  generateCartItem()
  localStorage.setItem("data", JSON.stringify(basket));
}
generateCartItem()
