
var market = {
    bestBuy: [
        {
            id: 7205,
            name: "Димљена сланина",
            desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
            price: 700,
            unit: "дин/кг",
            onStock: 15,
            discount: { name: "50%", value: 0.5 },
            imgPath: ["images/Mesara/slanina.jpg"],
            amount: 1,
        },
        {

            id: 7207,
            name: "Cvarci",
            desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
            price: 340,
            unit: "дин/кг",
            onStock: 15,
            discount: { name: "60%", value: 0.6 },
            imgPath: ["images/Mesara/paprikacvarci.jpeg"],
            amount: 1,
        },
        {
            id: 7345,
            name: "Koziji sir",
            desc: "Domaći koziji sir.",
            price: 350,
            unit: "дин/кг",
            imgPath: ["images/Mlekara/beliMekiSir.jpg"],
            onStock: 15,
            discount: {
                name: "40%",
                value: 0.4
            },
            amount: 1,
        },
        {
            id: 7367,
            name: "Livadski med",
            desc: "Livadski med sa ispaša donje Srbije. ",
            price: 740,
            unit: "дин/кг",
            onStock: 10,
            discount: { name: "80%", value: 0.8},
            imgPath: ["images/Med/livadski.jpg", "images/Med/maslacak.jpg"],
            amount: 1,
        },


    ],
    categories: [
        {
            name: "Млекара",
            urlName: "mlekara",
            images: ["images/Mlekara/fotka-kategorije.jpg"],
            details: "Конзумирање млечних производа на много начина доприноси здрављу - а најважније је да људи, који током живота уносе много млечних производа, манје пате од смањења коштане масе и густине костију, а самим тиме и од остеропотозе и других болести коштаног система." ,
            items: [
                {
                    id: 345,
                    name: "Koziji sir",
                    desc: "Domaći koziji sir.",
                    price: 350,
                    unit: "дин/кг",
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
                    unit: "дин/кг",
                    onStock: 15,
                    discount: { name: "", value: 0 },
                    imgPath: ["images/Mlekara/gorgonzola1.jpg", "images/Mlekara/gorgonzola2.jpg", "images/Mlekara/gorgonzola3.jpg"],
                    amount: 1,
                }
            ]
        }, {
            name: "Мед",
            urlName: "med",
            details : "Pod medom se podrazumeva gusta, slatka, sirupasta ili kristalasta materija, bledožute do tamnomrke boje, specifičnog mirisa i ukusa, proizvod pčela medarica (Apis mellifica L. i Apis dorsata Fabricius). Med potiče od nektara i eksudacionih proizvoda bilja, koje pčele sakupljaju, prerađuju i unose u saće.Naziv med može da nosi samo čist proizvod pčela. Međutim, proizvod dobiven u periodu prihranjivanja šećerom ili slatkim supstancama, osim meda, prema propisima mora nositi oznaku „šećerni med“. Isto tako pod nazivom MED ne mogu se stavljati u promet ni karamelisani proizvodi slični medu, niti med koji sadrži više od 22% vode, kao i med koji sadrži više od 5% saharoze (rapin ili trščani šećer).",
            images: ["images/Med/fotka-kategorije.jpg"],
            items: [
                {
                    id: 367,
                    name: "Livadski med",
                    desc: "Livadski med sa ispaša donje Srbije. ",
                    price: 540,
                    unit: "дин/кг",
                    onStock: 10,
                    discount: { name: "10%", value: 0.1 },
                    imgPath: ["images/Med/livadski.jpg", "images/Med/maslacak.jpg"],
                    amount: 1,
                }, {
                    id: 368,
                    name: "Med od lipe",
                    desc: "Jedna od najčešcih medova i koji treba biti zastupljen u svakom domaćinstvu.",
                    price: 640,
                    unit: "дин/кг",
                    onStock: 10,
                    discount: { name: "", value: 0 },
                    imgPath: ["images/Med/lipa.jpg"],
                    amount: 1,
                }, {
                    id: 369,
                    name: "Med od kestena",
                    desc: "Med od kestena sa planine i vrcan na starinski način. U pitanju je proslogodišnja berba.",
                    price: 780,
                    unit: "дин/кг",
                    onStock: 0,
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
                    unit: "дин/кг",
                    onStock: 10,
                    discount: { name: "", value: 0 },
                    imgPath: ["images/Med/borIglice.jpg"],
                    amount: 1,
                }, {
                    id: 371,
                    name: "Med od bagrema",
                    desc: "Prirodni proizvod koji pčele poriyvode od nektara bagremovog cveta. Blagog ukusa i nežnog mirisa.",
                    price: 740,
                    unit: "дин/кг",
                    onStock: 0,
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
                    unit: "дин/кг",
                    onStock: 10,
                    discount: { name: "", value: 0 },
                    imgPath: ["images/Med/maslacak.jpg"],
                    amount: 1,
                }
            ]
        }, {
            name: "Месара",
            urlName: "mesara",
            images: ["images/Mesara/fotka-kategorije.jpg"],
            details:"",
            items: [{

                id: 206,
                name: "Pekarski cvarci",
                desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
                price: 320,
                unit: "дин/кг",
                onStock: 15,
                discount: { name: "", value: 0 },
                imgPath: ["images/Mesara/cvarci.jpg"],
                amount: 1,
            }, {

                id: 207,
                name: "Cvarci",
                desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
                price: 340,
                unit: "дин/кг",
                onStock: 15,
                discount: { name: "", value: 0 },
                imgPath: ["images/Mesara/paprikacvarci.jpeg"],
                amount: 1,
            },
            {
                id: 205,
                name: "Dimljena slanina",
                desc: "Nema štetne sastojke jer se pre sušenja izvesno vreme ostavlja da odstoji samo u soli ili salamuri, pa nije nezdrava",
                price: 700,
                unit: "дин/кг",
                onStock: 15,
                discount: { name: "", value: 0 },
                imgPath: ["images/Mesara/slanina.jpg"],
                amount: 1,
            }, {
                id: 209,
                name: "Sušena govedina",
                desc: "Sušena u periodu između 4-5 nedelja. Domaćinski kvalitet.",
                price: 580,
                unit: "дин/кг",
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
                unit: "дин/кг",
                onStock: 0,
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
                unit: "дин/кг",
                onStock: 15,
                discount: { name: "", value: 0 },
                imgPath: ["images/Mesara/cevapi.jpg"],
                amount: 1,

            }

            ]
        }
    ]
};

// items
window.onload = function () {

    window.localStorage.setItem('market', JSON.stringify(market));
    if (window.localStorage.getItem('my-kart') === null)
        window.localStorage.setItem('my-kart', JSON.stringify([]));
};
