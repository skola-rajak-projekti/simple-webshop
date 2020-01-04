var currentDate;
var sum = 0;
var shoopingList;

window.addEventListener('load', makeInvoice);

function getCurrentDate() { 
    // moment().format('YYYY-MM-DD');
    return moment().format('DD.MM.YYYY');//moment().calendar();   
}
function getDeadlineDate() {
    // moment().format('dddd');
    return moment().add(5, 'days').format('DD.MM.YYYY');   
}
function makeInvoice() {

    shoopingList = JSON.parse(window.localStorage.getItem("my-kart"));
    user = JSON.parse(window.localStorage.getItem('recipient'));
    invoiceBody = document.getElementById('invoice-body');
    
    shoopingList.forEach(function (item, index) {
        invoiceBody.innerHTML += "<tr>  <td> <b>" + item.id +
            "</b> </td> <td class='item-blue'>" + item.name +
            "</td> <td>" + item.amount +
            "</td> <td>" + item.price +
            "</td> <td>" + item.price * item.amount +
            "</td></tr>";
        sum += item.price * item.amount;
    });

    market = JSON.parse(window.localStorage.getItem("market"));
    companyDetails = document.getElementById('company-details');
    companyDetails.innerHTML += "<div class='row my-3'><h3>" + market.name + "</h3></div>"
            + "<div class='row '>" + market.location.street + "</div>"
            + "<div class='row'>" + market.location.zip + " " + market.location.city + "</div>"
            + "<div class='row '>" + market.email + "</div>"
            + "<div class='row '>" + market.site + "</div>"

    invoiceDetails = document.getElementById('invoice-details');
    invoiceDetails.innerHTML += "<div class='row my-4'><h1> Faktura </h1></div>"
            + "<div class='row '>Broj fakture: " + Date.now()%10000 + "/2019 </div>"
            + "<div class='row'>Datum fakture: " + getCurrentDate()  + "</div>"
            + "<div class='row '>Krajni rok: " + getDeadlineDate() + "</div>"
            
    invoiceTotal = document.getElementById('invoice-total');
    invoiceTotal.innerHTML += "<tr> <td>Medjuvrednost: </td><td>" + sum*0.8 + "</td> </tr>"
            + "<tr> <td>PDV: </td> <td> 20%</td> </tr>"
            + " <tr> <th > Ukupuni iznos: </th><td>" + sum + " </td> </tr>";
            




    


}