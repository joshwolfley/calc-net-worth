import React, { PropTypes, Component } from 'react';
import LiabilityForm from "./LiabilityForm";
import { addCommas } from "../functions";
import LiabilityAccounts from "./LiabilityAccounts"
import styles from '../index.css'
import {connect} from 'react-redux'

class Liability extends Component {

    render () {
        const {liabilities} = this.props;
        let total_liab = 0.00;
        for (let i = 0; i < liabilities.length; i +=1){
            if (parseFloat(liabilities[i].amount)){
                total_liab += parseFloat(liabilities[i].amount);
            }
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

                <LiabilityForm />

            </div>
        );
    };

}

function mapStateToProps(state) {
    return {
        liabilities: state.liabilities.liabilities
    }
}

export default connect(mapStateToProps)(Liability)
