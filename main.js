var markets = [{
    name: "Futoska pijaca",
    location: "Futoska 33",
    imgPath:"images/pijace/futoska.jpg",
    marketId: 1,
    page: "futoska.html"
},
{
    name: "Limanksa pijaca",
    location: "Bulevar neki",
    imgPath:"images/pijace/limanska.jpg",
    marketId: 2,
    page:"limanska.html"
},
{
    name: "Kvantas",
    location: "podbara",
    marketId: 3,
    imgPath:"images/pijace/kvantas.jpg",
    page:"kvantas.html"
},
{

    name: "Satelitska pijaca",
    location: "Novo Naselje",
    marketId: 4,
    imgPath:"images/pijace/satelitska.jpg",
    page:"satelitska.html"
},
{
    name: "Najlon",
    location: "Pizda materina",
    imgPath:"images/pijace/najlon.jpg",
    marketId: 5,
    path:"najlon.html"
}

]
var items = [{
    name: "Jabuka gala",
    price: "40",
    imgPath: "images/jabuke/gala.jpg",
    itemId: 1,
    marketId: 1

}, {
    name: "Greny Smith jabuka",
    price: "50",
    imgPath: "images/jabuke/greniSmith.jpg",
    itemId: 2,
    marketId: 2,
}, {
    name: "Jabuka crveni delises",
    price: "26",
    imgPath: "images/jabuke/crveniDelises.jpg",
    itemId: 3,
    marketId: 2,

}];

/// Functions for data manipulations

function printElements(item, index) {

    var a = document.createElement('a');
    a.href = item.name + ".html";
    a.className = "list-group-item";
    a.text = item.name;

    document.getElementById('categoryList').appendChild(a);

}

// items
window.onload = function () {
    this.populateData()
    //items.forEach(printItemCard);
    markets.forEach(this.printMarketCard);
   
};
// market-list
function printMarketCard(item, index) {

    var temp = document.getElementById('market-cards');
    temp.innerHTML += "<div class='col-lg-6 col-md-8 mb-4 '>"+    
    "<div class='card h-10 text-black' data-type='item-template'> " +
        "<a href = " + item.page +" > <img class='card-img-top' height='250px' style='object-fit: cover' src=" + item.imgPath + " alt=''></a>"+
            "<div class='card-body' style='background-color: rgba( 200,200,250, 1)'>"+
                "<h4 class='card-title'>"+
                    "<a href=" +item.page + " id='item-name'>" + item.name + "</a>"+
                "</h4>"+
                "<h5>"+item.location +" din</h5>"+
                "<p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>"+
            "</div>"+
        "</div >"+
    "</div > "

}
// Function for population data into local storage
function populateData() {
    window.localStorage.setItem('martkets', JSON.stringify(markets));
    window.localStorage.setItem('items', JSON.stringify(items));
    

}