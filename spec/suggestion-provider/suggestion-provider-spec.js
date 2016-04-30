import SuggestionProvider from '../../src/suggestion-provider/suggestion-provider';

const itemsToSearch = ['alfa', 'beta', 'delta', 'gamma'];

describe('createSuggestions tests', () => {
    xit('only returns elements containing the search term', () => {
        let provider = new SuggestionProvider(itemsToSearch);

        let result = provider.createSuggestions('e');

        expect(result.length).toBe(2);
        expect(result).toContain('beta');
        expect(result).toContain('delta');
    });

    it('returns an empty array if search term is falsy', () => {
        let provider = new SuggestionProvider(itemsToSearch);

        expect(provider.createSuggestions('').length).toBe(0);
        expect(provider.createSuggestions(null).length).toBe(0);
        expect(provider.createSuggestions(undefined).length).toBe(0);
    });

    it('returns no more than the specified maximum amount of suggestions', () => {
        let provider = new SuggestionProvider(itemsToSearch);

        let result = provider.createSuggestions('a', 3);

        expect(result.length).toBe(3);
    });
});