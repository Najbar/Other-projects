//**Exercise 4. Reverse array**//

document.querySelector('#reverseArrayBtn').addEventListener('click', () => {
	let input = prompt('Please, enter the array length and values of an array').split(' ');	

	const inputCheck = input => {
		if (parseInt(input[0]) != input.length - 1 || !input) {
			input = prompt('Note that the first value is array length. Please, enter values again').split(' ');
			inputCheck(input);
		}
		else {
			reverseArray(input);
		}
	}
	inputCheck(input);
})

const reverseArray = input => {
	let output = input.slice(1).reverse();
	console.log(output.join(' '));
	document.querySelector('#reverseArrayOutput').innerHTML = `${output.join(' ')}`;	
}

//**Exercise 5. Palindrome*//

document.querySelector('#palindromeBtn').addEventListener('click', () => {
	let input = prompt('Please, enter string').toLowerCase();
	if (input) {
		palindrome(input);
	}	
})

const palindrome = input => {
	let output = [];

	for (let i = 0; i < input.length; i++) {		
		if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
		output.push(input.charCodeAt(i));
		}
	}
	if (output.join() == output.reverse().join()) {
		console.log('YES');
		document.querySelector('#palindromeOutput').innerHTML = `YES`;
	}
	else {
		console.log('NO');
		document.querySelector('#palindromeOutput').innerHTML = `NO`;
	}
}

//**Exercise 6. Permutation*//

document.querySelector('#permutationBtn').addEventListener('click', () => {
	let input = prompt('Please, enter two 11 elements arrays').split(' ');
	
	const inputCheck = input => {
		if (input.length != 22) {
			input = prompt('Please, enter two 11 elements arrays (22 elements).').split(' ');
			inputCheck(input);
		}
		else {
			permutation(input);
		}
	}
	inputCheck(input);
})

const permutation = input => {
	let output1 = input.slice(0, 11);
	let output2 = input.slice(11, 22);

	if (output1.sort().join() == output2.sort().join()) {
		console.log('YES');
		document.querySelector('#permutationOutput').innerHTML = `YES`;
	}
	else {
		console.log('NO');
		document.querySelector('#permutationOutput').innerHTML = `NO`;
	}
}

//**Exercise 7. Existing powers of 2*//

document.querySelector('#powersBtn').addEventListener('click', () => {
	input = prompt('Please, enter the list of positive integers').split(' ');
	if (input) {
		powers(input);
	}	
})

const powers = input => {
	
	let binaryString = [], arrayBinary = [], output = [];

	for (let i = 0; i < input.length; i++) {
		binaryString.push(Number(input[i]).toString(2));		
	}

	for (let j = 0; j < 32; j++) {
		let num = 0;
		for (let i = 0; i < binaryString.length; i++) {
			var char = parseInt(binaryString[i].charAt(binaryString[i].length - j - 1))? 1 : 0;		
			num += char;				
		}
		arrayBinary.push(num);
			if (arrayBinary[j]) {
			output.push(Math.pow(2, j));		
		};
	}

	console.log(output.join(' '));
	document.querySelector('#powersOutput').innerHTML = `${output.join(' ')}`
}

//**Exercise 8. Finding primes*//

document.querySelector('#primesBtn').addEventListener('click', () => {
	let T = prompt('Please, enter the number of cases to handle');
	if (T) {
		const inputCheck = interval => {
			interval[0] =  parseInt(interval[0]);
			interval[1] =  parseInt(interval[1]);

			if (interval[0] < 1 || interval[1] < interval[0] || interval [1] > 1000000000 || interval [1] - interval [0] > 100000) {
				interval = prompt('Interval should meet the following conditions: 1 <= m <= n <= 10^9, n – m <= 10^5').split(' ');			
				inputCheck(interval);
			}
			else {
				input.push(interval);
			}
		}

		let input = [], interval = [];
		for (let i = 0; i < T; i++) {
			let interval = prompt('Please, enter the interval').split(' ');
			inputCheck(interval);
		}
		primes(input);
	}	
})

const primes = input => {

	let primesNumber = max => {
	    let store = [];
	    let numberOfPrimes = 0;
	    for (let i = 2; i <= max; ++i) {
	        if (!store [i]) {
	            numberOfPrimes++;
	            for (let j = i << 1; j <= max; j += i) {
	                store[j] = true;
	            }
	        }
	    }
	    return numberOfPrimes;
	}

	let output = [];
	for (let i = 0; i < input.length; i++) {
		output.push(primesNumber(input[i][1]) - primesNumber(input[i][0]));
	}

 	console.log(output.join(' '));
	document.querySelector('#primesOutput').innerHTML = `${output.join(' ')}`
}

