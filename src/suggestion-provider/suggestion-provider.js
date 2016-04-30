import DefaultRanker from './default-ranker';

class SuggestionProvider {
    constructor(items, allowFuzziness) {
        this._items = items;
        this._allowFuzzyness = !!allowFuzziness;
    }

    createSuggestions(searchTerm, maxNumOfSuggestions) {
        if (!searchTerm) {
            return [];
        }

        let ranker = new DefaultRanker(searchTerm.toLocaleLowerCase());

        return this._items
            .filter(x => this._allowFuzzyness ? true : x.length >= searchTerm.length)
            .map(s => ({
                value: s,
                rank: ranker.rank(s.toLocaleLowerCase())
            }))
            .sort((a,b) => a.rank - b.rank)
            .filter(x => this._allowFuzzyness ? true : x.rank < Math.max(x.value.length, searchTerm.length))
            .slice(0, maxNumOfSuggestions)
            .map(s => s.value);
    }
}

export default SuggestionProvider;