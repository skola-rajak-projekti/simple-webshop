var shoopingList;
var sum = 0;

function printShoppingKart() {
    root = document.getElementById('ordered-items');

    if (shoopingList.length == 0) {
        root.innerHTML += "<tr> <td colspan ='40'> Vasa korpa ja prazna</td> </tr>";
    } else {
        shoopingList.forEach(function (item, index) {
            root.innerHTML += "<tr>  <td> <b>" + item.id +
                              "</b> </td> <td class='item-blue'>" + item.name + 
                              "</td> <td>" + item.amount +
                              "</td> <td>" + item.price + 
                              "</td> <td>" + item.price*item.amount+
                              "</td></tr>";
            sum += item.price*item.amount;
        });
        root.innerHTML += " <tr> <th colspan='40'> Upuni iznos: " + sum +" </th> </tr>"
        


    }
}
function saveRecipient(){
    var user;
    user.name = document.getElementById("recipient-name");    
    user.adress = document.getElementById("recipient-adress");
    
    window.localStorage.getItem("recipient" , user);


}
window.onload = function () {
    shoopingList = JSON.parse(window.localStorage.getItem("my-kart"));
    printShoppingKart();


};

