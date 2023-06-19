// Code your solution here
const findMatching = function(drivers, name) {
    let match = drivers.filter((item) => item.toLowerCase() === name.toLowerCase())
    return match
}

const fuzzyMatch = function(drivers, name) {
    let match
    match = drivers.filter((item)=> item.charAt(0) === name.charAt(0))
    return match
}

const matchName = function(drivers, name) {
    let match
    match = drivers.filter((item) => item.name === name)
    return match
}