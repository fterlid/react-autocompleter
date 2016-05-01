import Ranker from '../../src/suggestion-provider/ranker';

describe('rank method', () => {
    describe('calculates Levenshtein distance', () => {
        function assertEditDistance(searchTerm, item, expectedDistance) {
            let ranker = new Ranker(searchTerm);
            expect(ranker.rank(item)).toBe(expectedDistance);
        }

        it('is the length of the search term if item length is 0', () => {
            assertEditDistance('term', '', 4);
        });

        it('is the length of the item is search term length is 0', () => {
            assertEditDistance('', 'ice cream', 9);
        });

        it('is the edit distance between the item and the search term when both have content', () => {
            assertEditDistance('kitten', 'sitting', 3);
            assertEditDistance('flaw', 'lawn', 2);
        });
    });
});