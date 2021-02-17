// Odracht 1.
// ## 1/1. De gebruiker kan de knop zien
// - [x] Zoek knop maken (HTML)
// - [x] id meegeven -> om met javascript te selecteren (HTML)

// const button = document.getElementById('searchButton');
//console.log(button);

// ## 1/2. De gebruiker gaat klikken
// - [x] Knop selecteren (getElementById, opslaan in variabele)
// - [x] Event listener & Event Handler toevoegen aan knop (addEventListener, click, async functie)

// button.addEventListener("click", searchByCountry);

// ## 1/3. Wanneer de gebruiker klikt wordt mijn async function aangeroepen
// - [x] Variable met maken country -> "Belgie" (hardcoden)
//     - [x] Variabele Url maken -> https://restcountries.eu/rest/v2/name/${country}?fullText=true
// - [x] axios.get(url)
// - [x] await toevoegen
// - [x] response -> checken

    async function searchByCountry() {
        // console.log("GET COUNTRY HERE");
        const inputElement = document.getElementById("searchText")
        // console.log(inputElement);
        const userInput = inputElement.value
        // console.log("UserINput:", userInput);

        const country = userInput; // hardcode straks dynamisch
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
        const response = await axios.get(url);
        console.log(response); // -> countries!
        // je krijgt een array - niet een object
        // console.log(response.data[0].name);

        const countryData = response.data[0];
        // const countryData = response.data;
        //  console.log(response.data.name);

// Opdracht 2.Maak op basis van de response de volgende string en log dit in de console: `[country-naam] is situated in [subarea-name]. It has a population of [amount] people.`
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryName, countryArea, countryPopulation // 1x variable gemaakt
// - [x] template string maken met -> `${countryName} ... etc`
        // console.log(countryData);

        const countryFlag = countryData.flag;
        console.log(countryFlag);

        const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryData.population} people.`;
        console.log(geography);

//Opdracht 3. Maak op basis van de response de volgende string en log dit in de console: `The capital is [city]`
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabelen maken: countryCapital
// - [x] template string maken met -> `${countryCapital} ... etc`

        const countryCapital = `The capital is ${countryData.capital} `;
        console.log(countryCapital);

// Opdracht 4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
// 1 valuta: `and you can pay with [currency]'s`
// 2 valuta's: `and you can pay with [currency]'s and [currency]'s`
//  stappenplan:
// - [x] Goed in de data kijken, waar zit deze info: -> loggen
// - [x] variabele maken, en de currencies uit de data daaraan toekennen
// - [x] functie maken -> formatCurrencies
//     - [x] aanroepen -> logje in de functie zetten om te checken
// - [x] input: "currencies" -> parameter(s) toevoegen en argument(en) meegeven
// - [x ] parameter loggen om te kijken of de input hebben
// - [ ] if
//     - [ ] 1 currency -> `and you can pay with [currency]'s`
//     - [ ] 2 currencies -> `and you can pay with [currency]'s and [currency]'s`
//     - [ ] return de waarde `and you can pay with [currency]'s and [currency]'s`

        const currency = `and you can pay with ${countryData.currencies[0].name}'s.`;
            console.log(currency);

        // de uitwerking door Rein werkt niet bij  mij :(
        // const currencies = countryData.currencies;
        // formatCurrencies(currencies);
        // // console.log(currencies);
        // // hier definieren
        // // hier aanroepen -> currencies is in scope!
        // // const currencyString = formatCurrencies(currencies); // argument -> waarde invoeren
        // //  console.log(currencies);
        //
        // function formatCurrencies(currencyArray){
        //     const currencyOne = currencyArray[0]
        //     const currencyTwo = currencyArray[1]
        //     console.log(currencyOne);
        //
        //     // is currency length -> 1
        //     // console.log("LENGTH 1?", currencyArray.length === 1) // true
        //     // console.log("LENGTH 2", currencyArray.length > 1) // false
        //     if(currencyArray.length === 1){
        //         return `and you can pay with ${currencyOne.name}'s`
        //     }
        //     if (currencyArray.length > 1){
        //         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
        //     }
        //     // length -> 2
        //     // console.log("WAT ARE THE CURRENCIES", currencyOne, currencyTwo)
        // }
        //     console.log(formatCurrencies);



        // // hier definieren
        // function formatCurrencies(currencyArray) { // parameter  -> placeholder
        //     // console.log("INPUT?", currencyArray);
        //     for (const currency of currencyArray) {
        //         // console.log("What will happen?", currency);
        //         return `and you can pay with ${countryData.currencies[0]}'s and ${countryData.currencies[1]}'s`
        //     }
        // }
        // in deze functioen hier aanroepen? -> X fout -> currencies is niet in scope :( -> in de asynch function aanroepen


