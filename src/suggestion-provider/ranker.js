// See https://en.wikipedia.org/wiki/Levenshtein_distance

// Starting with recursive version just for fun
function levenshteinDistanceRecursive(s1, s1Length, s2, s2Length) {
    if (s1Length === 0) {
        return s2Length;
    }

    if (s2Length === 0) {
        return s1Length;
    }

    let cost = 0;
    if (s1[s1Length-1] !== s2[s2Length-1]) {
        cost = 1;
    }

    return Math.min(
        levenshteinDistanceRecursive(s1, s1Length - 1, s2, s2Length) + 1,
        levenshteinDistanceRecursive(s1, s1Length, s2, s2Length - 1) + 1,
        levenshteinDistanceRecursive(s1, s1Length - 1, s2, s2Length - 1) + cost
    );
}

class Ranker {
    constructor(searchTerm) {
        this.searchTerm = searchTerm;
    }

    rank(element) {
        return levenshteinDistanceRecursive(this.searchTerm, this.searchTerm.length, element, element.length);
    }
}

export default Ranker;