

const button = document.getElementById('searchButton');
console.log(button);
button.addEventListener("click", searchByCountry);

const searchField = document.getElementById("searchText");
function clearSearchField(){
    searchField.reset();
}
button.addEventListener("click", clearSearchField);


    async function searchByCountry() {
        // console.log("GET COUNTRY HERE");
        const inputElement = document.getElementById("searchText")
        // console.log(inputElement);
        const userInput = inputElement.value;
        // console.log("UserINput:", userInput);
        try {
        const country = userInput;
        const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

            const response = await axios.get(url);
            console.log(response); // -> countries!
            const countryData = response.data[0];
            const countryFlag = countryData.flag;
            console.log(countryFlag);

            const geography = `${countryData.name} is situated in ${countryData.subregion}.`
            //console.log(geography);

            const population = `It has a population of ${countryData.population} people.`;
            //console.log(population);

            const countryCapital = `The capital is ${countryData.capital} `;
            //console.log(countryCapital);

            const currency = `and you can pay with ${countryData.currencies[0].name}'s.`;
            //console.log(currency);

            const spokenLanguage = `They speak ${countryData.languages[0].name}.`
            ///console.log(spokenLanguage);

            const countryInfo = document.getElementById('countryInfo');
            countryInfo.textContent = geography + ' ' + population + ' ' + countryCapital + ' ' + currency + ' ' + spokenLanguage;
            document.getElementById('flagImage').src = countryFlag;
            // imageFlag.src = countryFlag;

        }
        catch (error) {
            console.log(error);
            console.log(`This country doesn't exist. Please try again.`);
            document.getElementById('countryInfo').textContent = "This country doesn't exist. Please try again.";
            document.getElementById('flagImage').src = "";
        }
    };

function handleKeyPress(event){
    //   console.log(event.code)
    //  console.log("key pressed?", event.code === "Enter");
    if (event.code === "Enter") {
        // searchByCountry().then(r => )
        searchByCountry();
    }
};

const inputVeld = document.getElementById('searchText');
// console.log("Search element", inputVeld);
// inputVeld.addEventListener("click", searchByCountry);
inputVeld.addEventListener('keypress', handleKeyPress);
//console.log("Element?", inputVeld);

