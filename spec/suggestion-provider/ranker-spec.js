import Ranker from '../../src/suggestion-provider/ranker';

describe('rank tests', () => {
    describe('elements that contains the search term', () => {
        it('ranks according to the index of the search term', () => {
            let ranker = new Ranker('ele');
            expect(ranker.rank('element')).toBe(0);

            ranker = new Ranker('lem');
            expect(ranker.rank('element')).toBe(1);

            ranker = new Ranker('t');
            expect(ranker.rank('element')).toBe(6);
        });
    });

    describe('elements that do not contain the search term', () => {
        it('ranks with a value equal to the length of the longest string', () => {
            let ranker = new Ranker('xxx');
            expect(ranker.rank('element')).toBe(7);

            ranker = new Ranker('123456789');
            expect(ranker.rank('element')).toBe(9);
        });
    });
});