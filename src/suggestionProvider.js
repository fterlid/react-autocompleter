class SuggestionProvider {
    constructor(items) {
        this._items = items;
    }

    createSuggestions(searchTerm) {
        if (!searchTerm) {
            return [];
        }

        return this._items
            .filter(s => s.indexOf(searchTerm) >= 0);
    }
}

export default SuggestionProvider;