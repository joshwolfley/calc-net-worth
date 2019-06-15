import * as LiabilityActionTypes from '../actiontypes/liability';

export const addLiability = (name, amount) => {

    return {
        type: LiabilityActionTypes.ADD_LIABILITY,
        name,
        amount
    };

};

export const removeLiability = index => {

    return {
        type: LiabilityActionTypes.DELETE_LIABILITY,
        index
    }
};