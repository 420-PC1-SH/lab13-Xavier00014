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
    let HelloText = "";
    for (let i = 0; i < name.length-2; i++) {
        HelloText = HelloText + name[i] + ", ";
    }
    return "Hello, " + HelloText + name[name.length-2] + " and " + name[name.length-1]
}

module.exports = greet;