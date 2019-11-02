
var market = {
    name: "Zujic shop",
    about: "Prodavnica za prodaju tradiocionalnih proizvoda.",
    location: {
        street: "Venizelisova 123",
        city: "Novi Sad",
        zip: 21000,
    },
    phoneNumber: "021-568-266",
    site: "www.zujic.com",
    email: "zujic@shop.rs",
    categories: [
        {
            name: "Mlekara",
            items: [
                {
                    id: 345,
                    name: "Koziji sir",
                    desc: "Domaći koziji sir blah",
                    price: 350,
                    unit: "din/kg",
                    imgPath: ["images/Mlekara/beliMekiSir.jpg"],
                    onStock: 15,
                    discounts: [

                    ],
                    amount: 1,
                },
                {
                    id: 567,
                    name: "Gorgonzola",
                    desc: "Domaći sitan i punomasni sir od krave",
                    price: 740,
                    unit: "din/kg",
                    onStock: 15,
                    discounts: [

                    ],
                    imgPath: ["images/Mlekara/gorgonzola1.jpg", "images/Mlekara/gorgonzola2.jpg", "images/Mlekara/gorgonzola3.jpg"],
                    amount: 1,
                }
            ]
        }, {
            name: "Med",
            items: [
                {
                    id: 367,
                    name: "Livadski med",
                    desc: "Livadski med",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/livadski.jpg"],
                    amount: 1,
                }, {
                    id: 368,
                    name: "Med od lipe",
                    desc: "Med od lipe",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/lipa.jpg"],
                    amount: 1,
                }, {
                    id: 369,
                    name: "Med od kestena",
                    desc: "Med od borovih iglica",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/kesten.jpg"],
                    amount: 1,
                }, {
                    id: 370,
                    name: "Med od borovih iglica",
                    desc: "Med od borovih iglica",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/borIglice.jpg"],
                    amount: 1,
                }, {
                    id: 371,
                    name: "Med od bagrema",
                    desc: "Med od bagrema",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/bagrem.jpg"],
                    amount: 1,
                },


                {
                    id: 367,
                    name: "Med od maslacka",
                    desc: "Med od borovih iglica",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discounts: [

                    ],
                    imgPath: ["images/Med/maslacak.jpg"],
                    amount: 1,
                }
            ]
        }, {
            name: "Mesara",
            items: [
                {
                    id: 205,
                    name: "Dimljena slanina",
                    desc: "Opis",
                    price: 700,
                    unit: "din/kg",
                    onStock: 15,
                    discounts: [

                    ],
                    imgPath: ["images/Mesara/slanina.jpg"],
                    amount: 1,
                }, {
                    id: 209,
                    name: "Sušena govedina",
                    dec: "Ops",
                    price: 580,
                    unit: "din/kg",
                    onStock: 15,
                    discounts: [

                    ],
                    imgPath: ["images/Mesara/susenaGovedina.jpg"],
                    amount: 1,
                }, {
                    id: 309,
                    name: "Svinjske kocke",
                    dec: " s",
                    price: 450,
                    unit: "din/kg",
                    onStock: 15,
                    discounts: [

                    ],
                    imgPath: ["images/Mesara/prasetinaKocke.jpg"],
                    amount: 1,

                }, {
                    id: 319,
                    name: "Svinjski ćevapi",
                    dec: " s",
                    price: 250,
                    unit: "din/kg",
                    onStock: 15,
                    discounts: [

                    ],
                    imgPath: ["images/Mesara/cevapi.jpg"],
                    amount: 1,

                }

            ]
        }
    ]
};


// items
window.onload = function () {
    this.console.log("data loaded");
    window.localStorage.setItem('market', JSON.stringify(market));
    if (window.localStorage.getItem('my-kart') === null)
        window.localStorage.setItem('my-kart', JSON.stringify([]));
};
