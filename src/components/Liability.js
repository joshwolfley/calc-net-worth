import React, { PropTypes, Component } from 'react';
import LiabilityForm from "./LiabilityForm";
import { addCommas } from "../functions";
import LiabilityAccounts from "./LiabilityAccounts"

class Liability extends Component {

    state = {
        liabilities: [
            {
                liability: "Student Loans",
                amount: 18006.91
            },
            {
                liability: "Car Loans",
                amount: 1043.66
            },
        ]
    };

    render () {

        let total_liab = 0.00;
        for (let i = 0; i < this.state.liabilities.length; i +=1){
            total_liab += this.state.liabilities[i].amount;
        }

        return (
            <div className="liability">
                <h2>Liabilities</h2>

                {/* List Liabilities in Current State */}
                {this.state.liabilities.map( (liability, index) =>
                    <LiabilityAccounts
                        liability={liability.liability}
                        amount={liability.amount}
                        index={index}
                    />
                )}

                <h3 className="total"> Total Liabilities: {"$" + addCommas(total_liab.toFixed(2))}</h3>
                <h2 className="total"> ------------------------------------------------------------------------- </h2>

                <LiabilityForm />
            </div>
        );
    };

}


export default Liability