
let data = JSON.parse(localStorage.getItem("user")) || [];
document.getElementById("form")

function sighupdata(n, e, a, m){
 this.name =n;
 this.email =e;
 this.address =a;
 this.wallet=m;

}
 
function sumbitFunction(){
    event.preventDefault();
    
    var name =document.getElementById("name");
    var email =document.getElementById("email");
    var address =document.getElementById("address");
    var wallet =document.getElementById("amount");
    let dataarr =new sighupdata(name.value, email.value, address.value, wallet.value)
    data.push(dataarr)
    localStorage.setItem("user",JSON.stringify(data));
    name.value="";
    email.value="";
    address.value="";
    amount.value="";
    window.location.reload();
}

