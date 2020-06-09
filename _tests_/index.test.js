import { add, sub } from '../src/utils/math';
import { TestScheduler } from 'jest';

describe('Check sub',()=>{
    test('Check the result of 5 - 2',() =>{
        expect(sub(5,2)).not.toBe(1)
    })

    test('Check the result of 5 - 3',() =>{
        expect(sub(5,2)).not.toBe(2)
    })

})