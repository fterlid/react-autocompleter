// See https://en.wikipedia.org/wiki/Levenshtein_distance

function LevenshteinDistance(s1, s2) {
    // Wagner-Fisher algorithm
    let x = s1.length + 1;
    let y = s2.length + 1;
    let distances = new Array(x);

    for (let i = 0; i < x; i++) {
        let row = new Array(y);
        row.fill(0);
        row[0] = i;
        distances[i] = row;
    }

    for (let j = 1; j < y; j++) {
        distances[0][j] = j;
    }

    for (let i = 1; i < x; i++) {
        for (let j = 1; j < y; j++) {
            let substitutionCost = s1[i-1] === s2[j-1] ? 0 : 1;

            distances[i][j] = Math.min(
                distances[i-1][j] + 1, // deletion
                distances[i][j-1] + 1, // insertion
                distances[i-1][j-1] + substitutionCost // substitution
            );
        }
    }

    return distances[x-1][y-1];
}

class Ranker {
    constructor(searchTerm) {
        this.searchTerm = searchTerm;
    }

    rank(element) {
        return LevenshteinDistance(this.searchTerm, element);
    }
}

export default Ranker;