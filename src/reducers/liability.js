import * as LiabilityActionTypes from '../actiontypes/liability';

const initialState = {

    liabilities: [
        // {
        //     account_name: "Car Loan",
        //     amount: 18000.91
        // },
    ]

};



export default function Liability(state=initialState, action){

    switch (action.type) {

        case LiabilityActionTypes.ADD_LIABILITY: {
            return Object.assign({}, state, {
                liabilities: [...state.liabilities, {
                    account_name: action.name,
                    amount: action.amount
                }]
            })
        }

        case LiabilityActionTypes.CLEAR_LIABILITIES: {
            return Object.assign({}, state, {
                    liabilities: []
                }
            )
        }

        default:
            return state
    }
}