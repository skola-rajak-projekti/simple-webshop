var currentCategory = {};

window.addEventListener('load', redirectionPage);
function redirectionPage(){
    
    currentCategory.urlName = parseRequest();
    getCategoryFromMarket(currentCategory.urlName);

    document.getElementById("page-header").innerHTML = currentCategory.name;
    document.getElementById("page-details").innerHTML = currentCategory.details;


    printItemsFromCategory(currentCategory.urlName);
}

function parseRequest(){
    path = window.location.href.split("=")[1];
    if(path != null || path != "" ){
        return path;
    }else{
        return "nekategorizovano"
    }
    
}
function getCategoryFromMarket(categoryName){
    market = JSON.parse(window.localStorage.getItem('market'));
    market.categories.forEach(function (item, index) {
        
        if (categoryName === item.urlName.toLowerCase()) {
            currentCategory = item;
        }  
    });
}

function findCategory(item, categoryName) {
    
    if (categoryName == item.urlName) {
        currentCategory = item;
        item.items.forEach(function (target, index) {
            printItemCard(target);
        });
    }
}