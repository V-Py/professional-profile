import {it, except, expect} from 'vitest';
import { formatCurrency } from './formatCurrency';

it('adds the $ before the given number', () => {
    const resultA = formatCurrency(1) 
    expect(resultA).toBe('$1');

    const resultB = formatCurrency(42);
    expect(resultB).toBe('$42')
})