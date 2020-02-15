var items;
var temp;
var currentCategory;
var cart;

window.addEventListener('load', start);

function start() {
    //method from main.js
    populateData();
    market = JSON.parse(window.localStorage.getItem('market'));    
    cc =(JSON.parse(window.localStorage.getItem('my-kart'))).count;
    if(cc != undefined && cc > 0)        
        document.getElementById('kartfull').innerHTML = cc;       
    market.categories.forEach(function (item, index) {
        printCategory(item);
    });


    printBestBuyitems();


}
function printCategory(category) {
    if(category.name != null){
        temp = document.getElementById('categories');
        temp.innerHTML += "<h2> " + category.name +" </h2>";
        temp.innerHTML += "<a href= 'category.html?type=" + category.urlName  +"'><img height='300px'  src='" + category.images[0] + "'></a>";
    }
}
function printBestBuyitems() {

    temp = document.getElementById('bestbuy');
    temp.innerHTML = "";

    market.bestBuy.forEach(function (item, index) {
        printBestbuyItem(item);

    });
}
function printBestbuyItem(item) {

    temp = document.getElementById('bestbuy');

    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 col-centered '>" +
        "<div class='card bg-light mb-3 h-100'> " +
        "<div class='card-header'>" +
        "<a href='#' data-toggle='modal' data-item-id='" + item.id + "' data-target='#itemDetailsModal' id='item-name'>" + item.name + "</a>" +
        "</div>" +
        "<div class='card-body'>" +
        "<a href = '#' data-toggle='modal' data-item-id='" + item.id + "' data-target='#itemDetailsModal' > <img class='card-img-top cover ' height='220px' src=" + item.imgPath[0] + " alt=''></a>" +
        "<div class='discount-head-big' > <h2>" + item.discount.name + "</h2></div></div>" +
        "<p class='right old-price px-4 '> " + item.price + " " + item.unit + "</p>" +
        "<h4 class='right text-success px-3'>  Нова цена  " + parseFloat(item.price * (1 - item.discount.value)).toFixed(2) + " </h4>" +
        //"<button class='btn btn-primary' onclick=orderItem()> Додај у корпу </button>" +
        "<button type='button' data-toggle='modal' data-target='#orderAmountModal' data-item='" + item.id + "' class='btn btn-primary'>Додај у корпу </button>"
    "</div>";
}

/* prints all items that have current discount
function printDiscountItems() {

    var sbar = document.getElementById("sbar");
    var bestbuy = document.getElementById("bestbuy-head");
    var item = document.getElementById("items-head");
    item.classList.remove("hidden");
    sbar.className = "col-lg-3";
    bestbuy.classList.add("hidden");


    temp = document.getElementById('item-cards');
    temp.innerHTML = "";

    discount = event.srcElement.id;
    market.categories.forEach(function (item, index) {
        item.items.forEach(function (el, index) {

            if (el.discount.name === discount) {
                printItemCard(el);

            }
        });

    });
}
function printAllItems() {
    
    market.categories.map(item => {
        item.items.map(el => {
            printItemCard(el);
        });

    });
}

function printDiscountPicker() {

    var temp = document.getElementById('discounts');
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='10%' class='list-group-item'> 10% </a>";
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='20%' class='list-group-item'> 20% </a>";
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='30%' class='list-group-item'> 30% </a>";

}
*/