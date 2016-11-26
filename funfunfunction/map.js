var animals = [
	{ name: 'Fluffy', species: 'dog' },
	{ name: 'bunny', species: 'rabbit' },
	{ name: 'kitty', species: 'cat' },
	{ name: 'barky', species: 'dog' },
	{ name: 'snakey', species: 'snake' },
	{ name: 'barky2', species: 'dog' },
	{ name: 'barky3', species: 'dog' },
];

/*
var names = [];
for (var i = 0; i < animals.length; i++) {
	names.push(animals[i].name);
}
console.log(names);
*/

var deets = animals.map(function(animal){
    return animal.name + ' is a ' + animal.species;
});
// ES6 arrow functions
//var names = animals.map(function(animal){ return animal.name;});
//var names = animals.map((animal) => return animal.name;);
var names = animals.map(animal => animal.name);

console.log(names);

console.log(deets);