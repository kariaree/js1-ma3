// Question 1
const subtraction = (a, b) => a - b;

// Question 2
const sportGameUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportGameUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        loopThroughGames(json);
    })
    .catch(function(error){
        console.log(error)
        document.location.href="error.html";
    });

function loopThroughGames(json){
    const sportGames = json.results;

    for(let i = 0; i < sportGames.length; i++){
        console.log(sportGames[i].name);
    };
}

// Question 3
const statement = "These cats are outrageous";
const fromattedStatement = statement.replace("cats", "giraffes");

console.log(fromattedStatement);

// Question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")){
    id = params.get("id");
    
    if(id < 10){
        document.location.href="first.html";
    } else {
        document.location.href="second.html";
    }
} else {
    document.location.href= "third.html";
}

// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6
const listOfAnimals = document.querySelector(".animals");
const elephantListItem = document.querySelector(".elephants");

const newListItem = document.createElement("li");
const listItemContent = document.createTextNode("Parrots");
newListItem.className = "parrots";

newListItem.appendChild(listItemContent);
listOfAnimals.appendChild(newListItem);
elephantListItem.before(newListItem);

// Question 7
const gameLink = "https://api.rawg.io/api/games/3801";

fetch(gameLink)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        rating(json);
        console.dir(json);
    })
    .catch(function(error){
        console.log(error);
    });

function rating(json){
    const ratingContainer = document.querySelector(".rating");
    const ratingTextElement = document.createElement("p");
    
    ratingTextElement.innerText = json.rating;
    
    ratingContainer.appendChild(ratingTextElement);
}