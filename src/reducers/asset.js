import * as AssetActionTypes from '../actiontypes/asset.js';

const initialState = {
    assets: [
        {
            account_name: 'Cash',
            amount: 300.32,
        }
        ,
        {
            account_name: 'A/R',
            amount: 20.89,
        }
        ,
        {
            account_name: 'Inventory',
            amount: 500,
        }
        ,
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

