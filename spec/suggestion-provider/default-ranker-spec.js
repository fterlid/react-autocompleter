import DefaultRanker from '../../src/suggestion-provider/default-ranker';

describe('rank tests', () => {
    describe('elements that contains the search term', () => {
        it('ranks according to the index of the search term', () => {
            let ranker = new DefaultRanker('ele');
            expect(ranker.rank('element')).toBe(0);

            ranker = new DefaultRanker('lem');
            expect(ranker.rank('element')).toBe(1);

            ranker = new DefaultRanker('t');
            expect(ranker.rank('element')).toBe(6);
        });
    });

    describe('elements that do not contain the search term', () => {
        it('ranks with a value equal to the length of the longest string', () => {
            let ranker = new DefaultRanker('xxx');
            expect(ranker.rank('element')).toBe(7);

            ranker = new DefaultRanker('123456789');
            expect(ranker.rank('element')).toBe(9);
        });
    });
});