import SuggestionProvider from '../../src/suggestion-provider/suggestion-provider';

const itemsToSearch = ['alfa', 'beta', 'delta', 'gamma', 'gamma ray', 'gamma ray gun', 'megalomania'];

describe('createSuggestions tests', () => {
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

    describe('fuzzy suggestioning disabled', () => {
        function assertUnfuzziness(provider) {
            let result = provider.createSuggestions('gamma r');

            expect(result.length).toBe(2);
            expect(result).not.toContain('gamma');
        }
        it('does not return items that does not include the search term', () => {
            let provider = new SuggestionProvider(itemsToSearch, false);
            assertUnfuzziness(provider);
        });

        it('disables fuzzy suggestioning as default', () => {
            let provider = new SuggestionProvider(itemsToSearch);
            assertUnfuzziness(provider);
        });
    });

    describe('fuzzy suggestioning enabled', () => {
        it('does not return items that does not include the search term', () => {
            let provider = new SuggestionProvider(itemsToSearch, true);
            let result = provider.createSuggestions('gamma r', 5);

            expect(result.length).toBe(5);
        });
    });

});