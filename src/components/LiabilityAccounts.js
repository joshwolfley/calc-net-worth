import React, {PureComponent} from "react";
import {addCommas} from "../functions";


class LiabilityAccounts extends PureComponent {

    render() {
        const {
            liability,
            amount,
            index,
        } = this.props;

        return (
            <div>
                <h3>{liability + ": $" + addCommas(amount)} </h3>
            </div>
        );
    };
}

export default LiabilityAccounts;