// Odracht 5. Check of alles nog steeds werkt als je de gegevens over _Aruba_ of _Duitsland_ ophaalt!
// met Aruba werkt het wel maar met Duitsland/Germany krijg ik een error
// voor de tweede keer Germany wordt ook weergegeven :)

// Opdracht 6. _Bonusopdracht:_ Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
// * 1 taal: `They speak [language]`
// * 2 talen: `They speak [language] and [language]`
// * 3 talen: `They speak [language], [language] and [language]`

        const spokenLanguage = `They speak ${countryData.languages[0].name}.`
            console.log(spokenLanguage);



        //     if (languages.length === 1) {
        //     return `They speak ${countryData.languages[0].name}.`
        // } else if (languages.length > 1 ) {
        //     return `They speak ${countryData.languages[0].name} and ${countryData.languages[1].name}`
        //     } else
        //     return `They speak ${countryData.languages[0].name} and ${countryData.languages[1].name} and ${countryData.languages[2].name}`

        // :( logt alleen optie 1 als er 1 taal gesproken wordt


// Opdracht 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:
//
//     ```
// [IMAGE: flag]
// [country-name]
// [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
// The capital is [city] and you can pay with [currency]'s
// They speak [language], [language] and [language]
// ```
        const countryInfo = document.getElementById('countryInfo');
        countryInfo.textContent = geography + ' ' + countryCapital + ' ' + currency + ' ' + spokenLanguage;
        document.getElementById('flagImage').src = countryFlag;
        // imageFlag.src = countryFlag;
    }
// Opdracht 8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt
// aangeroepen waarmee de gegevens over `België` worden opgehaald.
// - [x] maak een inputveld in HTML: id="searchText"
// - [x] getElementById- inputVeld selecteren
// - [x] als de gebruiker op enter drukt: addEventlistener als user op enter drukt gegevens worden opgehaald
// - [x] "keypress"
// - [x] was de key enter?
// - [x] functie wordt aangeroepen waarmee de gegevens over `België` worden opgehaald

function handleKeyPress(event){
      //   console.log(event.code)
     //  console.log("key pressed?", event.code === "Enter");
    if(event.code === "Enter") {
        searchByCountry()
    }
}

// Opdracht 9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.
// Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt.
// _Tip:_ gebruik een globale variabele.

// - [x] waarde uit de inputveld halen: selecteren by getElementById
// - [x] & .value loggen
// - [x] gebruikt die  als query voor het GET request
// - [x] als de gebruiker op enter drukt, of op de zoek-knop klikt

const button = document.getElementById('searchButton');
button.addEventListener("click", searchByCountry);

const inputVeld = document.getElementById('searchText');
// console.log("Search element", inputVeld);
// inputVeld.addEventListener("click", searchByCountry);
inputVeld.addEventListener('keypress', handleKeyPress);
//console.log("Element?", inputVeld);

// 10. Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht.

// 11. Zorg ervoor dat er altijd maar één zoekresultaat op de pagina staat.

// Opdracht 12. Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding in de DOM wordt gezet.
// _Tip:_ als er een ongeldige API call wordt gemaakt, zal de response in het `catch` blok terecht komen.

const errorWarning = document.getElementById('warningMsg');
inputVeld.addEventListener('keyup', checkCountry);

function checkCountry(e) {
    // Wanneer de waarde een @ bevat willen we de melding WEL tonen
    if (e.target.value !== searchByCountry) {
        errorWarning.textContent = 'Check again your spelling. Is it possible it is not a country? Refresh your geography knowledge!';
    } else {
        // in alle andere gevallen tonen we de melding NIET
        errorWarning.textContent = '';
    }
}