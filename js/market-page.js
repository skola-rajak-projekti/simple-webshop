var items;
var temp;
var categories;

window.onload = function () {    
    marketId = JSON.parse(window.localStorage.getItem('market-id'));
    market = JSON.parse(window.localStorage.getItem('market-'+ marketId)); 
    categories = market.categories;
    categories.forEach(function(item, index){
        printCategoryCard(item);
    })
   

}

function printItemCard(item) {         
        temp = document.getElementById('item-cards');
        temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
            "<div class='card h-100'> " +
            "<a href = '#' > <img class='card-img-top' height='150px' style='object-fit: cover' src=" + item.imgPath + " alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#' id='item-name'>" + item.name + "</a>" +
            "</h4>" +
            "<h5>" + item.price + " din</h5>" +
            "<p class='card-text'></p>" +
            "</div>  <div class='card-footer'><a href='#' class='btn btn-primary'> Kupi</a>"+
            "</div>" +
            "</div>" +
            "</div>"    
    
}
function findCategory(item, categoryName){
    if(categoryName == item.name)
    {
        item.items.forEach(function(target, index){
            printItemCard(target);
        });
    }
}
function printItemsFromCategory()
{
    categoryName = event.srcElement.id;
    temp = document.getElementById('item-cards');
    temp.innerHTML = "";
    categories.forEach(function(item, index){
        findCategory(item, categoryName);
    });
}

function printCategoryCard(category) {
    items = category.items;
    var temp = document.getElementById('categories');
    temp.innerHTML += "<a href='#' onClick='printItemsFromCategory()' id='"+ category.name +"' class='list-group-item'>" + category.name + "</a>" ;

}

