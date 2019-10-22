var kart;

function printItemCart(el)
{
    temp = document.getElementById('ordered-items');
    temp.innerHTML = "<table class='table'>" +
        "<thead> <tr> <th> Naziv </th> <th> Kolicina </th>"+        
            "</thead><tbody><tr> <td>" + el.name + "</td> <td>" + el.price + "</td>"
            "</tbody></table>";

}

window.onload = function () {
    kart = JSON.parse(window.localStorage.getItem("my-kart"));
    printItemCart(kart);
    

};

