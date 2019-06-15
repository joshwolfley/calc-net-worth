import * as AssetActionTypes from '../actiontypes/asset'
import * as LiabilityActionTypes from '../actiontypes/liability'


export const clearAssets = () => {
    return {
        type: AssetActionTypes.CLEAR_ASSETS
    };

};

export const clearLiabilities = () => {
    return {
        type: LiabilityActionTypes.CLEAR_LIABILITIES
    };

};

