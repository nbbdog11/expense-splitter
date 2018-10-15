import split from '../splitter';
import { EVENLY, CUSTOM_PERCENTAGES } from '../splitTypes';

describe('splitter', () => {
    describe('splits evenly', () => {
        it('when split type is not specified', () => {
            const people = [
                { id: '1' },
                { id: '2' },
                { id: '3' }
            ];
            const cost = {
                amount: 30
            };
    
            const result = split(people, cost);
    
            expect(result).toEqual([
                { id: '1', cost: 10 },
                { id: '2', cost: 10 },
                { id: '3', cost: 10 }
            ]);
        });

        it('a cost evenly divisible by number of people', () => {
            const people = [
                { id: '1' },
                { id: '2' },
                { id: '3' }
            ];
            const cost = {
                amount: 30,
                splitType: EVENLY
            };
    
            const result = split(people, cost);
    
            expect(result).toEqual([
                { id: '1', cost: 10 },
                { id: '2', cost: 10 },
                { id: '3', cost: 10 }
            ]);
        });
    });

    describe('splits with custom percentages', () => {
        it('a zero cost', () => {
            const people = [
                { id: '1', share: .2 },
                { id: '2', share: .5 },
                { id: '3', share: .3 }
            ];
            const cost = {
                amount: 0,
                splitType: CUSTOM_PERCENTAGES
            };
    
            const result = split(people, cost);
    
            expect(result).toEqual([
                { id: '1', cost: 0 },
                { id: '2', cost: 0 },
                { id: '3', cost: 0 }
            ]);
        });

        it('a non-zero cost', () => {
            const people = [
                { id: '1', share: .2 },
                { id: '2', share: .5 },
                { id: '3', share: .3 }
            ];
            const cost = {
                amount: 1000,
                splitType: CUSTOM_PERCENTAGES
            };
    
            const result = split(people, cost);
    
            expect(result).toEqual([
                { id: '1', cost: 200 },
                { id: '2', cost: 500 },
                { id: '3', cost: 300 }
            ]);
        });
    });
});
