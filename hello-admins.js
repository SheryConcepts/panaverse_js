const users = ["admin", "shery", "zia", "areeba", "rania"];
for (let i = 0; i < users.length; ++i) {
    if (users[i] === "admin") {
        console.log("Hellow Admin would you like to see your logs today?")
    } else {
        console.log("greetings user", users[i])
        
    }
}