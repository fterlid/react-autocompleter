import SuggestionProvider from '../src/suggestionProvider';

describe('Suggestion provider tests', () => {
    it('only returns elements containing the search term', () => {
        let itemsToSearch = ['alfa', 'beta', 'delta', 'gamma'];
        let provider = new SuggestionProvider(itemsToSearch);

        let result = provider.createSuggestions('e');

        expect(result.length).toBe(2);
        expect(result).toContain('beta');
        expect(result).toContain('delta');
    });
});