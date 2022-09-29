const person= "shery";
console.log(person.toLowerCase());
console.log(person.toUpperCase());

// break the string into words by detecting whitespace and joins them after uppercasing the first letter of evert word
function toTitleCase(string) {
    return string.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ')
}

console.log(toTitleCase("shery is good"));