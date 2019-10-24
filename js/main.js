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
                    imgPath: "images/Mlekara/beliMekiSir.jpg"
                },
                {
                    id: 567,
                    name: "Kravlji sir",
                    desc: "Domaći sitan i punomasni sir od krave",
                    price: 140,
                    imgPath: "images/Mlekara/gorgonzola.jpg"
                }
            ]
        },{
            name: "Mesara",
            items: [
                {
                    id: 205,
                    name: "Dimljena slanina",
                    desc: "Opis",
                    price: "700din/kg",
                    imgPath: "images/Mesara/slanina.jpg"
                },{
                    id: 209,
                    name: "Sušena govedina",
                    dec: "Ops",
                    price: "580din/kg",
                    imgPath:"images/Mesara/susenaGovedina.jpg",                    
                },{
                    id: 309,
                    name: "Svinjske kocke",
                    dec:" s",
                    price: " 450din/kg",
                    imgPath: "images/Mesara/prasetinaKocke.jpg"

                },{
                    id: 319,
                    name: "Svinjski ćevapi",
                    dec:" s",
                    price: " 250din/kg",
                    imgPath: "images/Mesara/cevapi.jpg"

                }

            ]
        }
    ]
};


// items
window.onload = function () {
    this.console.log("data loaded");
    window.localStorage.setItem('market', JSON.stringify(market));
};
