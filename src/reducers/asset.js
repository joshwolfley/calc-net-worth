import * as AssetActionTypes from '../actiontypes/asset.js';

const initialState = {

    assets: [
        // {
        //     account_name: 'Cash',
        //     amount: 18000.91
        // },
        // {
        //     account_name: "Home Equity",
        //     amount: 39840.66
        // },

    ]

};


export default function Asset(state=initialState, action){

    switch (action.type) {

        case AssetActionTypes.ADD_ASSET: {
            return Object.assign({}, state, {
                assets: [...state.assets, {
                    account_name: action.name,
                    amount: action.amount
                }]
            })
        }

        default:
            return state
    }
}

