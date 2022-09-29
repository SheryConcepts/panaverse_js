const magicians = ["jadoo", "dumbledoore", "harry potter"];

function make_great(m) {
    const new_m = [...m];
    m.forEach((v, i) => new_m[i] = "great "+ v)
    return new_m
}

function show_magicians(m) {
    m.forEach(v => console.log(v));
}

const great_magicians = make_great(magicians);
show_magicians(great_magicians);
show_magicians(magicians);