import * as vector from './vector';
import * as format from './format';
import * as angle from './angle';
declare global {
    interface Window {
        TCMath: {
            v2Sum: typeof vector.v2Sum;
            v3Sum: typeof vector.v3Sum;
            v2Length: typeof vector.v2Length;
            v3Length: typeof vector.v3Length;
            getV2Angle: typeof angle.getV2Angle;
            setDecimalPlaces: typeof format.setDecimalPlaces;
        };
    }
}
