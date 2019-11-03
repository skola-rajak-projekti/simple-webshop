var items;
var temp;
var currentCategory;
var cart;

window.addEventListener('load', populateData);

function populateData(){
    market = JSON.parse(window.localStorage.getItem('market'));    
    
    market.categories.forEach(function (item, index) {

        temp = document.getElementById('categories');
        temp.innerHTML += "<a href='#' onClick='printItemsFromCategory()' id='" + item.name + "' class='list-group-item'>" + item.name + "</a>";
    
    });
    
    printDiscountPicker();

    printAllItems();
    
}

// prints all items that have current discount
function printDiscountItems()
{
    temp = document.getElementById('item-cards');
    temp.innerHTML = "";

    discount = event.srcElement.id;
    market.categories.forEach(function(item, index)
    {      
        item.items.forEach(function(el, index){
           
           if(el.discount.name === discount)
            {
                printItemCard(el);          
                
            }
        });
        
    });
}
function printAllItems(){
    market.categories.forEach(function(item, index)
    {      
        item.items.forEach(function(el, index){           
                printItemCard(el);                       
        });
        
    });
}

function printDiscountPicker(){
    
    var temp = document.getElementById('discounts');
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='10%' class='list-group-item'> 10% </a>";
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='20%' class='list-group-item'> 20% </a>";
    temp.innerHTML += "<a href='#' onClick='printDiscountItems()' id='30%' class='list-group-item'> 30% </a>";

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

    $('#exampleModal').modal('hide')
    amount = document.getElementById("item-amount").value;
    itemId = document.getElementById("item-id").value;
    market.categories.forEach(function (item, index) {
        item.items.forEach(function(el, index){
            findItemById(itemId, el, amount);
        });
        
    });
    
}


function printItemCard(item) {

    temp = document.getElementById('item-cards');    
    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
        "<div class='card h-100'> " +
        "<a href = '#' > <img class='card-img-top' height='150px' style='object-fit: cover' src=" + item.imgPath[0] + " alt=''></a>" +
        "<div class='discount-head' > " + item.discount.name + "</div><div class='card-body'>" +
        "<h4 class='card-title'>" +
        "<a href='#' id='item-name'>" + item.name + "</a>" +
        "</h4>" +
        "<h5>" + item.price + " " + item.unit + "</h5>" +
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
    market.categories.forEach(function (item, index) {
        findCategory(item, categoryName);
    });
}


