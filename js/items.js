
function printItemsFromCategory(categoryType) {
    
    temp = document.getElementById('item-cards');
    temp.innerHTML = "";
    market.categories.forEach(function (item, index) {
        findCategory(item, categoryType);
    });
}


// For passes ID, function returns item object
function findItemById(itemId) {

    var ret;
    market.categories.forEach(function (item, index) {
        item.items.forEach(function (el, index) {
            if (el.id == itemId)
                ret = el;
        });
    });
    return ret;

}

function printItemCard(item) {

    if (item.onStock > 0)
        orderButton = "<button type='button' data-toggle='modal' data-target='#orderAmountModal' data-item='" + item.id + "' class='btn btn-primary'>Poruči</button>";
    else
        orderButton = "<button disabled data-toggle='tooltip' title='Nema na lageru'type='button'  data-toggle='modal' data-target='#orderAmountModal' data-item='" + item.id + "' class='btn btn-secondary'>Poruči</button>";

    temp = document.getElementById('item-cards');

    temp.innerHTML += "<div class='col-lg-3 col-md-6 mb-4 '>" +
        "<div class='card h-100'> " +
        "<a href = '#' data-toggle='modal' data-item-id='" + item.id + "' data-target='#itemDetailsModal' > <img class='card-img-top' height='250px' src=" + item.imgPath[0] + " alt=''></a>" +
        "<div class='discount-head' > " + item.discount.name + "</div><div class='card-body'>" +
        "<h4 class='card-title'>" +
        "<a href='#' data-toggle='modal' data-item-id='" + item.id + "' data-target='#itemDetailsModal' id='item-name'>" + item.name + "</a>" +
        "</h4>" +
        "<h5>" + item.price + " " + item.unit + "</h5>" +
        "<p class='card-text'></p>" + orderButton + "</div>" +
        "</div>" +
        "</div>";

}