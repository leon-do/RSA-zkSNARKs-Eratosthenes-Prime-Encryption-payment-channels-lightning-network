/**
Alice opens a payment channel to Bob, and Bob opens a payment channel to Charlie.
Alice wants to buy something from Charlie for 1000 satoshis.
Charlie generates a random number and generates its SHA256 hash. Charlie gives that hash to Alice.
Alice uses her payment channel to Bob to pay him 1,000 satoshis, but she adds the hash Charlie gave her to the payment along with an extra condition: in order for Bob to claim the payment, he has to provide the data which was used to produce that hash.
Bob uses his payment channel to Charlie to pay Charlie 1,000 satoshis, and Bob adds a copy of the same condition that Alice put on the payment she gave Bob.
Charlie has the original data that was used to produce the hash (called a pre-image), so Charlie can use it to finalize his payment and fully receive the payment from Bob. By doing so, Charlie necessarily makes the pre-image available to Bob.
Bob uses the pre-image to finalize his payment from Alice
*/

const crypto = require('crypto');

// A wants to pay B

// C creates a key and hash
const c_key = Math.random() * Number.MAX_SAFE_INTEGER
const c_hash = crypto.createHash('sha256').update(c_key.toString()).digest('hex')
console.log('c_hash =', c_hash)

/*
C sends c_hash to A
*/

/*
A creates contract
if B provides the c_randomNum, then i'll pay B
*/
function a_contract(_key) {
	if (crypto.createHash('sha256').update(_key.toString()).digest('hex') === c_hash){
		console.log('HASH MATCHES! PAY B')
	} else {
		console.log('HASH DOES NOT MATCH. DO NOT PAY')
	}
}

// C sends B the key.
const b_key = c_key

// B uses the key on contract A
a_contract(b_key)
