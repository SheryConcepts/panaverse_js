function make_shirt(size, message) {
    if (size === "large" || size == "medium") {
        console.log(`the size of the shirt is ${size} and message say ${message}, which is great`)
    } else {
        console.log(`shirts of size ${size} are wierd never seen them before`)
    }
}
make_shirt(2,"hello");