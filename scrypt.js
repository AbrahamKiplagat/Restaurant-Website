let container = document.getElementById("Popular");
 //let addCart = document.getElementById("addCart")

   let basket = JSON.parse(localStorage.getItem("data")) || []
let thecontainer = () =>{
  return  (container.innerHTML=containArray
    .map((x) => {
        let {id, words, name1, price, img} = x;
         let search = basket.find((x)=>x.id === id) || []
    return`
     <span id='${id} 'class="seconda card  d-lg-flex flex-column">
          <img class="" src="${img}" alt="">
          <h3>${name1}</h3>
          <p>${words}</p>
          <p>$${price}</p>
            <a id ="${id}" onclick="cardadd(${id})">Add to Cart</a>
        </span>`
  })
    .join("")
    )
}
thecontainer();
let cardadd =(id) =>{
  let selectedCart = id
  let search = basket.find((x)=> x.id === selectedCart.id);
  if (search === undefined){
     basket.push({
    id: selectedCart.id,
    item:1,
    
  })
  }
  else{
    search.item += 1
  }
  localStorage.setItem("data", JSON.stringify(basket))
  console.log(basket)
 
 }
/**
 * 1. create a parent div on cart and child div for various bought items.
 * 2. add functionality to the button when clicked.
 * 3. create a input and a 2 div for calculating totals. 
 */
 