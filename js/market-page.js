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
function findItemById( itemId, el, amout) {
    if (el.id == itemId) {
        kart =  window.localStorage.getItem('my-kart');
        kart.items.add(JSON.stringify(el));

        window.localStorage.setItem('my-kart', kart);
    }

}
function orderItem(){
    itemId = document.getElementById("item-id").value;
    amout = document.getElementById("item-amopunt").value;
    currentCategory.items.forEach(function (item, index) {
        findItemById(itemId, item, amout);
    });
    
}


function printItemCard(item) {
    temp = document.getElementById('item-cards');
    //temp = "";
    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
        "<div class='card h-100'> " +
        "<a href = '#' > <img class='card-img-top' height='150px' style='object-fit: cover' src=" + item.imgPath + " alt=''></a>" +
        "<div class='card-body'>" +
        "<h4 class='card-title'>" +
        "<a href='#' id='item-name'>" + item.name + "</a>" +
        "</h4>" +
        "<h5>" + item.price + " din</h5>" +
        "<p class='card-text'></p>" +
        "</div>  <div class='card-footer'><a href='javascript:void(0);' onclick='AddItemToCart(" + item.id + ")'; class='btn btn-primary'> Kupi</a>" +
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

