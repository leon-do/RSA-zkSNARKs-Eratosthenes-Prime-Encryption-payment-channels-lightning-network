const BigNumber = require('big-number');



//private key must be prime numbers
const p = 17
const q = 19

//public key
const n = p * q
const e = 7       // a some random prime between 1 and (n-1)





// ======= PROOVE I KNOW ANSWER1 AND ANSWER2 WITHOUT SHOWING IT =======
const answer1 = 4
const answer2 = 3






// ======= I ENCRYPT THE MESSAGE =======
// encryptedMessage1
const encryptedMessage1 = RSA_Encrypt(answer1)
console.log('encryptedMessage = ', encryptedMessage1)

// encryptedMessage2
const encryptedMessage2 = RSA_Encrypt(answer2)
console.log('encryptedMessage = ', encryptedMessage2)

// multiply encrypted messages
const multipliedEncryptedMessage = encryptedMessage1 * encryptedMessage2
console.log('multipliedEncryptedMessage = ', multipliedEncryptedMessage)



// ======= USER RECIEVES MESSAGE AND CHECK IF I KNOW THE ANSWER ======= 
const randomInt = Math.floor(Math.random() * 10)
// THE ZERO KNOWLEDGE PROOF (a * b) % n ≡ c % n 
if ( encryptedMessage1 * encryptedMessage2 % randomInt === multipliedEncryptedMessage % randomInt ) {
	console.log('sender knows the answer'.toUpperCase())
}







function RSA_Encrypt (message) {
	const encryptedMessage = Math.pow(message,e) % n
	return encryptedMessage
}

function RSA_Decrypt (encryptedMessage) {
	let d = 1
	while ( (e * d) % ((p-1)*(q-1)) !== 1 ){
		d++
	}

	const decryptedMessage = BigNumber(encryptedMessage).pow(d).mod(n)

	return Number(decryptedMessage.number.reverse().join(''))
}



