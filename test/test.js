const { toBinary } = require('..');

/** toBinary Function */

console.log(toBinary('2147483647'))
//1111111111111111111111111111111(int)

console.log(toBinary('2147483647', false, false))
//1111111111111111111111111111111(string)

console.log(toBinary('2147483647', false, true))
//01111111111111111111111111111111(string)

console.log(toBinary('-2147483647', true, true))
//10000000000000000000000000000001(int)

console.log(toBinary('-32', true, true))
//1100000(int)

console.log(toBinary('-2147483647', false, true))
//10000000000000000000000000000001(string)

console.log(toBinary('-2147483647', false, false))
//Error: Negative is false

/** End */
