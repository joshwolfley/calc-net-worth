import React, { Component } from 'react';
import AssetForm from "./AssetForm";
import AssetAccounts from "./AssetAccounts"
import { addCommas } from "../functions"
import styles from '../index.css'
import {connect} from "react-redux";

class Asset extends Component  {

    // state = {
    //     assets: [
    //         {
    //             asset: "Cash",
    //             amount: 18000.91
    //         },
    //         {
    //             asset: "Home Equity",
    //             amount: 39840.66
    //         },
    //     ]
    // };

    render() {
        const {assets} = this.props;
        console.log(assets);
        let total_assets = 0.00;
        for (let i = 0; i < assets.length; i +=1){
            total_assets += parseFloat(assets[i].amount);
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

                <h2 className= { styles.total }> ------------------------------------------------------------------------- </h2>

                <AssetForm />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        assets: state.assets
    }
}

export default connect(mapStateToProps)(Asset)
