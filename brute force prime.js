var BigNumber = require('big-number');


let number = 3
let i = BigNumber(number).minus(1).number.reverse().join('')


while (BigNumber('23423423424234').minus(number) > 1){

    // console.log('\n\n\n')

    let i = 2
    // console.log('i outside: ', i)
    let isPrime = true

    while (BigNumber(number).minus(i) > 1){
        // console.log('i inside',i)

        let modded = BigNumber(number).mod(i).number
        // console.log('number ', number)
        // console.log(`${number} % ${i} = ${BigNumber(number).mod(i).number}`)

        if (BigNumber(number).mod(i).number == 0){
            isPrime = false
            break
            // ^ the only piece of logic I didn't have to console...

        }

        i = BigNumber(i).plus(1).number.reverse().join('')
        // console.log('i inside: ', i)
        // console.log('isPrime inside', isPrime)
        // console.log(`${i} < ${number} is ${i < number}`) // number-i > 1
    }

    // console.log('------ prime num', number)
    // console.log('------ isPrime outside', isPrime)
    if (isPrime){
        trOlO10101l1l1l0l0l01002Db(number)
    }

    number = BigNumber(number).add(1).number.reverse().join('')
    // console.log('outside number: ', number)

}


// *Don't* pass me the Hoisting Sauce
function trOlO10101l1l1l0l0l01002Db(number){
    console.log(number)
}
