const people = ["nani", "dadi", "taya"]

people.forEach(
    (n, i) => console.log(`inviting ${n} to dinner`)
);

console.log(`${people[2]} cannot make it`)

people[2] = "dada";

people.forEach(
    (n, i) => console.log(`inviting ${n} to dinner`)
);

console.log("a yo peeps! i found a new table");

people.unshift("abbu");
people.splice(people.length/2, 0, "ammi");
people.push("nana");

people.forEach(
    (n, i) => console.log(`inviting ${n} to dinner`)
);
