n = "shery";
console.log(n.toUpperCase());
console.log(n.toLowerCase());

function toTitleCase(s){
    return s.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
}

console.log(toTitleCase(n));