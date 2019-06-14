import React, { PureComponent } from 'react';
import { addCommas } from '../functions'


class AssetAccounts extends PureComponent {

    render() {
        const {
            asset,
            amount,
            index,
        } = this.props;

        return (
            <div>
                <h3>{asset + ": $" + addCommas(amount)} </h3>
            </div>
        );
    };
}

export default AssetAccounts;