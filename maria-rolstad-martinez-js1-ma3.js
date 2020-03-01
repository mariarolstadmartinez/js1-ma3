// question 1
const subtraction = (a, b) => a - b;

// question 2

const url = "https://api.rawg.io/api/games?genres=sports";

fetch (url)
    .then(function(response){
        return response.json();
    })
    then(function(json){
        for(let i = 0; i < json.results.length; i++){
            console.log(json.results[i].name);}
    })
    .cath(function(error){
        document.loctation.href = "error.html";
    })


// question 3

let catText = "These cats are oustrageous.";
catText = catText.replace("cats","giraffes");

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    iserId = params.get("userId");
}

if (userId < 10) {
    document.location.href("first.html");
} else if (userId >= 10) {
    document.location.href = "second.html";

} else {
    document.location.href = "third.html"
};

// question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
    container.removeChild(button);


// question 6
const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");

const addParrot = document.createElement("li");
addParrot.className = "parrot";
addParrot.innerText = "Parrot";

cows.after(addParrot);


// question 7

const url2 = "https://api.rawg.io/api/games?genres=sports";

fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function(error){
        console.dir (error);
    });


