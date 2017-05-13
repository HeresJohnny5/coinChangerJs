var userInput = prompt('Enter a coin amount.');
userInput = parseInt(userInput);

console.log(userInput);

var currency = {
	tenDollars: 0,
	fiveDollars: 0,
	dollar: 0,
	quarter: 0,
	dime: 0,
	nickel: 0,
	penny: 0
};

while(userInput > 0) {	
	if(userInput >= 1000) {
		currency.tenDollars++;
		userInput = userInput - 1000;
	} else if(userInput >= 500) {
		currency.fiveDollars++;
		userInput = userInput - 500;
	} else if(userInput >= 100) {
		currency.dollar++;
		userInput = userInput - 100;
	} else if(userInput >= 25) {
		currency.quarter++;
		userInput = userInput - 25;
	} else if(userInput >= 10) {
		currency.dime++;
		userInput = userInput - 10;
	} else if(userInput >= 5) {
		currency.nickel++;
		userInput = userInput - 5;
	} else if(userInput > 0) {
		currency.penny++;
		userInput = userInput - 1;
	}
}

console.log(currency);