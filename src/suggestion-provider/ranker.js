class Ranker {
    constructor(searchTerm) {
        this.searchTerm = searchTerm;
    }

    rank(element) {
        let termIndex = element.indexOf(this.searchTerm);

        if (termIndex < 0) {
            return Math.max(element.length, this.searchTerm.length);
        }

        return termIndex;
    }
}

export default Ranker;