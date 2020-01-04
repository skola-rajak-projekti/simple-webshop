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
// For passes ID, function returns item object
function findItemById(itemId) {

    var ret;
    market.categories.forEach(function (item, index) {
        item.items.forEach(function(el, index){            
            if (el.id == itemId)                          
               ret = el;                                   
        });
    });
    return ret;

}
function orderItem(){

    $('#orderAmountModal').modal('hide')
    amount = document.getElementById("item-amount").value;
    itemId = document.getElementById("item-id").value;
    kart = JSON.parse(window.localStorage.getItem('my-kart'));           
  
    
    if(findItemById(itemId) != null)
    {   el = findItemById(itemId)
        el.amount = amount;
        kart.push(el);     
    }
    window.localStorage.setItem('my-kart', JSON.stringify(kart));
    
}


function printItemCard(item) {   
    
    if(item.onStock > 0)
        orderButton = "<button   type='button' data-toggle='modal' data-target='#orderAmountModal' data-item='" + item.id + "' class='btn btn-primary'>Poruči</button>";
    else
        orderButton = "<button disabled data-toggle='tooltip' title='Nema na lageru'type='button'  data-toggle='modal' data-target='#orderAmountModal' data-item='" + item.id + "' class='btn btn-secondary'>Poruči</button>";

    temp = document.getElementById('item-cards');    

    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
        "<div class='card h-100'> " +
        "<a href = '#' data-toggle='modal' data-item-id='"+item.id + "' data-target='#itemDetailsModal' > <img class='card-img-top' height='150px' src=" + item.imgPath[0] + " alt=''></a>" +
        "<div class='discount-head' > " + item.discount.name + "</div><div class='card-body'>" +
        "<h4 class='card-title'>" +
        "<a href='#'  data-toggle='modal' data-item-id='"+item.id + "' data-target='#itemDetailsModal' id='item-name'>" + item.name + "</a>" +
        
        "</h4>" +
        "<h5>" + item.price + " " + item.unit + "</h5>" +
        "<p class='card-text'></p>" + orderButton + "</div>" +
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


