var BigNumber = require('big-number');

//private info. prime numbers
const p = 17
const q = 19

//public info
const n = p * q
const e = 7 	
	// e is an integer
	// e is not not a factor of n
	// 1 < e < (p-1)(q-1)

// the message
const message = 72

// encrypt message
// 72^7 % 323 = 13
const encryptedMessage = Math.pow(message,e) % n
console.log(encryptedMessage) // 13

// find d
// 7 * d % (p-1)(q-1) = 1
let d = 1
while ( (7 * d) % ((p-1)*(q-1)) !== 1 ){
	d++
}
console.log(d) // 247


//decrypt message
// 13^247 % 323
const decryptedMessage = BigNumber(encryptedMessage).pow(d).mod(n)
console.log(Number(decryptedMessage.number.reverse().join('')))



