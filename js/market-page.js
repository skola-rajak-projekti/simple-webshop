var items;
var temp;
var categories;
var currentCategory;
var cart;

window.addEventListener('load', populateData)

function populateData(){
    market = JSON.parse(window.localStorage.getItem('market'));
    categories = market.categories;
    categories.forEach(function (item, index) {
        printCategoryCard(item);
    })


}
function findItemById( itemId, el, amount) {
    var kart;
    if (el.id == itemId) {
        el.amount = amount;
        kart = JSON.parse(window.localStorage.getItem('my-kart'));
        kart.push(el);              

        window.localStorage.setItem('my-kart', JSON.stringify(kart));
    }

}
function orderItem(){

    console.log("ordere");
    amount = document.getElementById("item-amount").value;
    itemId = document.getElementById("item-id").value;
    currentCategory.items.forEach(function (item, index) {
        findItemById(itemId, item, amount);
    });
    
}


function printItemCard(item) {
    temp = document.getElementById('item-cards');    
    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
        "<div class='card h-100'> " +
        "<a href = '#' > <img class='card-img-top' height='150px' style='object-fit: cover' src=" + item.imgPath[0] + " alt=''></a>" +
        "<div class='card-body'>" +
        "<h4 class='card-title'>" +
        "<a href='#' id='item-name'>" + item.name + "</a>" +
        "</h4>" +
        "<h5>" + item.price + " " +item.unit + "</h5>" +
        "<p class='card-text'></p>" +
        "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' data-item='" + item.id + "'>Poruči</button>"+
        "</div>" +
        "</div>" +
        "</div>";

}
function findCategory(item, categoryName) {
    if (categoryName == item.name) {
        currentCategory = item;
        
        item.items.forEach(function (target, index) {
            printItemCard(target);
        });
    }
}
function printItemsFromCategory() {
    categoryName = event.srcElement.id;
    temp = document.getElementById('item-cards');
    temp.innerHTML = "";
    categories.forEach(function (item, index) {
        findCategory(item, categoryName);
    });
}

function printCategoryCard(category) {
    items = category.items;
    var temp = document.getElementById('categories');
    temp.innerHTML += "<a href='#' onClick='printItemsFromCategory()' id='" + category.name + "' class='list-group-item'>" + category.name + "</a>";

}

