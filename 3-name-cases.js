n = "shery";
console.log(n.toUpperCase());
console.log(n.toLowerCase());

// breaks the string into word detecting by whitespace character and uppercases the 
// first lettter of evrery word concatenates them and then joins the words
function toTitleCase(s){
    return s.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
}

console.log(toTitleCase(n));