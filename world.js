// 1. Maak een nieuwe HTML-pagina aan en link daar naartoe vanaf de home-pagina.
// Maak ook een nieuw JavaScript bestand aan en link die aan de nieuwe pagina. Koppel ook het bestaande CSS bestand hieraan.
//     [x] maak een html pagina aan: world_index.html
//     [x] link daar naartoe vanaf de home-pagina: <a id="worldMap" href="world_index.html">worldMap</a>
//     [x] maak een nieuw JS bestand aan: world.js
//     [x] koppel CSS met nieuw JS bestand

// 2. Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.
//     [x] Maak een functie die alle data van de landen ophaalt
//     [x] maak een get request en haal de API binnen
//     [x] de functie sorteert op grootte van de populatie van laag naar hoog

// sla de referentie op naar ons 'anker' element, de <ul> met id everyCountry
const listOfCountries = document.getElementById("everyCountry");

async function getCountryInfo() {
  try {
        const responseCountries = await axios.get("https://restcountries.eu/rest/v2/all");
            console.log(responseCountries);

            const { data } = responseCountries;
            // console.log(data);
        //
        // for (let i = 0; i < data.length; i++) {
        //     // console.log(data[i].name);
        //    //document.getElementById("everyCountry").textContent = data[i].name;
        // }

      data.map((country) => {
          const { flag, name, region, population } = country;

      const countryRegion = region;

        // mijn pogingen:
        // const countries = data[i].name;
        // const flagOfCountries = data[i].flag;
        // const population = data[i].population;
        //      console.log(countries);
        //      console.log(flagOfCountries);
        //     console.log(population);
        // const countryFlag = document.getElementsByClassName("flagOfCountries").src = flagOfCountries;
        // const container = getElementbyId("listOfCountriesFlags");
        // const listOfCountries = document.getElementsByClassName("eachCountry");
        // const listOfFlags = document.getElementsByClassName("flagOfCountries");

        const allCountriesFlags = document.createElement('li');
        allCountriesFlags.setAttribute('class', 'eachCountry');

        const flagsOfCountry = document.createElement('img')
        flagsOfCountry.setAttribute('src', flag);
        flagsOfCountry.setAttribute('class',"flagOfCountries");
        allCountriesFlags.appendChild(flagsOfCountry);    // <img> aan ons <li>'eachCountry' element toevoegen

        const countryNames = document.createElement('span');
        countryNames.textContent = name;
        countryNames.setAttribute('id',"nameCountry")
        allCountriesFlags.appendChild(countryNames);

        const countriesByPopulation = data.sort((a, b) => {
                return a.population - b.population;
            });
            console.log(countriesByPopulation);

        const showPopulation = document.createElement('p');
        showPopulation.setAttribute('class', 'population');
        showPopulation.textContent = `This country has a population of ${population}`;
        allCountriesFlags.appendChild(showPopulation); // ul element toevoegen aan allCountriesFlags:li element

        allCountriesFlags.addEventListener('click', () => {
              toggleVisibility(showPopulation);
          });

          // allCountriesFlags.addEventListener('click', () => {
          //     toggleVisibility(showPopulation)
          // });

            // const population = document.getElementById('countryPopulation');
            // population.textContent = countriesByPopulation;
            // population.createElement("li");
            // population.appendChild("li");
            // document.getElementById('flagOfCountries').src = flagOfCountries;

          //  allCountriesFlags:li aan <ul> toevoegen
          listOfCountries.appendChild(allCountriesFlags);
      });
        // console.log(data);
      } catch (error) {
      document.getElementsByClassName("eachCountry").textContent = "Something went wrong.";
      document.getElementsByClassName("flagOfCountries").src = "";
  }
}
getCountryInfo(); // roep functie aan

// function toggleVisibility(populationElement) {
//     populationElement.classList.toggle('visible');
// };

// 3. Zorg ervoor dat er een lijst met land-namen en de bijbehorende vlag in de DOM wordt geplaatst.
// Gebruik hierbij destructuring om de properties aan te spreken.
// [x] name of countries zit in variable country
// pogingen:
// const countries = responseCountries.data[i].name;
// document.getElementById("everyCountry");
// const containerFlagAndCountries = flagOfCountries + countries;
// const containerFlagAndCountries = document.getElementById("everyCountry");

// 4. Plaats de landkaart world_map.png (te vinden in de assets map) bovenaan de pagina.
// [x] copy and place img in html

// 5. De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt.
// [x] Maak hier een aparte functie voor.

// Een land ligt altijd in één van de volgende vijf contintenten, maar een uitzondering kan voorkomen:
// Africa: blauw
// Americas: groen
// Asia: rood
// Europe: geel
// Oceania: paars
// Tip: gebruik de Color Picker extensie om erachter te komen welke kleuren er op de afbeelding staan.
// Dit snap ik nog niet helemaal:
// function getRegionClass(countryRegion) {
//     switch (countryRegion) {
//         case 'Africa':
//             return 'blue';
//         case 'Americas':
//             return 'green';
//         case 'Asia':
//             return 'red';
//         case 'Europe':
//             return 'yellow';
//         case 'Oceania':
//             return 'purple';
//         default:
//             return 'default';
//     }
// }

// 6. Bonus: Zet een event listener op elk land, zodat als de gebruiker op dat land klikt, de populatie eronder tevoorschijn komt.
//     Zorg er ook voor dat als de gebruiker op een land klikt waarbij deze informatie al zichtbaar is, de informatie weer verdwijnt.
//     Tip: je hebt een unieke ID nodig voor elk tekst-element met populatie-informatie

function toggleVisibility(populationElement) {
    populationElement.classList.toggle('visible');
}

// countryNames.addEventListener("click",() => {
//     console.log("werkt");
//     //showPopulation.textContent = `This country has a population of ${population}`;
// });
// const populationOfCountries = document.getElementsByClassName("eachCountry");
// <li class="eachCountry"></li>


// 7. Bonus: Zorg ervoor dat de styling aansluit bij de styling op de home-pagina