//**Exercise 9. Optional power*//

document.querySelector('#optpowerBtn').addEventListener('click', () => {
	input = prompt('Please, enter two integers').split(' ');
	if (input) {
		optPower(input);
	}	
})

const optPower = input => {

	let output;
	let anwser = confirm("Do you like fast cars?");

	if (anwser) {
	output = Math.pow(parseInt(input[0]), parseInt(input[1]));
	}
	else {
	output = Math.pow(parseInt(input[1]), parseInt(input[0]));
	}
	
	console.log(output);
	document.querySelector('#optPowerOutput').innerHTML = `${output}`
}

//**Exercise 10. Fix age*//

document.querySelector('#fixedAgeBtn').addEventListener('click', () => {
	input = prompt('Please, enter ages separated by comma').replace(' ','').replace('[','').replace(']','').split(',');
	if (input) {
		fixedAge(input);
	}	
})

const fixedAge = input => {
	let output = [];
	for (let i = 0; i < input.length; i++) {
		if (parseInt(input[i]) >= 18 && parseInt(input[i]) <= 60 ) {
			output.push(input[i]);
		}
	}

	if (output.length) {
	console.log(output.join(','));
	document.querySelector('#fixedAgeOutput').innerHTML = `${output.join(',')}`
	}
	else {
	console.log('NA');
	document.querySelector('#fixedAgeOutput').innerHTML = `NA`
	}
}

//**Exercise 11. Common digit*//

document.querySelector('#commonDigitBtn').addEventListener('click', () => {
	let N = prompt('Please, declare the number of integers in the array');
	if (parseInt(N) < 2 || parseInt(N) > 20) {
		alert('Number of integers should be between 2 and 20')
	}
	else {
		let input = prompt('Please, enter integers').split(' ');
		if (input.length == parseInt(N)) {
			commonDigit(input);
		}
		else {
			alert('Number of integers is different that declared')
		}	
	}	
})

const commonDigit = input => {

	let string = input.join().replace(/,/g,'');	
	let array = [], output = [];
	for (let i = 0; i < string.length; i++) {
		array[i] = string.charAt(i);
	}

	const maxOccurences = array => {
		array.sort().reverse();	
		
		let a = [], b = [], prev;	    
	    for (let i = 0; i < array.length; i++) {
	        if (array[i] !== prev) {
	            a.push(array[i]);
	            b.push(1);
	        } else {
	            b[b.length-1]++;
	        }
	        prev = array[i];
	    }
	    output = a[b.indexOf(Math.max.apply(Math, b))];
	}

	maxOccurences(array);
	
	console.log(output);
	document.querySelector('#commonDigitOutput').innerHTML = `${output}`;
}

//**Exercise 12. Digit sum*//

document.querySelector('#digitSumBtn').addEventListener('click', () => {
	let N = prompt('Please, declare the number of integers in the array');	
	let input = prompt('Please, enter integers').split(' ');
	if (input.length == parseInt(N)) {
		digitSum(input);
	}
	else {
		alert('Number of integers is different that declared')			
	}	
})

const digitSum = input => {	

	const sumOfDigits = el => {
		sum = 0;
		while (el) {
			sum += el % 10;
			el = Math.floor(el / 10);
			}
		return sum;
	}

	const indicesOfElement = (array, element) => {
		indices = [];
		idx = array.indexOf(element);
		while (idx != -1) {
		    indices.push(idx);
		   	idx = array.indexOf(element, idx + 1);
		}
		return indices;
	}

	let sums = [], valuesOfMax = [];

	for (let i = 0; i < input.length; i++) {
		sums[i] = sumOfDigits(input[i]);		
	}

	let maxSums = Math.max.apply(Math, sums);
	let indicesOfMax = indicesOfElement(sums, maxSums);

	for (let i = 0; i < indicesOfMax.length; i++) {
		valuesOfMax[i] = parseInt(input[indicesOfMax[i]]);
	}

	let maxValue = Math.max.apply(Math, valuesOfMax);
	let output = input.indexOf(maxValue.toString());

	console.log(output);
	document.querySelector('#digitSumOutput').innerHTML = `${output}`;
}