import React, { Component, PropTypes } from 'react';
import Asset from '../components/Asset'
import Liability from '../components/Liability'
import styles from '../index.css'
import {connect} from "react-redux";
import {addCommas} from '../functions'
import {clearAssets} from "../actions/sharedActions";
import {clearLiabilities} from "../actions/sharedActions";

class Balancesheet extends Component {

    state = {
        view: true
    };

    onSubmit = () => {
        const {
            clearAssets,
            clearLiabilities
        } = this.props;

        clearAssets();
        clearLiabilities();

    };


    render() {

        const {assets} = this.props;
        const {liabilities} = this.props;
        let net_worth = 0.00;
        for (let i = 0; i < assets.length; i +=1){
            if (parseFloat(assets[i].amount)){
                net_worth += parseFloat(assets[i].amount);
            }
        }
        for (let i = 0; i < liabilities.length; i +=1){
            if (parseFloat(liabilities[i].amount)){
                net_worth -= parseFloat(liabilities[i].amount);
            }
        }

        let net_worth_class = styles.positiveNetWorth;
        if (net_worth < 0) {
            net_worth_class = styles.negativeNetWorth
        }

        return (
            <div className={styles.balancesheet}>
                <h1 className = { styles.title }> My Personal Net Worth Calculator </h1>

                <Asset />
                <Liability />

                <div>

                    <h3 className={net_worth_class}>My Net Worth: ${addCommas(parseFloat(net_worth).toFixed(2))} </h3>
                    <button
                        className={styles.finish}
                        onClick={this.onSubmit}
                        type="submit"
                            value="Finish">
                        Clear Net Worth Calculator
                    </button>
                </div>
            </div>
            );

    };
}

function mapStateToProps(state) {
    return{
        assets: state.assets.assets,
        liabilities: state.liabilities.liabilities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearAssets: () => dispatch(clearAssets()), // firing off an action
        clearLiabilities: () => dispatch(clearLiabilities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balancesheet);
