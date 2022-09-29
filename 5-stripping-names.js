const n = "   \n  \t Azam";
console.log(n);
const n_only_alphs = n.replace(/[^a-zA-z]/g, ''); // regex here replaces any non alphabet character with nothing
console.log(n_only_alphs);