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
var dogs = [];
for (var i = 0; i < animals.length; i++) {
	if (animals[i].species ==== 'dog') {
	dogs.psuh(animals[i]);
	}
}
*/

var isDog = function(animal) {
	return animal.species === 'dog';
};

var dogs = animals.filter(isDog);

var notDogs = animals.filter(function(animal) {
	return animal.species !== 'dog';
});

console.log(dogs);
console.log(notDogs);