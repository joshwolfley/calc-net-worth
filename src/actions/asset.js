import * as AssetActionTypes from '../actiontypes/asset';

export const addAsset = (name, amount) => {

    amount = parseFloat(amount).toFixed(2);

    if (amount) {
        return {
            type: AssetActionTypes.ADD_ASSET,
            name,
            amount
        };
    }


};