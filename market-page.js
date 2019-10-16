var items;

window.onload = function () {
    items = JSON.parse(window.localStorage.getItem('items'));
    market = window.localStorage.getItem('market-id');
    items.forEach(printItemCard, market);

}

function printItemCard(item, marketId) {
    if (marketId === item.marketId) {
        var temp = document.getElementById('item-cards');
        temp.innerHTML += "<div class='col-lg-4 col-md-6 mb-4 '>" +
            "<div class='card h-10' data-type='item-template'> " +
            "<a href = '#' > <img class='card-img-top' height='150px' style='object-fit: cover' src=" + item.imgPath + " alt=''></a>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" +
            "<a href='#' id='item-name'>" + item.name + "</a>" +
            "</h4>" +
            "<h5>" + item.price + " din</h5>" +
            "<p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
}


function printCategoryCard() {
    var temp = document.getElementById('category-cards');
//    temp += categoryCard();
}

