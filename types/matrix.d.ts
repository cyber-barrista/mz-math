import { Matrix2, Matrix3, Matrix, Vector } from './types';
export declare const mSum: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const m2Sum: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m3Sum: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
export declare const mSub: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const m2Sub: (matrix1: Matrix2, matrix2: Matrix2, decimalPlaces?: number) => Matrix2;
export declare const m3Sub: (matrix1: Matrix3, matrix2: Matrix3, decimalPlaces?: number) => Matrix3;
export declare const mMulScalar: (m: Matrix, scalar: number, decimalPlaces?: number) => Matrix;
export declare const m2MulScalar: (m2: Matrix2, scalar: number, decimalPlaces?: number) => Matrix2;
export declare const m3MulScalar: (m3: Matrix3, scalar: number, decimalPlaces?: number) => Matrix3;
export declare const mTranspose: (m: Matrix) => Matrix;
export declare const m2Transpose: (m2: Matrix2) => Matrix;
export declare const m3Transpose: (m3: Matrix3) => Matrix;
export declare const mReset: (m: Matrix, defaultValue?: number) => Matrix;
export declare const m2Reset: (m2: Matrix2, defaultValue?: number) => Matrix2;
export declare const m3Reset: (m3: Matrix3, defaultValue?: number) => Matrix3;
export declare const m2x2: (defaultValue?: number) => Matrix2;
export declare const m3x3: (defaultValue?: number) => Matrix3;
export declare const mNxM: (N: number, M: number, defaultValue?: number) => Matrix;
export declare const mMul: (matrix1: Matrix, matrix2: Matrix, decimalPlaces?: number) => Matrix;
export declare const mMulVector: (matrix: Matrix, vector: Vector, decimalPlaces?: number) => Vector;
