
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
                    desc: "Domaći koziji sir.",
                    price: 350,
                    unit: "din/kg",
                    imgPath: ["images/Mlekara/beliMekiSir.jpg"],
                    onStock: 15,
                    discount: {
                        name: "20%",
                        value: 0.2
                    },
                    amount: 1,
                },
                {
                    id: 567,
                    name: "Gorgonzola",
                    desc: "Domaći sitan i punomasni sir od krave",
                    price: 740,
                    unit: "din/kg",
                    onStock: 15,
                    discount: { name:"", value: 0},
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
                    desc: "Livadski med sa ispaša donje Srbije. ",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discount: { name:"", value: 0},
                    imgPath: ["images/Med/livadski.jpg"],
                    amount: 1,
                }, {
                    id: 368,
                    name: "Med od lipe",
                    desc: "Jedna od najčešcih medova i koji treba biti zastupljen u svakom domaćinstvu.",
                    price: 640,
                    unit: "din/kg",
                    onStock: 10,
                    discount: { name:"", value: 0},
                    imgPath: ["images/Med/lipa.jpg"],
                    amount: 1,
                }, {
                    id: 369,
                    name: "Med od kestena",
                    desc: "Med od kestena sa planine i vrcan na starinski način. U pitanju je proslogodišnja berba.",
                    price: 780,
                    unit: "din/kg",
                    onStock: 10,
                    discount: {
                        name: "10%",
                        value: 0.1
                    },
                    imgPath: ["images/Med/kesten.jpg"],
                    amount: 1,
                }, {
                    id: 370,
                    name: "Med od borovih iglica",
                    desc: "Med crvenkaste boje prijatnog ukusa i mirisa. Dostava na kućnu adresu i po dogovoru.",
                    price: 900,
                    unit: "din/kg",
                    onStock: 10,
                    discount: { name:"", value: 0},
                    imgPath: ["images/Med/borIglice.jpg"],
                    amount: 1,
                }, {
                    id: 371,
                    name: "Med od bagrema",
                    desc: "Prirodni proizvod koji pčele poriyvode od nektara bagremovog cveta. Blagog ukusa i nežnog mirisa.",
                    price: 740,
                    unit: "din/kg",
                    onStock: 10,
                    discount: {
                        name: "10%",
                        value: 0.1
                    },
                    imgPath: ["images/Med/bagrem.jpg"],
                    amount: 1,
                },


                {
                    id: 372,
                    name: "Med od maslacka",
                    desc: "Nije u pitanju još jedan pčelinji proizvod. Ovde se zapravo radi o produktu čiji je glavni sastojak ova poznata biljka, koja je jedan od vesnika proleća i buđenja prirode. Veoma je koristan za detoksikaciju organizma, ali i kao lek protiv respiratornih infekcija, za jačanje imuniteta",
                    price: 540,
                    unit: "din/kg",
                    onStock: 10,
                    discount: { name:"", value: 0},
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
                    desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
                    price: 700,
                    unit: "din/kg",
                    onStock: 15,
                    discount: { name:"", value: 0},
                    imgPath: ["images/Mesara/slanina.jpg"],
                    amount: 1,
                }, {
                    id: 209,
                    name: "Sušena govedina",
                    desc: "Sušena u periodu između 4-5 nedelja. Domaćinski kvalitet.",
                    price: 580,
                    unit: "din/kg",
                    onStock: 15,
                    discount: {
                        name: "20%",
                        value: 0.2
                    },
                    imgPath: ["images/Mesara/susenaGovedina.jpg"],
                    amount: 1,
                }, {
                    id: 309,
                    name: "Svinjske kocke",
                    desc: "Hladno predjelo od svinje.",
                    price: 450,
                    unit: "din/kg",
                    onStock: 15,
                    discount: {
                        name: "30%",
                        value: 0.3
                    },
                    imgPath: ["images/Mesara/prasetinaKocke.jpg"],
                    amount: 1,

                }, {
                    id: 319,
                    name: "Svinjski ćevapi",
                    desc: "Dobri stari tradicionalni ćevapi. Srpska kuhinja prosto ne može da se zamisli bez njih. Njihov ukus mami sve obožavatelje roštilja.",
                    price: 250,
                    unit: "din/kg",
                    onStock: 15,
                    discount: { name:"", value: 0},
                    imgPath: ["images/Mesara/cevapi.jpg"],
                    amount: 1,

                }

            ]
        },{
            name: "Stolarija",
            items:[
                {
                    id: 425,
                    name: "Drveni prozori",
                    desc: "Drvo kao prirodni materijal ima prednost nad PVC-om ponajviše zbog ekološkog faktora. Česta je kombinacija drveta s unutrašnje strane prozorskog okvira, dok se spoljna izrađuje od aluminijuma. Mogućnost izrade prozora po meri.",
                    price: 450,
                    unit: "din/m^2",
                    onStock: 2,
                    discount: {name:"", value:0},
                    imgPath: ["images/Stolarija/prozori1.jpg","images/Stolarija/prozori2.jpg","images/Stolarija/prozori3.jpg","images/Stolarija/prozori4.jpg"],
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
