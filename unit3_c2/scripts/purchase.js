let data = JSON.parse(localStorage.getItem("user")) || [];
var money =data[0].wallet
document.querySelector("#wallet_balance").innerText = `${money}`;


let datat = JSON.parse(localStorage.getItem("purchase")) || [];

datat.map(function(el){
    let vouchers_div = document.getElementById("purchased_vouchers");[[]]
  let box =document.createElement("div");
  box.setAttribute("class","voucher");

  let image =document.createElement("img")
  image.src=el.image;


  let name =document.createElement("h1")
  name.innerText=el.name;


  let price =document.createElement("h4");
  price.innerText=el.price
  
  box.append(image, name, price);
  vouchers_div.append(box);

});