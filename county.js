//----Kenyan county object-------//

// const displayCounty = {
//   name: "Nairobi",
//   capital: "Nairobi City",
//   population: 4397073,
//   area: 696, // km²
//   borders: ["Kiambu", "Machakos", "Kajiado"]
// };
// console.log(`County: ${displayCounty.name}`);
// console.log(`Capital: ${displayCounty.capital}`);
// console.log(`Population: ${displayCounty.population}`);
// console.log(`Area: ${displayCounty.area} km²`);
// console.log(`Borders: ${displayCounty.borders.join(", ")}`); 

// //---formatpopulation with commas---//
// const formatPopulation = (population) => {
//   return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };
// console.log(`Formatted Population: ${formatPopulation(displayCounty.population)}`);

// //--borderstring---//
// const borderString = (borders) => {
//   return borders.slice(0, -1).join(", ") + " and " + borders[borders.length - 1];
// };
// console.log(`Nairobi Borders: ${borderString(displayCounty.borders)} `);


// //---second county object---//
// const displayCounty2 = {
//   name: "Mombasa",
//   capital: "Mombasa City",
//   population: 1208333,
//   area: 229, // km²
//   borders: ["Kwale", "Kilifi", "Taita-Taveta"]
// }


// //---formatpopulation with commas---//
// const formatedPopulation = (population) => {
//   return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

// //--borderstring----//

// const borderString2 = (borders) => {
//   return borders.slice(0, -1).join(", ") + " and " + borders[borders.length - 1];
// };

// console.log(`\nCounty: ${displayCounty2.name}`);
// console.log(`Capital: ${displayCounty2.capital}`);
// console.log(`Population: ${displayCounty2.population}`);
// console.log(`Area: ${displayCounty2.area} km²`);
// console.log(`Borders: ${displayCounty2.borders.join(", ")}`); 
// console.log(`Formatted Population: ${formatPopulation(displayCounty2.population)}`);
// console.log(`Mombasa Borders: ${borderString2(displayCounty2.borders)} `);     

// //---Third count object---//
// const displayCounty3 = {
//     name: "Kisumu",
//     capital: "Kisumu City",
//     population: 877750,
//     area: 1000, // km²
//     borders: ["Nakuru", "Elgeyo-Marakwet", "Bomet"]
// };

// const formattedPopulation =(population) => {
//     return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

// //--borderstring---//
// borderString3 = (borders) => {
//     return borders.slice(0, -1).join(", ") + " and " + borders[borders.length - 1];
// };

// console.log(`\nCounty: ${displayCounty3.name}`);
// console.log(`Capital: ${displayCounty3.capital}`);
// console.log(`Population: ${displayCounty3.population}`);
// console.log(`Area: ${displayCounty3.area} km²`);
// console.log(`Borders: ${displayCounty3.borders.join(", ")}`); 
// console.log(`formatted Population: ${formatPopulation(displayCounty3.population)}`);
// console.log(`Kisumu Borders: ${borderString3(displayCounty3 .borders)} `);     






//----Matatu routes in Nairobi----//

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
const cheapestRoute = routes.reduce((cheapest, route) => {
  return route.fare < cheapest.fare ? route : cheapest;
}, routes[0]);

console.log(`\nCheapest Route: ${cheapestRoute.name} with fare Ksh ${cheapestRoute.fare}`);

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
const journeyFare = (routesList, routeName) => {
  const route = routesList.find(route => route.name === routeName);
  return route ? route.fare : null;
};

const routeName = "Route 23 - Langata";
const fare = journeyFare(routes, routeName);
if (fare !== null) {
  console.log(`\nFare for ${routeName}: Ksh ${fare}`);
} else {
  console.log(`\nRoute ${routeName} not found.`);
} ;




