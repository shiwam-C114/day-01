const { randomInt } = require('node:crypto');

let args = process.argv
args = args.slice(2)
args[1] = +args[1]
args[2] = +args[2]

console.log(
    calculator()
)
function calculator() {

    switch (args[0]) {
        case "add":
            return args[1] + args[2]
        case "sub":
            return args[1] + args[2]
        case "mult":
            return args[1] + args[2]
        case "divide":
            return args[1] + args[2]
        case "sin":
            return Math.sin(args[1])
        case "cos":
            return Math.cos(args[1])
        case "tan":
            return Math.tan(args[1])
        case "random":
            return randomInt(args[1] || 3)
        default:
            return args[0]
    }
}
