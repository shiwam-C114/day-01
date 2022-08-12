const { read } = require('./read');
const { create } = require('./create');
const { Delete } = require('./delete');
const { append } = require('./append');
const { rename } = require('./rename');
const { list } = require('./list');
let args = process.argv
args = args.slice(2)
console.log(args[1]);
switch (args[0]) {
    case "read":
        read(args[1])
        break;
    case "append":
        append(args[1], args[2])
        break;
    case "rename":
        rename(args[1], args[2])
        break;
    case "create":
        create(args[1])
        break;
    case "delete":
        Delete(args[1])
        break;
    case "list":
        list(args[1])
        break;
    default:
        break;
}
