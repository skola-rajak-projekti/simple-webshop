var markets = [{
    name: "Futoska pijaca",
    location: "Jevrejska 42, Novi Sad 21000",
    about: "Oformlјena na ovoj lokaciji početkom XX veka, Futoška pijaca je jedna od najposećenijih pijaca, najbolјe snabdevenih polјoprivrednim proizvodima i raznovrsnom mešovitom robom. Procenjuje se da tokom dana više građana prođe kroz ovu pijacu nego Zmaj Jovinom ulicom, centralnom ulicom gradske pešačke zone.",
    imgPath: "images/pijace/futoska.jpg",
    page: "futoska.html",
    categories: [
        {
            name: "Voce",
            items: [{
                name: "Jabuka gala",
                price: "40",
                imgPath: "images/jabuke/gala.jpg",
                itemId: 111
            }, {
                name: "Jagoda",
                price: "100",
                imgPath: "images/voce/jagoda.jpg",
                itemId: 112,
            }]
        }, {
            name: "Povrce",
            items: [{
                name: "Krastavac",
                price: "60",
                imgPath: "images/povrce/sveziKrastavac.jpg",
                itemId: 121
            }]
        }
    ]
},
{
    name: "Limanksa pijaca",
    about: "Limanska pijaca je oličenje moderne urbane pijace primerene snabdevanju građana svežim životnim namirnicama. Izgrađena je na potpuno natkrivenom pijačnom platou, koji je omeđen prizemnim objektom sa 53 prodavnice različitog sadržaja, smešteno je 333 tezge za prodaju poljoprivrednih proizvoda i mešovite robe.",
    location: "Bulevar cara Lazara 50, Novi Sad 21000",
    imgPath: "images/pijace/limanska.jpg",
    marketId: 2,
    page: "limanska.html",
    categories: [
        {
            name: "Voce",
            items: [{
                name: "Greny Smith jabuka",
                price: "50",
                imgPath: "images/jabuke/greniSmith.jpg",
                itemId: 2,
            }, {
                name: "Jabuka crveni delises",
                price: "26",
                imgPath: "images/jabuke/crveniDelises.jpg",
                itemId: 3

            }, {
                name: "Lubenica",
                price: "45",
                imgPath: "images/voce/lubenica.jpg",
                itemId: 4

            }, {
                name: "Dinja",
                price: "50",
                imgPath: "images/voce/dinja.jpg",
                itemId: 5
            }, {
                name: "Belo grozdje",
                price: "90",
                imgPath: "images/voce/beloGrozdje.jpg",
                itemId: 6
            }, {
                name: "Crno grozdje",
                price: "90",
                imgPath: "images/voce/crnoGrozdje.jpg",
                itemId: 7
            }]

        }
    ]

},
{
    name: "Kvantas",
    about: "Koncipirana po uzoru na u svetu poznate veletržnice, čija je namena snabdevanje građana životnim namirnicama na veliko, Kvantaška pijaca sa svojih 380 prodajnih mesta ispunjava svoju funkciju snabdevanja građana, a prvenstveno piljarnica, prodavnica, restorana, hotela i gradskih pijaca na malo svežim poljoprivrednim proizvodima.",
    location: "Venizelisova bb, Novi Sad",
    marketId: 3,
    imgPath: "images/pijace/kvantas.jpg",
    page: "kvantas.html",
    categories: []
},
{

    name: "Satelitska pijaca",
    about: "Mada najmanja, Satelitska pijaca je jedna od najbolje opremljenih i organizovanih zelenih pijaca u gradu. Modernog izgleda, sa 227 prodajnih mesta sa 15 korisnika rashladnih vitrina i 18 poslovnih prostora smeštenih na površini od 2.000 m2, ova pijaca snabdeva svežim životnim namirnicama preko 20.000 građana Novog Sada.",
    location: " Stevana Hladnog 1, Novi Sad 21000",
    marketId: 4,
    imgPath: "images/pijace/satelitska.jpg",
    page: "satelitska.html",
    categories: []
},
{
    name: "Najlon",
    about: "Najlon pijaca je nastala spontano šezdesetih godina prošlog veka na desnoj strani Temerinskog puta. U prvo vreme činila su je dva reda na zemlji postavljenih najlona i novina, na koje su građani iznosili i prodavali istrošenu odeću i obuću, stare neispravne kućne aparate i nešto druge polovne robe.",
    location: "Temerinski put 1, Novi Sad",
    imgPath: "images/pijace/najlon.jpg",
    marketId: 5,
    page: "najlon.html",
    categories: [
        {
            name: "Voce",
            items: [{
                name: "Jabuka gala",
                price: "40",
                imgPath: "images/jabuke/gala.jpg",
                itemId: 511
            }, {
                name: "Jagoda",
                price: "100",
                imgPath: "images/voce/jagoda.jpg",
                itemId: 512,
            }]
        }, {
            name: "Povrce",
            items: [{
                name: "Krastavac",
                price: "60",
                imgPath: "images/povrce/sveziKrastavac.jpg",
                itemId: 521
            }]
        }, {
            name: "Kucna hemija",
            items: []
        }]

}]

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
    temp.innerHTML += "<div class='col-lg-6 col-md-8 mb-4 '>" +
        "<div class='card h-10 text-black' data-type='item-template'> " +
        "<a href = " + item.page + " > <img class='card-img-top' height='250px' style='object-fit: cover' src=" + item.imgPath + " alt=''></a>" +
        "<div class='card-body' >" +
        "<h4 class='card-title'>" +
        "<a href=" + item.page + " id='item-name'>" + item.name + "</a>" +
        "</h4>" +
        "<h5>" + item.location + " din</h5>" +
        "<p class='card-text'>"+ item.about + "</p>" +
        "</div>" +
        "</div >" +
        "</div > "

}
// Function for population data into local storage
function populateData() {
    window.localStorage.setItem('market-1', JSON.stringify(markets[0]));
    window.localStorage.setItem('market-2', JSON.stringify(markets[1]));
    window.localStorage.setItem('market-3', JSON.stringify(markets[2]));
    window.localStorage.setItem('market-4', JSON.stringify(markets[3]));
    window.localStorage.setItem('market-5', JSON.stringify(markets[4]));
}