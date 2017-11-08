var NodeRSA = require('node-rsa');
var key = new NodeRSA({b: 512});

// the transactions
var pre_tx = 'sndr:10, recvr:0'
var post_tx  = 'sndr:0, recvr:10'

// encrypted transactions
var encrypted_pre_tx = parseInt(key.encrypt(pre_tx, 'hex'), 16)
var encrypted_post_tx = parseInt(key.encrypt(post_tx, 'hex'), 16)

console.log('encrypted_pre_tx: ',  encrypted_pre_tx)
console.log('encrypted_pre_tx: ',  encrypted_post_tx)

// (a b) % n ≡ c % n
var n = Math.round(Math.random() * 10)
if ( (encrypted_pre_tx * encrypted_post_tx) % n === encrypted_pre_tx * encrypted_post_tx % n) {
	console.log('ZERO KNOWLEDGE PROOFED!')
}
