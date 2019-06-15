import * as LiabilityActionTypes from '../actiontypes/liability';

export const addLiability = (name, amount) => {

    amount = parseFloat(amount).toFixed(2);

    if (amount){
        return {
            type: LiabilityActionTypes.ADD_LIABILITY,
            name,
            amount
        };
    }


};

export const removeLiability = index => {

    return {
        type: LiabilityActionTypes.DELETE_LIABILITY,
        index
    }
};