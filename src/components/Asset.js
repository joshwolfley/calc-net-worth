import React, { Component } from 'react';
import AssetForm from "./AssetForm";
import AssetAccounts from "./AssetAccounts"
import { addCommas } from "../functions"
import styles from '../index.css'
import {connect} from "react-redux";

class Asset extends Component  {

    render() {
        const {assets} = this.props;
        let total_assets = 0.00;
        for (let i = 0; i < assets.length; i +=1){
            if (parseFloat(assets[i].amount)) {
                total_assets += parseFloat(assets[i].amount);
            }
        }
        console.log(typeof total_assets);
        return (
            <div className= { styles.asset }>

                <h2>Assets</h2>

                {/* List Assets in Current State */}
                {assets.map( (asset, index) =>
                    <AssetAccounts
                        asset={asset.account_name}
                        amount={asset.amount}
                        index={index}
                    />
                )}
                <h3 className = { styles.total } > Total Assets: {"$" + addCommas(parseFloat(total_assets).toFixed(2))} </h3>


                <AssetForm />

            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        assets: state.assets.assets
    }
}

export default connect(mapStateToProps)(Asset)
