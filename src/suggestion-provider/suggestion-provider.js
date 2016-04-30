import DefaultRanker from './default-ranker';

class SuggestionProvider {
    constructor(items) {
        this._items = items;
    }

    createSuggestions(searchTerm, maxNumOfSuggestions) {
        if (!searchTerm) {
            return [];
        }

        let ranker = new DefaultRanker(searchTerm);

        return this._items
            .map(s => ({
                value: s,
                rank: ranker.rank(s)
            }))
            .sort((a,b) => a.rank - b.rank)
            .slice(0, maxNumOfSuggestions)
            .map(s => s.value);
    }
}

export default SuggestionProvider;