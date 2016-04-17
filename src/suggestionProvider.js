class SuggestionProvider {
    constructor(items) {
        this._items = items;
    }

    createSuggestions(searchTerm, maxNumOfSuggestions) {
        if (!searchTerm) {
            return [];
        }

        return this._items
            .filter(s => s.indexOf(searchTerm) >= 0)
            .slice(0, maxNumOfSuggestions);
    }
}

export default SuggestionProvider;