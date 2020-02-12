var shoopingList;
var sum = 0;

function removeFilter(id){
    return shoopingList.filter(function(el){       
        return el.id != id;
    });        
}

function removeItemFromKart(itemId) {  
  
    var temp = removeFilter(itemId);
    window.localStorage.setItem("my-kart", JSON.stringify(temp));
    location.reload();
}


function printShoppingKart() {
    root = document.getElementById('table-ordered-items');
    kartHeader = document.getElementById('kart-header');
    pageContent = ""

    if (shoopingList == null || shoopingList.length == 0) {
        root.innerHTML += "<img src='images/praznaKorpa.jpg'> ";
    } else {
        kartHeader.style.display = null;
        pageContent += "<div class='table-responsive my-3 '>" +
            "<table class='table table-striped table-bordered'>" +
            "<thead>" +
            "<tr>" +
            "<th scope='col'> # </th>" +
            "<th scope='col'> Назив </th>" +
            "<th scope='col'> Количина </th>" +
            "<th scope='col'> Јединична цена </th>" +
            "<th scope='col'> Попуст </th>" +
            "<th scope='col'> Износ </th>" +
            "<th scope='col'> Обриши </th>" +
            "</tr>" +
            "</thead><tbody>";
        shoopingList.forEach(function (item, index) {
            pageContent += "<tr> <td> <b>" + item.id +
                "</b> </td> <td class='item-blue'>" + item.name +
                "</td> <td>" + item.amount +
                "</td> <td>" + item.price +
                "</td> <td>" + item.discount.name+
                "</td> <td> <strong>" + item.price * item.amount * (1 - item.discount.value) + "дин</strong>" +
                "</td> <td>" + "<button type='button' class='btn btn-link' onclick='removeItemFromKart(" + item.id + ")'  <span class='glyphicon glyphicon-trash'> x </span></button>" +
                "</td></tr>";
            sum += item.price * item.amount * (1 - item.discount.value);
        });


        pageContent += "<tr colspan='40'><div class='offset-9'><table class='table  table-bordered'>" +
            "<tr><td><h5> Укупни износ: " + sum + " din</h5></td></tr></table></div>";
        pageContent += "</tr></tbody> </table> </div></td></tr>";
        root.innerHTML = pageContent;

        window.localStorage.setItem("kart-total", JSON.stringify(sum));


    }
}
function saveRecipient() {
    var user = {};
    var order = {};    
    user.firstname = document.getElementById("firstName").value;
    user.lastname = document.getElementById("lastName").value;
    user.adress = document.getElementById("street").value;    
    user.email  = document.getElementById("email").value;    
    user.state  = document.getElementById("state").value;    
    user.city  = document.getElementById("city").value;    
    user.zip  = document.getElementById("zip").value;    
    if(document.getElementById("card").value == "none")
        user.paymentmethod = "По узећу";

    else{
        user.paymentmethod = "Картицом";  
        user.card = {};
        user.card.name  = document.getElementById("cardName").value;    
        user.card.no  = document.getElementById("cardNo").value;  
        user.card.exp = document.getElementById("cardExp").value;    
        user.card.cvv = document.getElementById("CCV").value;    
    }

    order.items = JSON.parse(window.localStorage.getItem("my-kart"));
    
    order.orderer = user;   
    order.total = JSON.parse(window.localStorage.getItem("kart-total"));
    window.localStorage.setItem('kart-total', 0);

    //window.localStorage.setItem("recipient", JSON.stringify(user));
    
    // Adding new order to list of all other orders.    
    orders = JSON.parse(window.localStorage.getItem("my-orders"));     
    if(orders == null)
        orders = [order];
    else
        orders.push(order);

    window.localStorage.setItem("my-orders", JSON.stringify(orders));
    
    window.localStorage.removeItem("my-kart");
    window.location.href  = "orders.html";
    
   

}
window.onload = function () {
    shoopingList = JSON.parse(window.localStorage.getItem("my-kart"));
    printShoppingKart();


};

