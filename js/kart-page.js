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
    pageContent = ""

    if (shoopingList.length == 0) {
        root.innerHTML += "<img src='images/praznaKorpa.jpg'> ";
        kartHeader = document.getElementById('kart-header');
        kartHeader.style.display = "none";
    } else {
        pageContent += "<div class='table-responsive my-3 '>" +
            "<table class='table table-striped table-bordered'>" +
            "<thead>" +
            "<tr>" +
            "<th scope='col'> # </th>" +
            "<th scope='col'> Naziv </th>" +
            "<th scope='col'> Kolicina </th>" +
            "<th scope='col'> Jedinicna cena </th>" +
            "<th scope='col'> Popust </th>" +
            "<th scope='col'> Iznos </th>" +
            "<th scope='col'> Obrisi </th>" +
            "</tr>" +
            "</thead><tbody>";
        shoopingList.forEach(function (item, index) {
            pageContent += "<tr> <td> <b>" + item.id +
                "</b> </td> <td class='item-blue'>" + item.name +
                "</td> <td>" + item.amount +
                "</td> <td>" + item.price +
                "</td> <td>" + item.discount.name+
                "</td> <td> <strong>" + item.price * item.amount * (1 - item.discount.value) + "din</strong>" +
                "</td> <td>" + "<button type='button' class='btn btn-link' onclick='removeItemFromKart(" + item.id + ")'  <span class='glyphicon glyphicon-trash'> x </span></button>" +
                "</td></tr>";
            sum += item.price * item.amount * (1 - item.discount.value);
        });


        pageContent += "<tr colspan='40'><div class='offset-9'><table class='table  table-bordered'>" +
            "<tr><td><h5> Ukupuni iznos: " + sum + " din</h5></td></tr></table></div>";
        pageContent += "</tr></tbody> </table> </div></td></tr>";
        root.innerHTML = pageContent;



    }
}
function saveRecipient() {
    var user;
    user.name = document.getElementById("recipient-name");
    user.adress = document.getElementById("recipient-adress");

    window.localStorage.getItem("recipient", user);


}
window.onload = function () {
    shoopingList = JSON.parse(window.localStorage.getItem("my-kart"));
    printShoppingKart();


};

