var shoopingList;
var sum = 0;



function start(){
    shoopingList = JSON.parse(window.localStorage.getItem("my-kart"));
    printShoppingKart();
    
    $("#form").submit(function(event){        
         event.preventDefault()
    });
    
}
function addZIPcode(){
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip");
    switch(city){
        case "NS": zip.value = "21000"; break;
        case "BG": zip.value = "11000"; break;
        case "KG": zip.value = "3400";break;
        case "SB": zip.value = "2400";break;
    }
}

function printShoppingKart() {
    root = document.getElementById('table-ordered-items');
    kartHeader = document.getElementById('kart-header');
    pageContent = ""
    
    if (shoopingList == null || shoopingList.count == 0) {
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
            sum = 0;
        shoopingList.items.forEach(function (item, index) {
            pageContent += "<tr> <td> <b>" + item.id +
                "</b> </td> <td class='item-blue'>" + item.name +
                "</td> <td>" + item.amount +
                "</td> <td>" + item.price +
                "</td> <td>" + item.discount.name+
                "</td> <td> <strong>" + (item.price * item.amount * (1 - item.discount.value)).toFixed(2) + "дин</strong>" +
                "</td> <td>" + "<button type='button' class='btn btn-link' onclick='removeItemFromKart(" + item.id + ")'  <span class='glyphicon glyphicon-trash'> x </span></button>" +
                "</td></tr>";
            sum += item.price * item.amount * (1 - item.discount.value);
        });


        pageContent += "<tr colspan='40'><div class='offset-9'><table class='table  '>" +
            "<tr><td><h5> Укупни износ: " + sum.toFixed(2) + " din</h5></td></tr></table></div>";
        pageContent += "</tr></tbody> </table> </div></td></tr>";
        root.innerHTML = pageContent;

    }
}
function saveRecipient() {
    var user = {};
    var order = {};    
    user.firstname = document.getElementById("firstName").value;
    user.lastname = document.getElementById("lastName").value;
    user.adress = document.getElementById("street").value;    
    user.email  = document.getElementById("email").value;         
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

    order.kart = JSON.parse(window.localStorage.getItem("my-kart"));    
    order.orderer = user;             
    orders = JSON.parse(window.localStorage.getItem("my-orders"));     
    if(orders == null)
        orders = [order];
    else
        orders.push(order);
    
    window.localStorage.setItem("my-orders", JSON.stringify(orders))
    setTimeout(function () {
        $('#exampleModal').modal('hide')
    }, 100);
    
    

}

$('#exampleModal').on('hidden.bs.modal', function (e) {
    
    $('#table').addClass('little-bit-gray');
  })


function removeFilter(id){
    return shoopingList.items.filter(function(el){       
        return el.id != id;
    });        
}

function removeItemFromKart(itemId) {  
  
    var temp = shoopingList;
    temp.items = removeFilter(itemId);
    temp.count--;

    window.localStorage.setItem("my-kart", JSON.stringify(temp));
    location.reload();
}

start();