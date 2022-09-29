const magicians = ["jadoo", "dumbledoore", "harry potter"];
magicians.forEach((v, i) => magicians[i] = "great "+ v)
function show_magicians(m) {
    m.forEach(v => console.log(v));
}
show_magicians(magicians);