


let data = JSON.parse(localStorage.getItem("user")) || [];
var money =data[0].wallet
document.querySelector("#wallet_balance").innerText = `${money}`;



let datat = JSON.parse(localStorage.getItem("purchase")) || [];

fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
.then(function(res){
    return res.json();
})
.then(function(res){
    appendData(res[0].vouchers)
    console.log(res[0].vouchers)
})
.catch(function(err){
    console.log(err);
})
       

function appendData(data){

    data.forEach(function(el){
        let vouchers_div = document.getElementById("voucher_list");[[]]
      let box =document.createElement("div");
      box.setAttribute("class","voucher");

      let image =document.createElement("img")
      image.src=el.image;


      let name =document.createElement("h1")
      name.innerText=el.name;


      let price =document.createElement("h4");
      price.innerText=el.price
      
      let buy =document.createElement("button")
      buy.setAttribute("class","buy_voucher");
      buy.innerText="buy";
      buy.addEventListener("click",function(){
          buyFunc(el)
      })

      
      box.append(image, name, price, buy);
      vouchers_div.append(box);

    });
}

function buyFunc(el){
console.log(el);
datat.push(el);
localStorage.setItem("purchase",JSON.stringify(datat));

}

