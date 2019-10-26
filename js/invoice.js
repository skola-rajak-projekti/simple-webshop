window.addEventListener('load', makeInvoice);

function makeInvoice() {
    var currentDate = new Date();
    temp = document.getElementById('invoice-details');
    temp.innerHTML += "<div class='card-header'>" + currentDate.getDay() +"."+
        currentDate.getMonth() + "." +
        currentDate.getFullYear() + "." +
        "</div>";
}