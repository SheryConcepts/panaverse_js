
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

console.log("i can only invite 2 people");

people.pop();
console.log("i am sorry nana");

people.pop();
console.log("i am sorry dada");

people.pop();
console.log("i am sorry dadi");

people.pop();
console.log("i am sorry ammi");


people.forEach(
    (n, i) => console.log(`inviting ${n} to dinner`)
);

people.pop();
people.pop();
console.log(people);