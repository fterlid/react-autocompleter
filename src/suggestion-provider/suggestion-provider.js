import Ranker from './ranker';

class SuggestionProvider {
    constructor(items, allowFuzziness) {
        this._items = items;
        this._allowFuzzyness = !!allowFuzziness;
    }

    createSuggestions(searchTerm, maxNumOfSuggestions) {
        if (!searchTerm) {
            return [];
        }

        let term = searchTerm.toLocaleLowerCase();
        let ranker = new Ranker(term);

        return this._items
            .filter(x => this._allowFuzzyness ? true : x.length >= term.length)
            .map(s => {
                let key = s.toLocaleLowerCase();
                return {
                    key,
                    value: s,
                    rank: ranker.rank(key)
                };
            })
            .sort((a,b) => a.rank - b.rank)
            .filter(x => this._allowFuzzyness ? true : x.key.indexOf(term) >= 0)
            .slice(0, maxNumOfSuggestions)
            .map(s => s.value);
    }
}

export default SuggestionProvider;