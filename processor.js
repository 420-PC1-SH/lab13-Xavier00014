function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if(rawData[0] !== '<'){
        throw new Error('Data is invalid ; should contain "<"');
    }
    if(rawData[rawData.length-1] !== '>'){
        throw new Error('Data is invalid ; should contain ">"');
    }
    if(isNaN(transmission.split("<")[1].split(">")[0])){
        throw new Error('Data is invalid ; not a number');
    }
    if(isNaN(parts[0])){
        throw new Error('id is invalid ; not a number');
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;