import React, { Component } from 'react';
import AssetForm from "./AssetForm";
import AssetAccounts from "./AssetAccounts"
import { addCommas } from "../functions"

class Asset extends Component  {

    state = {
        assets: [
            {
                asset: "Cash",
                amount: 18000.91
            },
            {
                asset: "Home Equity",
                amount: 39840.66
            },
        ]
    };

    render() {

        let total_assets = 0.00;
        for (let i = 0; i < this.state.assets.length; i +=1){
            total_assets += this.state.assets[i].amount;
        }

        return (
            <div className="asset">

                <h2>Assets</h2>

                {/* List Assets in Current State */}
                {this.state.assets.map( (asset, index) =>
                    <AssetAccounts
                        asset={asset.asset}
                        amount={asset.amount}
                        index={index}
                    />
                )}
                <h3 className="total"> Total Assets: {"$" + addCommas(total_assets.toFixed(2))} </h3>

                <h2 className="total"> ------------------------------------------------------------------------- </h2>

                <AssetForm />

            </div>
        );
    };
}

export default Asset