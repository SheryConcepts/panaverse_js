var users = [];
if (users.length === 0) {
    console.log("we need users")
} else {
    for (let i = 0; i < users.length; ++i) {
        if (users[i] === "admin") {
            console.log("Hellow Admin would you like to see your logs today?")
        } else {
            console.log("greetings user", users[i])
            
        }
    }
}