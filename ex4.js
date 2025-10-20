function processFactorsAndMultiples(input) {
    // Split into parts and clean whitespace
    const parts = input.split(":").map(p => p.trim());

    if (parts.length !== 2) {
        return "Invalid input format. Expected 'factors : multiples'";
    }

    // Helper to parse space-separated numbers
    const parseNumbers = str => str.split(/\s+/).map(Number).filter(n => !isNaN(n));

    const factors = parseNumbers(parts[0]);
    const multiples = parseNumbers(parts[1]);

    // Calculate the sum of numbers divisible by any factor
    const result = multiples.reduce((sum, num) => {
        return factors.some(f => num % f === 0) ? sum + num : sum;
    }, 0);

    // Construct output string
    return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
}
