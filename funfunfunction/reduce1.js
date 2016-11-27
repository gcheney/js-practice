var orders = [	
    { amount: 250 },
    { amount: 300 },
    { amount: 400 },
    { amount: 500 },
    { amount: 350 },   
];

var total = orders.reduce(function(sum, order) {
	return sum += order.amount;
}, 0);

console.log(total);

var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}

console.log(totalAmount);
