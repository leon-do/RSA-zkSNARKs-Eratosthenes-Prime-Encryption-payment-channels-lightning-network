// source: https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/
const BigNumber = require('big-number');


//private key must be prime numbers 
// IS THIS THE TOXIC WASTE??
const p = 17
const q = 19

//public key
const n = p * q
const e = 7       // a some random prime between 1 and (n-1)





// ======= PROOVE I KNOW message1 AND message2 WITHOUT SHOWING IT =======
const message1 = 4 // or message1 can be '{senderBalance: 10, recieverBalance: 0}'
const message2 = 3 // or message2 can be '{senderBalance: 0, recieverBalance: 10}'






// ======= ENCRYPT THE MESSAGE =======
// encryptedMessage1
const encryptedMessage1 = RSA_Encrypt(message1)
console.log('encryptedMessage = ', encryptedMessage1)

// encryptedMessage2
const encryptedMessage2 = RSA_Encrypt(message2)
console.log('encryptedMessage = ', encryptedMessage2)

// multiply encrypted messages
const multipliedEncryptedMessage = encryptedMessage1 * encryptedMessage2
console.log('multipliedEncryptedMessage = ', multipliedEncryptedMessage)



// ======= 'MINER' RECIEVES MESSAGE AND VERIFIES THE MATH ======= 
const randomInt = Math.floor(Math.random() * 10)
// THE ZERO KNOWLEDGE PROOF (a * b) % n ≡ c % n 
if ( encryptedMessage1 * encryptedMessage2 % randomInt === multipliedEncryptedMessage % randomInt ) {
	console.log('sender knows the message!'.toUpperCase())
}







function RSA_Encrypt (message) {
	const encryptedMessage = Math.pow(message,e) % n
	return encryptedMessage
}


// remove the toxic waste to prevent this???
function RSA_Decrypt (encryptedMessage) {
	let d = 1
	while ( (e * d) % ((p-1)*(q-1)) !== 1 ){
		d++
	}
	const decryptedMessage = BigNumber(encryptedMessage).pow(d).mod(n)
	return Number(decryptedMessage.number.reverse().join(''))
}



