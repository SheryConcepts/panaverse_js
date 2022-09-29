function cars(name, man, ...args) {
    const obj = {
        name: name,
        manufacturer: man,
    }
    args.forEach((v, i) => obj[Object.keys(v)[0]] = Object.values(v)[0])
    return obj
}

const car_obj = cars("cultus", "suzuki", {color: "red"}, {size: "big"});
console.log(car_obj);