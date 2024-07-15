function greet(name) {
    if(name === undefined || name === null || name === ""){
        return "Hello, there"
    }
    if(Array.isArray(name)){
        return greetArray(name);
    }
    if(name === name.toUpperCase()){
        return "HELLO, " + name
    }
    return "Hello, " + name
}

function greetArray(name){
    return "Hello, " + name[0] + " and " + name[1]
}

module.exports = greet;