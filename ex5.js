// Custom parse function that throws on NaN
let parse = (i) => {
    let o = parseInt(i);
    if (isNaN(o)) throw "NaN";
    return o;
};

// === Version 1: Original Exercise 4 with corruption detection ===
function ex4(input) {
    const parts = input.split(":");
    if (parts.length !== 2) {
        return "Invalid input format. Expected 'factors : multiples'";
    }

    try {
        const factors = parts[0].trim().split(/\s+/).map(parse);
        const multiples = parts[1].trim().split(/\s+/).map(parse);

        // Sum of multiples divisible by any factor
        const result = multiples.reduce((sum, num) =>
            factors.some(f => num % f === 0) ? sum + num : sum, 0
        );

        return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
    } catch (e) {
        return `corrupt : ${input}`;
    }
}

// === Version 2: Fixed version (removes bad values or shows corrupt if none) ===
function ex4_fixed(input) {
    const parts = input.split(":");
    if (parts.length !== 2) {
        return "Invalid input format. Expected 'factors : multiples'";
    }

    const tryParseList = (list) => {
        const valid = [];
        for (let i of list) {
            try {
                valid.push(parse(i));
            } catch (e) {
                // skip
            }
        }
        return valid;
    };

    const rawFactors = parts[0].trim().split(/\s+/);
    const rawMultiples = parts[1].trim().split(/\s+/);

    const factors = tryParseList(rawFactors);
    const multiples = tryParseList(rawMultiples);

    if (factors.length === 0 || multiples.length === 0) {
        return `corrupt : ${input}`;
    }

    const result = multiples.reduce((sum, num) =>
        factors.some(f => num % f === 0) ? sum + num : sum, 0
    );

    return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
}

// === Example Tests ===
console.log("Version 1:");
console.log(ex4("2 3 5 : 6 7"));                       // OK
console.log(ex4("3 5 hello: 1 2 3 4 5 6 7 8 9"));       // corrupt
console.log(ex4("2 3 5 67"));                          // Invalid format
console.log(ex4("23 : 3 5 hello: 1 2 3 4 5 6 7 8 9"));  // corrupt

console.log("\nVersion 2 (Fixed):");
console.log(ex4_fixed("2 3 5 : 6 7"));                       // OK
console.log(ex4_fixed("3 5 hello: 1 2 3 4 5 6 7 8 9"));       // removes 'hello'
console.log(ex4_fixed("2 3 5 67"));                          // Invalid format
console.log(ex4_fixed("23 : 3 5 hello: 1 2 3 4 5 6 7 8 9"));  // removes 'hello'
console.log(ex4_fixed("hello there: world here"));           // corrupt
