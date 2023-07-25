let container = document.getElementById("Popular");
let addCart = document.getElementById("addCart")
let thecontainer = () =>{
  return  (container.innerHTML=containArray
    .map((x) => {
        let {id, words, name1, price, img} = x;
    return`
     <span id=secondaa-id-${id} class="seconda card  d-lg-flex flex-column">
          <img class="" src="${img}" alt="">
          <h3>${name1}</h3>
          <p>${words}</p>
          <p>$${price}</p>
            <a  onclick="cardadd()" >Add to Cart</a>
        </span>`
  })
    .join("")
    )
}
thecontainer();
 function cardadd(){
  console.log("Clicked carfadfg")
 }
 
 