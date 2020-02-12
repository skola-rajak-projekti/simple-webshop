var categoryType = "";
var currentCategory ;

window.addEventListener('load', redirectionPage);
function redirectionPage(){
    
    categoryType = parseRequest();
    getCategoryFromMarket(categoryType);
    
    console.log("Entered category " +currentCategory.name);

    document.getElementById("page-header").innerHTML = currentCategory.name;
    document.getElementById("page-details").innerHTML = currentCategory.details;


    printItemsFromCategory(categoryType);
}

function parseRequest(){
    len = window.location.href.length;
    link = window.location.href.substr(72, len); // med/mlekara/mesara
    
    return link.charAt(0).toUpperCase() + link.substr(1,link.length);
    
}
function getCategoryFromMarket(categoryName){
    market = JSON.parse(window.localStorage.getItem('market'));
    market.categories.forEach(function (item, index) {
        
        if (categoryName === item.name) {
            currentCategory = item;
        }  
    });
}

function findCategory(item, categoryName) {
    
    if (categoryName == item.name) {
        currentCategory = item;
        item.items.forEach(function (target, index) {
            printItemCard(target);
        });
    }
}