
var market = {
    about: "Neki opis",
    location: "Venizelisova 123, Novi Sad",
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
                    amount : 1,
                },
                {
                    id: 567,
                    name: "Gorgonzola",
                    desc: "Domaći sitan i punomasni sir od krave",
                    price: 740,
                    unit: "din/kg",
                    imgPath: ["images/Mlekara/gorgonzola1.jpg", "images/Mlekara/gorgonzola2.jpg", "images/Mlekara/gorgonzola3.jpg"],
                    amount : 1,
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
                    imgPath: ["images/Mesara/slanina.jpg"],
                    amount : 1,
                }, {
                    id: 209,
                    name: "Sušena govedina",
                    dec: "Ops",
                    price: 580,
                    unit: "din/kg",
                    imgPath: ["images/Mesara/susenaGovedina.jpg"],
                    amount : 1,
                }, {
                    id: 309,
                    name: "Svinjske kocke",
                    dec: " s",
                    price: 450,
                    unit: "din/kg",
                    imgPath: ["images/Mesara/prasetinaKocke.jpg"],
                    amount : 1,

                }, {
                    id: 319,
                    name: "Svinjski ćevapi",
                    dec: " s",
                    price: 250,
                    unit: "din/kg",
                    imgPath: ["images/Mesara/cevapi.jpg"],
                    amount : 1,

                }

            ]
        }
    ]
};


// items
window.onload = function () {
    this.console.log("data loaded");
    window.localStorage.setItem('market', JSON.stringify(market));
    if(window.localStorage.getItem('my-kart') === null)
        window.localStorage.setItem('my-kart', JSON.stringify([]));
};
