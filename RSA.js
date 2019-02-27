var BigNumber = require('big-number');

//private info. prime numbers
const p = 11
const q = 17
console.log('my private info', {p,q})

//public info
const n = p * q
const e = 3	
	// https://brilliant.org/wiki/relatively-prime/
	// e is an integer
	// e is not not a factor of n
	// 1 < e < (p-1)(q-1)
console.log('my public info', {e, n})

/*
find d, the private key
find the modular inverse d of e modulo ((p-1)*(q-1))
(d * e) mod ((p-1)*(q-1)) === 1
*/
let d = 1
while ((d * e) % ((p-1)*(q-1)) !== 1) {
	d++
}
console.log('my private key', {d})


// the message
const message = 72
console.log('users creates message', message)

// encrypt message
const encryptedMessage = Math.pow(message,e) % n
console.log('user encrypts message with my public key', {encryptedMessage})


//decrypt message
const decryptedMessage = BigNumber(encryptedMessage).pow(d).mod(n)
console.log('i use priv key to decrypt message', {decryptedMessage: Number(decryptedMessage.number.reverse().join(''))})
