import * as AssetActionTypes from '../actiontypes/asset';

export const addAsset = (name, amount) => {

    amount = parseFloat(amount);

    if (amount) {
        return {
            type: AssetActionTypes.ADD_ASSET,
            name,
            amount
        };
    }


};

export const removeAsset = index => {

    return {
        type: AssetActionTypes.DELETE_ASSET,
        index
    }
};