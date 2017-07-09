// Simple Sieve of Erathosthenes algo

let arr = []
let primeArr = []

//create numbers 2 through 50
for (let i = 2; i <= 50; i++){
	arr.push(i)
}

// replace divisible numbers with ''
for (let currentIndex = 0; currentIndex < arr.length; currentIndex++){
	for (let nextIndex = currentIndex + 1; nextIndex < arr.length; nextIndex++){
		if(arr[nextIndex] % arr[currentIndex] === 0){
			arr[nextIndex] = ''
		}
	}
}

// filter out the ''
for (let index = 0; index < arr.length; index++){
	if (arr[index] !== ''){
		primeArr.push(arr[index])
	}
} 

console.log(primeArr)