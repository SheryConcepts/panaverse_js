function sandwich(...args) {
    let string = "This sandwich includes";
    for (let i = 0; i<args.length; ++i) {
        if (i === args.length - 1) {
            string = string + " " + "and" + " " + args[i] + "."
        } else {
            string = string + " " + args[i] + ","
        }
    }
    return string;
}
const summary = sandwich("apple", "fish", "hams", "chiken", "potato");
console.log(summary);