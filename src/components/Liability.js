import React, { PropTypes, Component } from 'react';
import LiabilityForm from "./LiabilityForm";
import { addCommas } from "../functions";
import LiabilityAccounts from "./LiabilityAccounts"
import styles from '../index.css'
import {connect} from 'react-redux'

class Liability extends Component {

    // state = {
    //         liabilities: [
    //             {
    //                 liability: "Student Loans",
    //                 amount: 18006.91
    //             },
    //             {
    //                 liability: "Car Loans",
    //                 amount: 1043.66
    //             },
    //         ]
    //     };

    render () {
        const {liabilities} = this.props;
        console.log(liabilities);
        let total_liab = 0.00;
        for (let i = 0; i < liabilities.length; i +=1){
            total_liab += parseFloat(liabilities[i].amount);
        }
        return (
            <div className="liability">
                <h2>Liabilities</h2>

                {/* List Liabilities in Current State */}
                {liabilities.map( (liability, index) =>
                    <LiabilityAccounts
                        liability={liability.account_name}
                        amount={liability.amount}
                        index={index}
                    />
                )}

                <h3 className={styles.total}> Total Liabilities: {"$" + addCommas(parseFloat(total_liab).toFixed(2))}</h3>
                <h2 className={styles.total}> ------------------------------------------------------------------------- </h2>

                <LiabilityForm />
            </div>
        );
    };

}

function mapStateToProps(state) {
    return {
        liabilities: state.liabilities
    }
}

export default connect(mapStateToProps)(Liability)
