import { setDecimalPlaces } from './format';
import { getArithmeticMean, getStandardDeviation } from './statistics';

/**
 * Returns a copy of array, where each value will be in the range [0, 1].
 * const newValue = (value - array_min) / (array_max - array_min)
 */
export const mlNormalize = (data: number[], decimalPlaces = Infinity): number[] => {
    const copy = [...data];

    const min = Math.min(...copy);
    const max = Math.max(...copy);

    const diff = max - min;
    if(diff === 0) return [0];

    for(let i=0; i<copy.length; i++) {
        copy[i] = setDecimalPlaces((copy[i] - min) / diff, decimalPlaces);
    }

    return copy;
};

export const mlStandardize = (data: number[], decimalPlaces = Infinity): number[] => {
    const mean = getArithmeticMean(data) ?? 0;
    const stdDev = getStandardDeviation(data, decimalPlaces);
    return data.map(val => (val - mean) / stdDev);
};