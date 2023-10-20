export async function  getProductes(){
    let datosEncoded=
        [
          {
            "id": 1,
            "Title": "Smartphone Android",
            "preu": 499.99,
            "imatge": "https://exemple.com/imatge1.jpg",
            "stock": 50,
            "categoria": "Mòbils"
          },
          {
            "id": 2,
            "Title": "Ordinador portàtil",
            "preu": 899.99,
            "imatge": "https://exemple.com/imatge2.jpg",
            "stock": 25,
            "categoria": "Portàtils"
          },
          {
            "id": 3,
            "Title": "Televisor 4K",
            "preu": 799.99,
            "imatge": "https://exemple.com/imatge3.jpg",
            "stock": 30,
            "categoria": "Televisors"
          },
          {
            "id": 4,
            "Title": "Auriculars Bluetooth",
            "preu": 59.99,
            "imatge": "https://exemple.com/imatge4.jpg",
            "stock": 100,
            "categoria": "Auriculars"
          },
          {
            "id": 5,
            "Title": "Tablet Android",
            "preu": 299.99,
            "imatge": "https://exemple.com/imatge5.jpg",
            "stock": 40,
            "categoria": "Tablets"
          },
          {
            "id": 6,
            "Title": "Càmera digital",
            "preu": 349.99,
            "imatge": "https://exemple.com/imatge6.jpg",
            "stock": 15,
            "categoria": "Càmeres"
          },
          {
            "id": 7,
            "Title": "Impressora WiFi",
            "preu": 129.99,
            "imatge": "https://exemple.com/imatge7.jpg",
            "stock": 20,
            "categoria": "Impressores"
          },
          {
            "id": 8,
            "Title": "Consola de videojocs",
            "preu": 399.99,
            "imatge": "https://exemple.com/imatge8.jpg",
            "stock": 10,
            "categoria": "Videojocs"
          },
          {
            "id": 9,
            "Title": "Auriculars inalàmbrics",
            "preu": 79.99,
            "imatge": "https://exemple.com/imatge9.jpg",
            "stock": 60,
            "categoria": "Auriculars"
          },
          {
            "id": 10,
            "Title": "Monitor 27 pulgadas",
            "preu": 249.99,
            "imatge": "https://exemple.com/imatge10.jpg",
            "stock": 35,
            "categoria": "Monitors"
          },
          {
            "id": 11,
            "Title": "Teclat Bluetooth",
            "preu": 49.99,
            "imatge": "https://exemple.com/imatge11.jpg",
            "stock": 45,
            "categoria": "Accessoris"
          },
          {
            "id": 12,
            "Title": "Ratolí inalàmbric",
            "preu": 19.99,
            "imatge": "https://exemple.com/imatge12.jpg",
            "stock": 55,
            "categoria": "Accessoris"
          },
          {
            "id": 13,
            "Title": "Llum LED intel·ligent",
            "preu": 29.99,
            "imatge": "https://exemple.com/imatge13.jpg",
            "stock": 70,
            "categoria": "Il·luminació"
          },
          {
            "id": 14,
            "Title": "Altaveus Bluetooth",
            "preu": 69.99,
            "imatge": "https://exemple.com/imatge14.jpg",
            "stock": 40,
            "categoria": "Altaveus"
          },
          {
            "id": 15,
            "Title": "Router WiFi",
            "preu": 79.99,
            "imatge": "https://exemple.com/imatge15.jpg",
            "stock": 30,
            "categoria": "Xarxa"
          },
          {
            "id": 16,
            "Title": "Aire condicionat intel·ligent",
            "preu": 399.99,
            "imatge": "https://exemple.com/imatge16.jpg",
            "stock": 5,
            "categoria": "Electrodomèstics"
          },
          {
            "id": 17,
            "Title": "Ventilador de torre",
            "preu": 59.99,
            "imatge": "https://exemple.com/imatge17.jpg",
            "stock": 25,
            "categoria": "Electrodomèstics"
          },
          {
            "id": 18,
            "Title": "Lavadora de carga frontal",
            "preu": 599.99,
            "imatge": "https://exemple.com/imatge18.jpg",
            "stock": 8,
            "categoria": "Electrodomèstics"
          },
          {
            "id": 19,
            "Title": "Cafetera de espresso",
            "preu": 129.99,
            "imatge": "https://exemple.com/imatge19.jpg",
            "stock": 15,
            "categoria": "Electrodomèstics"
          },
          {
            "id": 20,
            "Title": "Aspiradora robot",
            "preu": 299.99,
            "imatge": "https://exemple.com/imatge20.jpg",
            "stock": 10,
            "categoria": "Electrodomèstics"
          }
        ]
      
      

    let response = await datosEncoded
        return response;
}