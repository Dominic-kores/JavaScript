function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

(fizzBuzz(15));
(fizzBuzz(7));

//---str reverse----//

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("nairobi"));


//---palindrome check----//
const isPalindrome = (str) => {
    const Word = str.toLowerCase();
    const reversed = Word.split("").reverse().join("");
    return Word === reversed;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("hello"));


//--find the largest number in an array---//
const findLargestNumber = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([1, 5, 3, 9, 2]));
console.log(findLargestNumber([-1, -5, -3, -9, -2]));


//--count vowels in a string---//

const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is awesome"));





// Task 2 =================Kenyan county object============================//

//---county objects---//

const nairobi = {
    name: "Nairobi",
    capital: "Nairobi City",
    population: 4397073,
    area: 696,
    borders: ["Kiambu", "Machakos", "Kajiado"]
};

const mombasa = {
    name: "Mombasa",
    capital: "Mombasa City",
    population: 1208333,
    area: 229,
    borders: ["Kwale", "Kilifi", "Taita-Taveta"]
};

const kisumu = {
    name: "Kisumu",
    capital: "Kisumu City",
    population: 877750,
    area: 1000,
    borders: ["Nakuru", "Elgeyo-Marakwet", "Bomet"]
};

//-create formatPopulation function to format population with commas---//

const formatPopulation = (population) => {
    return population.toLocaleString();
};


//--create borderString function to format borders into a string---//
const borderString = (borders) => {
    return borders.slice(0, -1).join(", ") +
        " and " +
        borders[borders.length - 1];
};


//---display county information---//

const displayCounty = (county) => {
    return `
County: ${county.name}
Capital: ${county.capital}
Population: ${formatPopulation(county.population)}
Area: ${county.area} km²
Borders: ${borderString(county.borders)}
`;
};


console.log(displayCounty(nairobi));
console.log(displayCounty(mombasa));
console.log(displayCounty(kisumu));






//Task 3 ==============Matatu routes in Nairobi============================//

const routes = [
  { name: "Route 11 - Eastleigh", fare: 50, stops: ["CBD", "Pangani", "Eastleigh", "Mathare"] },
  { name: "Route 23 - Langata", fare: 80, stops: ["CBD", "Uhuru Gardens", "Langata", "Karen"] },
  { name: "Route 33 - Rongai", fare: 100, stops: ["CBD", "Langata", "Ongata Rongai", "Rimpa"] },
  { name: "Route 34 - South B", fare: 40, stops: ["CBD", "South B", "South C", "Nairobi West"] },
  { name: "Route 44 - Buruburu", fare: 50, stops: ["CBD", "Jogoo Road", "Hamza", "Buruburu"] },
  { name: "Route 46 - Donholm", fare: 60, stops: ["CBD", "Jogoo Road", "Donholm", "Kayole"] },
  { name: "Route 58 - Kikuyu", fare: 120, stops: ["CBD", "Westlands", "Kinoo", "Kikuyu"] },
  { name: "Route 100 - Githurai", fare: 70, stops: ["CBD", "Thika Road", "Roysambu", "Githurai"] },
  { name: "Route 125 - Thika", fare: 200, stops: ["CBD", "Thika Road", "Ruiru", "Juja", "Thika"] },
  { name: "Route 14 - Westlands", fare: 30, stops: ["CBD", "University Way", "Museum Hill", "Westlands"] }
];

//--1. cheapest route---//

const cheapestRoute = (routesList) => {
    return routesList.reduce((cheapest, route) => {
        return route.fare < cheapest.fare ? route : cheapest;
    }, routesList[0]);
};

const cheapest = cheapestRoute(routes);

console.log(
    `Cheapest Route: ${cheapest.name} with fare Ksh ${cheapest.fare}`
);



//--2. routesThroughStop(routes, stop)---//
const routesThroughStop = (routesList, stop) => {
  return routesList.filter(route => route.stops.includes(stop));
};

const stop = "Westlands";
const routesAtStop = routesThroughStop(routes, stop);
console.log(`\nRoutes through ${stop}:`);
routesAtStop.forEach(route => {
  console.log(`- ${route.name} (Fare: Ksh ${route.fare})`);
});


//--3. journeyFare(routes,routeName)---//

const journeyFare = (routesList, routeNames) => {

    let totalFare = 0;

    routeNames.forEach((routeName) => {

        const route = routesList.find(
            route => route.name === routeName
        );

        if (route) {
            totalFare += route.fare;
        }
    });

    return totalFare;
};

const journey = [
    "Route 23 - Langata",
    "Route 14 - Westlands"
];

const fare = journeyFare(routes, journey);

console.log(`Total journey fare: Ksh ${fare}`);



