var shoopingList;
var sum = 0;

function printShoppingKart() {
    root = document.getElementById('table-ordered-items');    
    pageContent = ""

    if (shoopingList.length == 0) {
        root.innerHTML += "<img src='images/praznaKorpa.jpg'> ";
        kartHeader = document.getElementById('kart-header');
        kartHeader.style.display = "none";
    } else {
        pageContent += "<div class='table-responsive'>"+
        "<table class='table table-striped'>" +
            "<thead>"+
                "<tr>"+
                 "<th scope='col'> # </th>"+
                    "<th scope='col'> Naziv </th>"+
                    "<th scope='col'> Kolicina </th>"+
                    "<th scope='col'> Jedinicna cena </th>"+
                    "<th scope='col'> Iznos </th>"+
                    "<th scope='col'> Obrisi </th>"+
                "</tr>"+
            "</thead><tbody>";
        shoopingList.forEach(function (item, index) {
            pageContent += "<tr> <td> <b>" + item.id +
                "</b> </td> <td class='item-blue'>" + item.name +
                "</td> <td>" + item.amount +
                "</td> <td>" + item.price +
                "</td> <td>" + item.price * item.amount +
                "</td> <td>" + "<button type='button' class='btn btn-link'> </button> <span class='glyphicon glyphicon-trash'> x </span>" +
                "</td></tr>";
            sum += item.price * item.amount;
        });

        pageContent += " <tr> <th colspan='40'> Upuni iznos: " + sum + " </th> </tr> </tbody> </table></div>";

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

