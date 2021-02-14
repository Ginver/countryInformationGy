// Odracht 1.
// ## 1/1. De gebruiker kan de knop zien
// - [x] Zoek knop maken (HTML)
// - [x] id meegeven -> om met javascript te selecteren (HTML)

const button = document.getElementById('searchButton');
//console.log(button);

// ## 1/2. De gebruiker gaat klikken
// - [x] Knop selecteren (getElementById, opslaan in variabele)
// - [x] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)

button.addEventListener("click", searchByCountry);

// ## 1/3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen
// - [x] Variable met maken country -> "Belgie" (hardcoden)
//     - [x] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
// - [x] axios.get(url)
// - [x] await toevoegen
// - [x] response -> checken

    async function searchByCountry() {
            console.log("GET COUNTRY HERE");
        const country = "Germany";
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
        const response = await axios.get(url);
            console.log(response); // -> country
        // je krijgt een array - niet een object
        //
        const countryData = response.data[0];
        //const countryData = response.data;
            console.log(response.data[0]);
        //    console.log(response.data.name);

// Opdracht 2.Maak op basis van de response de volgende string en log dit in de console: `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryName, countryArea, countryPopulation
// - [x] template string maken met -> `${countryName} ... etc`

        const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryData.population} people.`;
            console.log(geography);

//Opdracht 3. Maak op basis van de response de volgende string en log dit in de console: `The capital is [city]`
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryCapital
// - [x] template string maken met -> `${countryCapital} ... etc`
        const capital = `The capital is ${countryData.capital}`;
            console.log(capital);


// Opdracht 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
// 1 valuta: `and you can pay with [currency]'s`
// 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
//
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabele maken, en de currencies uit de data daaraan toekennen
// - [ ] functie maken -> formatCurrencies
//     - [ ] aanroepen -> logje in de functie zetten om te checken
// - [ ] input: currencies, parameter(s) toevoegen, argument(en) meegeven
// - [ ] parameter loggen om te kijken of de input hebben
// - [ ] if
//     - [ ] 1 currency -> `and you can pay with [currency]'s`
//     - [ ] 2 currency -> `and you can pay with [currency]'s and [currency]'s`
//     - [ ] return de waarde `and you can pay with [currency]'s and [currency]'s`
//     console.log(response) // countries!!

        const currency = `and you can pay with ${countryData.currencies[0].name}'s`;
        console.log(currency);

        // const currencies = countryData.currencies;
        // console.log(currencies);
        // hier definieren
        // hier aanroepen -> currenties is in scope

    //     formatcurrencies(currencies); // argument -> waarde
    //     //hier definieren
    //     function formatcurrencies(currancyArray) { //parameter -> placeholder
    //         console.log("INPUT:", currancyArray);
    //         return `and you can pay with ${countryData.currencies[0].name}'s and ${countryData.currencies[1].name}'s`;
    //     } // werkt niet

        // if (let i = 0; currencyArray.length < i; i++) {
        //     console.log(`and you can pay with ${countryData.currencies[0].name}'s and ${countryData.currencies[1].name}'s`);
        // }

        // for (const currency of currencies) {
        //  return `and you can pay with ${countryData.currencies[0].name}'s and ${countryData.currencies}'s`;
        // }

    };

// Odracht 5. Check of alles nog steeds werkt als je de gegevens over _Aruba_ of _Duitsland_ ophaalt!
// met Aruba werkt het wel maar met Duitsland/Germany krijg ik een error



