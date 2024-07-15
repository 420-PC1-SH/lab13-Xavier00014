function greet(transmission) {
    if(transmission === undefined || transmission === null || transmission === ""){
        return "Hello, there"
    }
    return "Hello, " + transmission
}
module.exports = greet;