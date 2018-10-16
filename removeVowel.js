function removeVowel (str) {

    let lower = str.toLowerCase();

    if(lower.length === 0 || typeof(lower) !== "string") {
        return "";
    }
    
    if(lower.charAt(0) === "a" || lower.charAt(0) === "e" || lower.charAt(0) === "i" || lower.charAt(0) === "o" || lower.charAt(0) === "u"){
        return removeVowel(lower.substring(1));
    }
    return lower.charAt(0) + removeVowel(lower.substring(1));
}

console.log(removeVowel("DOOR"));